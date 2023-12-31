install:
	npm ci

brain-games:
	node src/games/brain-games.js

brain-even:
	node src/games/brain-even.js

brain-calc:
	node src/games/brain-calc.js

brain-gcd:
	node src/games/brain-gcd.js

brain-prime:
	node src/games/brain-prime.js

brain-progression:
	node src/games/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint