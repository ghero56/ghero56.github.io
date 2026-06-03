#!/usr/bin/env bash
# Convert all heavy animated WebPs to MP4 using the correct anim_dump method.
cd "$(dirname "$0")/.." || exit 1
MAX="${1:-0}"
FILES=(
  "public/images/games/zombie.webp"
  "public/images/games/primal.webp"
  "public/images/projects/hardware/printer.webp"
  "public/images/projects/software/engine.webp"
  "public/images/projects/masonry.webp"
  "public/images/projects/software/aliat/7.webp"
)
for f in "${FILES[@]}"; do
  bash tools/convert-anim.sh "$f" "$MAX"
done
echo "=== ALL DONE ==="
