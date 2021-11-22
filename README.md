# Introduction

本项目将nodejs后端和vue前端代码整合在一起，适用于同时需要前后端的小型项目。
本模板统一使用ts代码，前端使用`vite2.x`以快速开发，并搭配`vue3`+`element-plus`；后端使用`koa2`和`mongodb`(配合`mongoose`和`typegoose`)。

## Start

### environment needed

- TypeScript `^4.4`
- NodeJS `^12.22.0`
- Mongoose `~6.0.11`
- @typegoose/typegoose `^9.2.0`
- `tsconfig.json` 中启用 `experimentalDecorators` 和 `emitDecoratorMetadata`
- `tsconfig.json` 中 `target` 选项需要 `es6` 或以上

### prepare

```shell
$ npm install
$ npx husky install
$ npm install -g commitizen # 可使用 git cz 提交代码
```

从 `.env.example` 复制一份环境变量至 `.env` ，建议将 `DEBUG` 设置为 `true` 。

安装 [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 、 [`Prettier - Code formatter`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 插件。

### run both server & client

```shell
npm run dev
# or
npm run debug
```

#### run server only

```shell
npm run dev:server
# or
npm run debug:server
```

#### run client only

```shell
npm run dev:client
```

### build

```shell
npm run compile
```

#### build server only

```shell
npm run build:server
```

#### build client only

```shell
npm run build:client
```
