<template>
  <div class="mine-navbar">
    <!--如果left插槽内容存在 就渲染出来-->
    <div class="mine-navbar-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="mine-navbar-center" v-if="$slots.center">
      <slot name="center"></slot>
    </div>
    <div class="mine-navbar-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
    <h1 class="mine-navbar-title" v-if="title">
      <!--内加一层 解决flex布局与省略号的冲突-->
      <span class="mine-navbar-text" v-text="title"></span>
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'MeNavbar',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .mine-navbar {
    position: relative;
    @include flex-between();
    height: 1rem;
    background-color: #fff;

    &-left {
      margin-left: 0.2rem;
      /*如果当前left存在 就会执行下面*/
      /*相邻兄弟选择器 解决只有一个右导航 因为space-between的影响 向左边靠*/
      ~ .mine-nav-right {
        position: static;
      }
    }

    &-center {
      flex: 1;
      margin: 0 0.2rem;

      ~ .mine-nav-right {
        position: static;
      }
    }

    &-right {
      position: absolute;
      right: 0;
      @include flex-center();
      height: 100%;
      margin-right: 0.2rem;
    }
    &-title{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 20%;
      right: 20%;
      @include flex-center();
      text-align: center;
    }
    &-text{
      width: 100%;
      font-size: 0.36rem;
      text-align: center;
      //解决jq等字母下部分由于overflow hidden被隐藏问题
      line-height: 1.5;
      @include ellipsis();
    }
  }
</style>
