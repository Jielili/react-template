# react-template
react模版

1. 创建文件夹并进入
   ```bash
    mkdir create-template
    cd create-template
   ```
2. 初始化项目
   ```bash
    pnpm init
   ```
3. 添加npm包
   ```bash
   pnpm add react react-dom react-scripts
   ```

4. 在package.json中加入运行命令
   ```javascript
   {
      "name": "react-template",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
   ```
5. 创建简单的React组件，在根目录下创建/scr/App.js
   ```javascript
   import React from 'react'

   function App() {
   return (
      <div>
         <h1>Hello, React!</h1>
      </div>
   );
   }

   export default App
   ```


6. 新建/src/index.jsx
   ```javascript
   import React from 'react'
   import ReactDOM from 'react-dom'
   import App from './App'

   ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root')
   )
   ```

7. 创建入口文件/public/index.html
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="utf-8">
      <title>React App</title>
   </head>
   <body>
      <div id="root"></div>
   </body>
   </html>
   ```

8. 运行
   ```bash
   pnpm start
   ```
