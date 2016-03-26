#!/bin/bash
git branch -D gh-pages
git push dev --delete gh-pages
git checkout -b gh-pages
ember build --environment production
git rm app config tests ember-cli-build.js bower.json package.json testem.json .bowerrc .editorconfig .jshintrc .travis.yml
mv dist/* .
git add .
git commit -m "Publishing to github pages"
git push dev gh-pages
git checkout dev-ember
