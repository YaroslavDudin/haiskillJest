setup :
	npm ci
	npm i --save-dev jest
test:
	npx stryker run
	npm test