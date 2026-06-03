#!/usr/bin/env bash
# Convert all JPG/JPEG/PNG photos in a directory to WebP (and remove the
# originals). WebP is ~25-35% smaller than JPG and far smaller than a
# photographic PNG at similar quality.
# Usage: bash tools/convert-photos-webp.sh public/images/events/ggj2026
cd "$(dirname "$0")/.." || exit 1
dir="${1:?usage: convert-photos-webp.sh <dir>}"
[ -d "$dir" ] || { echo "not a directory: $dir"; exit 1; }
before="$(du -sh "$dir" | cut -f1)"

shopt -s nullglob nocaseglob
for f in "$dir"/*.jpg "$dir"/*.jpeg "$dir"/*.png; do
  [ -f "$f" ] || continue
  ext="${f##*.}"; q=80
  [ "${ext,,}" = "png" ] && q=82
  out="${f%.*}.webp"
  if cwebp -quiet -q "$q" "$f" -o "$out"; then
    rm -f "$f"
  else
    echo "  FAILED: $f"
  fi
done

after="$(du -sh "$dir" | cut -f1)"
echo "$dir: $before -> $after"
ls "$dir" | sed 's/^/  /'
