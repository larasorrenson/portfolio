#!/bin/bash

# Exit on any error
set -e

echo "🔧 Building Angular project for GitHub Pages..."
ng build --base-href "https://james-carley.com/"

echo "🚀 Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=dist/portfolio/browser

echo "✅ Deployment complete: https://james-carley.com"
