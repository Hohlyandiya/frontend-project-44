install:
	npm ci

brain-games:
	node frontend-project-44/bin/brain-games.js

brain-even:
	node frontend-project-44/bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint