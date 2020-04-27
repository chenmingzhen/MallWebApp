<template>
  <transition name="mine-backtop">
    <a class="mine-backtop" v-show="visible" @click="backToTop">
      <i class="iconfont icon-backtop"></i>
    </a>
  </transition>
</template>

<script>
  export default {
    name: 'MeBacktop',
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      backToTop() {
        this.$emit('backtop');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixins";

  .mine-backtop {
    overflow: hidden;
    width: 0.9rem;
    height: 0.9rem;
    @include flex-center();
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;

    .iconfont {
      color: #fff;
      font-size: 0.76rem
    }
  }

  .mine-backtop {
    &-enter-active,
    &-leave-active {
      transition: opacity .8s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }
</style>
