# Introduction

本项目将nodejs后端和vue前端代码整合在一起，适用于同时需要前后端的小型项目。
本模板统一使用ts代码，前端使用`vite2.x`以快速开发，并搭配`vue3`+`element-plus`；后端使用`koa2`和`mongodb`(配合`mongoose`和`typegoose`)。

# Start

## environment needed

- TypeScript `^3.9`
- NodeJS `^10.15.0`
- Mongoose `5.10.18`
- @types/mongoose `5.10.x`
- @typegoose/typegoose `^7.5.0`

## prepare

```shell
npm install
```

## run both server & client

```shell
npm run dev
# or
npm run debug
```

### run server only

```shell
npm run dev:server
# or
npm run debug:server
```

### run client only

```shell
npm run dev:client
```

## build

```shell
npm run compile
```

## build server only

```shell
npm run build:server
```

## build client only

```shell
npm run build:client
```
