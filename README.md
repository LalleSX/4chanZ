# 4chan Z

4chan Z is a 4chan extension that adds a variety of features to the site.

### The React code is currently not showing up when you build it, but it shows up in the vite dev

## Features

**Note: This is a work in progress. If a feature is checked off, it means it is implemented but not necessarily working as intended.**

- [x] Image hover. Not on catalog yet
- [x] Catalog improvements:
- Catalog loads with JSON instead of HTML
- Catalog gifs play on the catalog. This makes the catalog feel more alive
- [x] Added Header
- [x] Settings menu. (Needs to be optimized)

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
- [ ] Better config system
- [ ] Embed link
- [ ] Better catalog, sort by bump, etc

## Javascript Libraries

- React
- Jquery
- [Imageboard](https://www.npmjs.com/package/imageboard)
- Tailwind CSS

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
