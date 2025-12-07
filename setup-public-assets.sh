#!/bin/bash

# public 폴더에 images와 videos 복사
echo "Setting up public assets..."

# public 폴더 생성
mkdir -p public/images public/videos

# images 폴더 복사
if [ -d "images" ]; then
  cp -r images/* public/images/
  echo "✓ Images copied to public/images/"
else
  echo "✗ images folder not found"
fi

# videos 폴더 복사
if [ -d "videos" ]; then
  cp -r videos/* public/videos/
  echo "✓ Videos copied to public/videos/"
else
  echo "✗ videos folder not found"
fi

# favicon 복사
if [ -f "favicon.ico" ]; then
  cp favicon.ico public/
  echo "✓ favicon.ico copied to public/"
fi

echo ""
echo "Setup complete! Now run 'npm start' to see the images."

