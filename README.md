# Nuxt3 Umbraco Spa Api interface Module. 

Under development. 

## Installation

Add the following line to .npmrc file
```
@limbo-works:registry=https://npm.pkg.github.com
```

Npm:
```
npm install @limbo-works/nuxt-umbraco --save-dev
```

Yarn:
```
yarn add @limbo-works/nuxt-umbraco -D
```

## Usage

add the following to nuxt.config.js

```
export default defineNuxtConfig({
  modules: [
    '@limbo-works/nuxt-umbraco',
  ],
});
```


## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
