#!/bin/bash
set -e

echo "Pushing changes to GitHub main..."

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "perf: optimize portfolio loading performance

- Add viewport margin optimization for smooth scroll animations
- Enable lazy loading for images and add Next.js image optimization config
- Reduce animation duration for more responsive transitions
- Improve metadata and viewport settings for better SEO
- Configure AVIF and WebP image formats with proper caching strategy"

# Push to main
git push origin v0/zyee-8e01ea06:main

echo "✓ Successfully pushed to main branch!"
