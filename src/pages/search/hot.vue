<template>
  <div class="hot">
    <h4 class="hot-title">热门搜索</h4>
    <div class="loading-container" v-if="!hots.length">
      <me-loading/>
    </div>
    <ul class="hot-list" v-else>
      <li class="hot-item" v-for="(item,index) in hots" :key="index" @click="$_search_selectItem(item.hotWord)">
        {{item.hotWord}}
      </li>
    </ul>
  </div>
</template>

<script>
  import MeLoading from 'base/loading';
  import {getSearchHotKeyword} from 'api/search';
  import {searchMixin} from 'assets/js/mixins';

  export default {
    name: 'SearchHot',
    components: {
      MeLoading
    },
    mixins: [searchMixin],
    created() {
      this.getHotKeyword().then(() => {
        this.$emit('loaded');
      });
    },
    data() {
      return {
        hots: []
      };
    },
    methods: {
      getHotKeyword() {
        return getSearchHotKeyword().then(data => {
          return new Promise(resolve => {
            if (data) {
              this.hots = data;
              resolve();
            }
          });
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixins";

  .hot {
    padding-left: 0.2rem;
    background-color: #fff;
    border-bottom: 0.02rem solid $border-color;
    margin-bottom: 0.2rem;

    &-title {
      height: 0.68rem;
      line-height: 0.68rem;
      font-size: $font-size-l;
      font-weight: bold;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      padding: 0.16rem;
      background-color: #f0f2f5;
      border-radius: 0.08rem;
      margin: 0 0.2rem 0.2rem 0;
      color: #686868;
    }
  }

  .loading-container {
    padding: 0.4rem 0;
  }
</style>
