#!/usr/bin/env bash
# Correct animated-WebP -> MP4 converter using libwebp's anim_dump, which is the
# reference decoder: it composites every frame honoring each frame's dispose/blend
# mode (so no fragmentation / ghosting / color artifacts) and is low-memory.
# ffmpeg then encodes the dumped PNG frames to H.264.
#
# Usage: bash tools/convert-anim.sh <file.webp> [maxframes]   (maxframes 0 = all)
cd "$(dirname "$0")/.." || exit 1
f="$1"
MAX="${2:-0}"
[ -f "$f" ] || { echo "missing: $f"; exit 1; }
base="${f%.webp}"

tmp="$(mktemp -d)"
# Decode to a LOCAL ext4 copy first (faster than the /mnt/c 9p mount).
cp "$f" "$tmp/src.webp"
anim_dump -folder "$tmp" -prefix f_ "$tmp/src.webp" >/dev/null 2>&1 || { echo "anim_dump failed: $f"; rm -rf "$tmp"; exit 1; }
total=$(ls "$tmp"/f_*.png 2>/dev/null | wc -l)

# fps from average frame duration (ms) reported by webpmux
avg_ms="$(webpmux -info "$f" 2>/dev/null | awk '/^[[:space:]]*[0-9]+:/{s+=$7;c++} END{if(c>0&&s>0)print s/c; else print 33}')"
fps="$(awk -v d="$avg_ms" 'BEGIN{x=1000/d; if(x<1||x>60)x=24; printf "%.3f", x}')"

limit=""
[ "$MAX" -gt 0 ] && limit="-frames:v $MAX"
echo "$f : $total frames @ ${fps}fps ${MAX:+(cap $MAX)}"

ffmpeg -y -hide_banner -loglevel error -framerate "$fps" -i "$tmp/f_%04d.png" $limit \
  -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p -movflags +faststart \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "$base.mp4" && echo "  mp4 ok" || echo "  mp4 FAIL"

rm -rf "$tmp"
printf "  SIZES  webp:%s  mp4:%s\n" \
  "$(du -h "$f" | cut -f1)" "$(du -h "$base.mp4" 2>/dev/null | cut -f1)"
