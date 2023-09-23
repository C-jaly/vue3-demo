# vue3-demo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

##该项目是通过运行npm create vue@latest创建的vue3+vite的项目

const app = Vue.createApp(App)
app.use(createRoute({
  history: xxx,
  routes: [{
    path: xxx,
    name: xx,
    conponent: () => import(xxxxx)
  }]
}))
app.mount('#app')


npm run preview 默认将dist文件运行在 http://localhost:4173，等同于构建出的页面

所以做的所有的事情就是将vite.config.js里的base修改为你想要的根路径