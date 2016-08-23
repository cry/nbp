# Use traceur to transpile

echo Running traceur --out build/nbp.js --script nbp_es6.js

traceur --out build/nbp.js --script nbp_es6.js

echo Running uglifyjs --compress --screw-ie8 build/nbp.js -o build/nbp.min.js

uglifyjs --compress --screw-ie8 build/nbp.js -o build/nbp.min.js