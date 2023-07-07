# Github Actions

Here are some examples you can use to automate different process using github actions for CI/CD.

_(The names of the files are as an example, you can name them as you want, the location of them is the important thing)._

## PR Labeler

this tool allow us to set a label for the pr based on the pull request title and allow a future automation of the
semantic versioning

```yml
name: PR Labeler
on:
  pull_request:
    types: [opened, synchronize, assigned, edited, review_requested, ready_for_review]

jobs:
  pr-labeler:
    runs-on: ubuntu-latest
    steps:
      - uses: TimonVS/pr-labeler-action@v3
        with:
          configuration-path: .github/pr-labeler.yml # optional, .github/pr-labeler.yml is the default value
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

to make it work we neet to pass the configuration object in the configuration path and this is our recommended one:

```yml
chore: 'chore/*'
ci: 'ci/*'
docs: 'docs/*'
feature: ['feature/*', 'feat/*']
fix: 'fix/*'
refactor: 'refactor/*'
style: 'style/*'
test: 'test/*'
```

## lint and test

With this action we can verify if the linter an test passes before merge into the main branch

```yml
name: Linters and Test

on:
  pull_request:
    branches:
      - master
    types: [opened, edited, reopened, synchronize]
jobs:
  run-linters-tests:
    name: Run Linters and Tests
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: '12.x'
          registry-url: 'https://npm.pkg.github.com'
          scope: '@modyo'
      - name: Get npm cache directory path
        id: npm-cache-set-path
        run: echo "::set-output name=dir::$(npm cache dir)"
      - uses: actions/cache@v1
        id: npm-cache # use this to check for `cache-hit` (`steps.npm-cache.outputs.cache-hit != 'true'`)
        with:
          path: ${{ steps.npm-cache-set-path.outputs.dir }}
          key: ${{ runner.os }}-npm-${{ hashFiles('**/npm-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-npm-
      - name: Install packages
        if: steps.npm-cache-set-path.outputs.cache-hit != 'true'
        # if your project use more than one private registry you cad add it like this:
        # run: |
        #   echo "@fortawesome:registry=https://npm.fontawesome.com/" >> .npmrc
        #   echo "//npm.fontawesome.com/:_authToken=$FORTAWESOME_TOKEN" >> .npmrc
        #   npm install
        # if not do this:
        run: npm install
        env:
          # And add the additional registry token here:
          # FORTAWESOME_TOKEN: ${{secrets.FORTAWESOME_TOKEN}}
          NODE_AUTH_TOKEN: ${{ secrets.TOKEN_REG }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      - name: Lint JS
        run: npm run lint
      - name: Lint Styles
        run: npm run lint:style
      - name: Unit Tests
        run: npm run test:unit --passWithNoTests
```
