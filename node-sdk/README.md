# Node SDK

This is a monorepo using [turborepo](https://turbo.build/repo) and [TypeScript](https://www.typescriptlang.org/).

## Guidelines

Each SDK should be in its own folder. You should prefer methods and functions exported from the `common` library (an internal package) rather than adding a new package to your SDK.

## Creating your first SDK

If you wish to contribute, please make sure you read our Contributing guidelines in the root of the repository. If you wish to create a new package, please make sure you abide by the following:

- New libraries go into the `lib/` folder. This may include type exports, common utilities, and low level helpers
- New SDKs go into the `sdks/` folder. This will include any code that interacts with a public API

### Code Guidelines

Please make sure to fully name your variables. Having vague variables hurts readability- we want to keep this repoistory readable! Take a look at other implementations to get a feel for other standards we follow
