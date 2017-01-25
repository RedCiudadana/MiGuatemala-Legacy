#!/bin/bash
echo "Deleting local gh-pages branch" && \
git branch -D gh-pages && \
echo "Checking out new local gh-pages branch" && \
git checkout -b gh-pages && \
npm install && bower install && \
echo "Building.." && \
ember build --environment production && \
echo "Building done, deleting" && \
git rm -rf app \
    config \
    tests \
    ember-cli-build.js \
    bower.json \
    package.json \
    testem.js \
    .bowerrc \
    .editorconfig \
    .jshintrc \
    .travis.yml \
    tmp \
    node_modules \
    bower_components && \
echo "Moving stuff" && \
mv dist/* . && \
echo "Adding to commit" && \
git add . && \
echo "Commiting" && \
git commit -m "Publishing to github pages" && \
echo "Deleting remote gh-pages branch" && \
git push origin --delete gh-pages && \
echo "Pushing new remote gh-pages branch" && \
git push origin gh-pages && \
echo "Going back to default branch" && \
git checkout dev-ember
