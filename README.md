# React-Template-Ts

## 框架成分
React + Redux + React-Redux + TypeScript

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
