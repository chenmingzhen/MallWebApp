# 在线商城webapp

> 在线商城webapp

##第一次commit
``` bash
#初始化项目

#修改默认配置
```

## 技术要点

``` bash
1. .eslinttrc.js 添加代码约束
2. build/webpack.base.conf.js 配置别名 方便开发
3. 自定义js函数 适配移动端
4. 路由中使用vue懒加载
5. 项目不直接使用sass编译成css 使用插件统一配置项目环境
```

##插件安装指令
```bash
1.ES6兼容ES5以下
    cnpm install --save babel-polyfill fastclick
2.vue中sass编译环境 免除sass编译scss
    cnpm install --save-dev node-sass sass-loader
    注意安装sass-loader7.3.1版本 参考错误
```

##错误
```bash
1.ERROR in Cannot find module 'node-sass'（已解决）
    cnpm install node-sass@latest
2.npm报错TypeError: this.getResolve is not a function（已解决）
    sass-loader当前最高版本是8.x，需要退回到7.3.1
    npm uninstall sass-loader（卸载当前版本）
    npm install sass-loader@7.3.1 --save-dev  （安装7.x版本）
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
