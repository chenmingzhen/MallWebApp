# 在线商城webapp

> 在线商城webapp

##第二次commit

``` bash
初始化项目

修改默认配置

Nav基础组件开发与完善
```

## 技术要点

``` bash
1. .eslinttrc.js 添加代码约束
2. build/webpack.base.conf.js 配置别名 方便开发
3. 自定义js函数 适配移动端
4. 路由中使用vue懒加载
5. 项目不直接使用sass编译成css 使用插件统一配置项目环境
6. 当在data声明变量时 变量会实时更新watch 放到create 使用this赋值 不实时更新
7. 异步处理 内容高度没有更新 滚动条无法下滑
8. watch观察父组件传递的值的变化
9. $emit发送事件回去调用方 带方法
10. 设置:key 更改key 重新渲染组件 见官网
```

##代码块

9
```
this.$emit('pull-down', this.pullDownEnd);
@pull-down="pullToRefresh"
pullToRefresh(end) {
        setTimeout(() => {
          console.log('下拉刷新');
          end();
        }, 1000);
      }
```


##插件安装指令

```bash
1.ES6兼容ES5以下
    cnpm install --save babel-polyfill fastclick
2.vue中sass编译环境 免除sass编译scss
    cnpm install --save-dev node-sass sass-loader
    注意安装sass-loader7.3.1版本 参考错误
3.swiper插件
    cnpm install swiper vue-awesome-swiper --save
4.异步请求
    cnpm install --save axios
5.jsonp
    cnpm install --save jsonp
6.懒加载
    cnpm install --save vue-lazyload
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


