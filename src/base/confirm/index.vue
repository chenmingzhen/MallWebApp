<template>
  <transition name="mine-confirm">
    <div class="mine-confirm-wrapper" v-show="visible">
      <div class="mine-confirm">
        <div class="mine-confirm-title" v-if="title">{{title}}</div>
        <div class="mine-confirm-msg">{{msg}}</div>
        <div class="mine-confirm-btns">
          <button class="mine-confirm-btn mine-confirm-cancel"
                  @click="cancel">{{cancelBtnText}}
          </button>
          <button class="mine-confirm-btn mine-confirm-ok"
                  @click="confirm">{{confirmBtnText}}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'MeConfirm',
    props: {
      title: {
        type: String,
        default: ''
      },
      msg: {
        type: String,
        default: '确定执行此操作吗？'
      },
      cancelBtnText: {
        type: String,
        default: '取消'
      },
      confirmBtnText: {
        type: String,
        default: '确定'
      }
    },
    data() {
      return {
        visible: false
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },

      cancel() {
        this.hide();
        this.$emit('cancel');
      },
      confirm() {
        this.hide();
        this.$emit('confirm');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixins";

  .mine-confirm-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $search-popup-z-index;
    @include flex-center();
    background-color: $modal-bgc;
  }

  .mine-confirm {
    overflow: hidden;
    width: 88%;
    background-color: #fff;
    border-radius: 0.2rem;
    font-size: 0.32rem;

    &-title {
      padding: 0.4rem 0.3rem 0;
      font-size: 0.36rem;
      text-align: center;
      @include ellipsis();

      & + .mine-confirm-msg {
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
      }
    }

    &-msg {
      padding: 0.8rem 0.3rem;
      text-align: center;
      line-height: 1.5;
    }

    &-btns {
      display: flex;
    }

    &-btn {
      flex: 1;
      height: 0.88rem;
      line-height: 0.88rem;
      background: none;
      border: none;
    }

    &-cancel {
      border-top: 0.02rem solid #e3e5e9;
    }

    &-ok {
      background-color: #f23030;
      color: #fff;
    }
  }

  .mine-confirm {
    &-enter-active,
    &-leave-active {
      transition: opacity .5s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }

    &-enter-active {
      .mine-confirm {
        animation: bounce-in .7s;
      }
    }
    &-leave-active{
      .mine-confirm{
        animation: bounce-out .5s;
      }
    }
  }

  // https://cn.vuejs.org/v2/guide/transitions.html#CSS-动画

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }

  }

  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0);
    }

  }
</style>
