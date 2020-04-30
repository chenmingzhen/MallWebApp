<template>
  <me-scroll class="scroll" >
    <ul class="tab">
      <li
        class="tab-item"
        :class="{'tab-item-active': item.id === curId}"
        v-for="(item, index) in items"
        :key="index"
        @click="switchTab(item.id)"
      >{{item.name}}
      </li>
    </ul>
  </me-scroll>
  <!--<div class="scroll">
    <ul class="tab" ref="ul">
      <li
        class="tab-item"
        v-for="(item,index) in items"
        :key="index"
        @click="switchTab(item.id)"
        :class="{'tab-item-active':item.id===curId}">
        {{item.name}}
      </li>
    </ul>
  </div>-->
</template>

<script>
  import MeScroll from 'base/scroll';
  import {categoryNames} from './config';

  export default {
    name: 'CategoryTab',
    components: {
      MeScroll
    },
    created() {
      this.init();
      this.switchTab(this.items[0].id);
    },
    methods: {
      init() {
        this.items = categoryNames;
      },
      switchTab(id) {
        if (this.cudarrl === id) {
          return;
        }
        this.curId = id;
        this.$emit('switch-tab', id);
      }
    },
    data() {
      return {
        curId: ''
      };
    }
  }
  ;
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixins";

  $tab-item-height: 0.92rem;

  .tab {
    width: 100%;

    &-item {
      height: $tab-item-height;
      background-color: white;
      border-right: 0.02rem solid $border-color;
      border-bottom: 0.02rem solid $border-color;
      color: #080808;
      font-size: $font-size-l;
      font-weight: bold;
      text-align: center;
      line-height: $tab-item-height;
      @include ellipsis();
      display: block;

      &:last-child {
        border-bottom: none;
      }

    }

    &-item-active {
      background: none;
      border-right: none;
      color: #f23030;
    }
  }
</style>
