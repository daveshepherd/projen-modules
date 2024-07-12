# projen-modules

## Creating a new project

To list available project types:

```
npx projen new --from projen-modules
```

```
npx projen new npm-package --from projen-project
```

1. Create git repo in github

1. Add to circleci
   1. Select "Projects"
   1. In the list of projects click "Set Up Project" against your repo
   1. Select the config.yml file from the main branch

## Contributing

```
yarn install
npx projen build
```
