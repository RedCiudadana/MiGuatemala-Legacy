#!/bin/bash
git branch -D gh-pages && \
git push origin --delete gh-pages  && \
git checkout -b gh-pages  && \
ember build --environment production  && \
git rm -rf app \
    config \
    tests \
    ember-cli-build.js \
    bower.json \
    package.json \
    testem.json \
    .bowerrc \
    .editorconfig \
    .jshintrc \
    .travis.yml && \
mv dist/* . && \
git add . && \
git commit -m "Publishing to github pages" && \
git push origin gh-pages && \
git checkout dev-ember
