# React-Template-Ts

## 框架成分
React + Redux + React-Redux 7(Hooks) + React Router 6 + TypeScript

## 各类官方文档地址
[react官方文档](https://react.docschina.org/)
[redux官方文档](https://www.redux.org.cn/)
[react-redux官方文档](https://react-redux.js.org/)
[react-router官方文档](https://reactrouter.com/)

## 创建流程

### 生成template-ts模版
``` shell
    npx create-react-app <project-name> --template redux-typescript
```

### 调整项目结构
``` pl
project
|------ node_modules                    // 资源包文件夹
|------ public
|       |------ favicon.ico             // 浏览器导航栏图标
|       |------ index.html              // 根网页
|       |------ index.css               // 根网页样式，全局样式
|
|------ src
|       |------ assets                  // 静态资源文件
|       |------ controllers             // 容器组件
|       |------ pages                   // 页面组件
|       |------ routes                  // 路由文件夹
|       |------ rudux                   // Redux文件夹
|       |       |------ slices          // Slice文件夹
|       |       |------ store.ts        // Redux入口
|       |------ App.tsx                 // App组件
|       |------ react-app-env.d.ts      
|
|------ .gitignore                      // git同步忽略目录
|------ package-lock.json
|------ package.json
|------ README.md
|------ tsconfig.json
```

### 模块化路由 && 懒加载
``` sh
    npm install --save react-router-dom
```