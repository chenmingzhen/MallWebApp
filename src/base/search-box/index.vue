<template>
  <div class="mine-search-box-wrapper">
    <i class="iconfont icon-search"/>
    <!--假的点击框-->
    <div class="mine-search-box" v-if="fake">{{placeholder}}</div>
    <input type="text" class="mine-search-box" title="搜索框" :placeholder="placeholder" ref="input" v-model="query"
           v-if="!fake">
    <i id="i" class="iconfont icon-close" @click="reset" v-show="query"/></div>
</template>

<script>
  import {debounce} from '../../assets/js/util';

  export default {
    name: 'MeSearchBox',
    props: {
      placeholder: {
        type: String,
        default: '请输入搜索内容'
      },
      fake: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        query: ''
      };
    },
    methods: {
      focus() {
        this.$refs.input && this.$refs.input.focus();
      },
      clear() {
        this.query = '';
      },
      reset() {
        this.clear();
        this.focus();
      }
    },
    watch: {
      query: debounce(function () {
        console.log(this);
        // 注意debounce的apply将this转化
        this.$emit('query', this.query);
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/mixins";

  $search-box-height: 0.6rem;
  .mine-search-box-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: $search-box-height;
    padding: 0 0.14rem;
    background-color: #fff;
    border-radius: $search-box-height / 2;
  }

  .iconfont {
    color: $icon-color;
    font-size: $icon-font-size-sm;
    font-weight: bold;
  }

  .mine-search-box {
    flex: 1;
    background: none;
    border: none;
    margin: 0 0.12rem;
    color: #666;
    line-height: 1.5;
  }

  i {
    z-index: 10000;
  }
</style>
