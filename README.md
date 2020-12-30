# ai-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 将"core-js": "^3.6.5", "vue": "^2.6.11"移到devDependencies
这两个包不需要再线上依赖，用于本地开发调试依赖 如果放到Dependencies中，下载包的时候会把这两个包一并下载了 这不是想要的