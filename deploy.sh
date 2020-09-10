#!/usr/bin/env sh

set -e

yarn build

cd dist

git init
git add -addgit commit -m 'deploy'

git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages