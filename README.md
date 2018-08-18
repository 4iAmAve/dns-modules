## Monorepo for DNS modules

This repository is meant to accumulate the steadily growing count of dns-modules for easier package maintainability.

To support all this [lerna](https://lernajs.io) is being used

#### Info

This repository houses a multitude of npm modules, mostly for React applications and written in TypeScript.

#### Available modules

Note: modules are constantly updated and enhanced

[dns-api](https://github.com/4iAmAve/dns-modules/packages/dns-api/README.md)
[dns-common-styles](https://github.com/4iAmAve/dns-modules/packages/dns-common-styles/README.md)
[dns-renderJSON](https://github.com/4iAmAve/dns-modules/packages/dns-renderJSON/README.md)
[dns-renderXML](https://github.com/4iAmAve/dns-modules/packages/dns-renderXML/README.md)
[dns-service-worker](https://github.com/4iAmAve/dns-modules/packages/dns-service-worker/README.md)
[dns-store-configuration](https://github.com/4iAmAve/dns-modules/packages/dns-store-configuration/README.md)
[dns-store-modules](https://github.com/4iAmAve/dns-modules/packages/dns-store-modules/README.md)
[dns-toolbox](https://github.com/4iAmAve/dns-modules/packages/dns-toolbox/README.md)
[dns-tslint-config](https://github.com/4iAmAve/dns-modules/packages/dns-tslint-config/README.md)
[dns-utils](https://github.com/4iAmAve/dns-modules/packages/dns-utils/README.md)

#### Set-Up

```bash
npm install --global lerna yarn
yarn install
yarn bootstrap
```

#### Start

```bash
yarn start:${package_name_shortcut}
```

#### Workspaces

If workspaces don't work out-of-the-box perform

```bash
yarn config set workspaces-experimental true
```

#### To bump versions

```bash
yarn upgrade-interactive --latest
```

#### To add a new node module via yarn 

This will add the package to the workspace

```bash
yarn add ${package_name} -W
```

Add ```-D``` in case for devDependencies

#### Build a specific package

```bash
yarn build:${package_name_shortcut}
```

#### Run e2e tests for a certain package

```bash
yarn e2e:${package_name_shortcut}
```

#### Create version files for all packages

```bash
yarn buildversion
```

#### TODOS

There is still a lot todo. Each package consists of a TODO text file which entails the open tasks for now.
