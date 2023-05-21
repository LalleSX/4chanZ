# 4chan Z

4chan Z is a 4chan extension that adds a variety of features to the site.

## Features

**Note: This is a work in progress. If a feature is checked off, it means it is implemented but not necessarily working as intended.**

- [x] Image hover. Not on catalog yet
- [x] Catalog improvements
- [x] Added Header
- [x] Settings menu. Needs to be optimized

## Planned Features

- [ ] Optiimize for all themes. Right now it only looks good on Yotsuba B
- [ ] Image hover on catalog
- [ ] Filter threads/posts
- [ ] Have remote filters
- [ ] Thread watcher
- [ ] Quick reply
- [ ] Gallery mode
- [ ] Preformace improvements
- [ ] Better settings menu
- [ ] Embed link
- [ ] Better catalog, sort by bump, etc

## Project Setup

```sh
pnpm install
```

## Commands

### Build

#### Development, HMR

Hot Module Reloading is used to load changes inline without requiring extension rebuilds and extension/page reloads
Currently only works in Chromium based browsers.

```sh
npm run dev
```

#### Development, Watch

Rebuilds extension on file changes. Requires a reload of the extension (and page reload if using content scripts)

```sh
npm run watch
```

#### Production

Minifies and optimizes extension build

```sh
npm run build
```

### Load extension in browser

Loads the contents of the dist directory into the specified browser

```sh
npm run serve:chrome
```

```sh
npm run serve:firefox
```
