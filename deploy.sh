#!/usr/bin/env sh

set -e

npm run npmbuild

cd dist

git init
git add -add
git commit -m 'deploy'

git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages