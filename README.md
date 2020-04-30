# 在线商城webapp

> 在线商城webapp

## 第三次commit

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
11. 客户端storage 存储加载数据
12. 取消多次请求结果
13. keep-alive标签不重复加载页面
14. v-model双向绑定数据
15. 自定义节流函数 输入框文字在一定时间内发出信息 不每次输入都发送
16. 自定义控件不能使用@click 使用@click.native
17. this.$router.push('/search'); push存在历史前后记录 replace不存在
18. 往子组件传递参数 为字符串不需要: 变量需要 placeholder='xxx' :palceholder='variable'
19. @click.stop阻止事件冒泡
20. transition-group 对循环渲染的标签添加动画
21. storage存储到本地
22. 打包修改 config/index.js build下assetsPublicPath '/'改为'./'
```


## 代码块

### 9.
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

### 20.
```
<transition-group class="g-list" name="list" tag="ul">
      <li class="g-list-item" v-for="item in historys" :key="item" @click="$_search_selectItem(item)">
        <span class="g-list-text">{{item}}</span>
        <i class="iconfont icon-delete" @click.stop="removeItem(item)"></i>
      </li>
    </transition-group>
```


## 插件安装指令

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

## 错误

```bash
1.ERROR in Cannot find module 'node-sass'（已解决）
    cnpm install node-sass@latest
2.npm报错TypeError: this.getResolve is not a function（已解决）
    sass-loader当前最高版本是8.x，需要退回到7.3.1
    npm uninstall sass-loader（卸载当前版本）
    npm install sass-loader@7.3.1 --save-dev  （安装7.x版本）
3.记得异步数据获取重新更新swiper
4.当我在util不使用apply时 到search-box下的
    query: debounce(function () {
            this.$emit('query', this.query);
                                })
    出现错误
    TypeError: Cannot read property '$emit' of undefined
```
