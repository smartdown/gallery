# Build a Gallery distribution into dist/ for gh-pages purposes.

rm -rf dist/
mkdir dist/
cp -r *.md dist/
cp -r resources/ dist/resources/
cp -r JSPsych/ dist/JSPsych/
cp index.html dist/
cp gussalufz-16-solved.exolve dist/
cp DataElements.csv dist/
