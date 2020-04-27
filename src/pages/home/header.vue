<template>
  <me-navbar class="header" v-show="visible">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center">请输入商品信息</div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'HomeHeader',
    components: {
      MeNavbar
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      // API
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';

  .header {
    &.mine-navbar {
      background-color: transparent;
      transition: background-color .5s;
    }

    /*需要同时具备这两个类才生效*/
    &.header-transition {
      background-color: $header-bgc-translucent;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
