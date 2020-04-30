<template>
  <div class="history" v-if="historys.length">
    <h4 class="history-title">历史搜索</h4>
    <transition-group class="g-list" name="list" tag="ul">
      <li class="g-list-item" v-for="item in historys" :key="item" @click="$_search_selectItem(item)">
        <span class="g-list-text">{{item}}</span>
        <i class="iconfont icon-delete" @click.stop="removeItem(item)"></i>
      </li>
    </transition-group>
    <a href="javascript:;" class="history-btn" @click="showConfirm"><i class="iconfont icon-clear"></i>清空历史搜索</a>
  </div>
</template>

<script>
  import {SEARCH_HISTORY_KEYWORD_KEY} from './config';
  import {searchMixin} from 'assets/js/mixins';
  import storage from 'assets/js/storage';
  /* FIXME 存在重复的历史记录 */
  export default {
    name: 'SearchHistory',
    mixins: [searchMixin],
    data() {
      return {
        historys: []
      };
    },
    created() {
      this.getKeyword();
    },
    methods: {
      update() {
        this.getKeyword();
      },
      getKeyword() {
        this.historys = storage.get(SEARCH_HISTORY_KEYWORD_KEY, []);
      },
      removeItem(item) {
        this.historys = this.historys.filter(val => val !== item);
        storage.set(SEARCH_HISTORY_KEYWORD_KEY, this.historys);
        setTimeout(() => {
          this.$emit('remove-item', item);
        });
      },
      showConfirm() {
        this.$emit('show-confirm');
      },
      clear() {
        storage.remove(SEARCH_HISTORY_KEYWORD_KEY);
      }
    }
  }
  ;
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixins";

  .history {
    padding-bottom: 0.6rem;
    background-color: #fff;

    &-title {
      height: 0.68rem;
      line-height: 0.68rem;
      padding: 0 0.2rem;
      font-size: $font-size-l;
      font-weight: bold;
    }

    &-btn {
      @include flex-center();
      width: 80%;
      height: 0.8rem;
      background: none;
      border: 0.02rem solid #ccc;
      border-radius: 0.08rem;
      margin: 0 auto;
      color: #686868;

      .iconfont {
        margin-right: 0.1rem;
      }
    }
  }

  .g-list {
    border-top: 0.02rem solid $border-color;
    border-bottom: 0.02rem solid $border-color;
    margin-bottom: 0.4rem;
  }

  .list {
    &-enter-active,
    &-leave-active {
      transition: height .5s;
    }

    &-enter,
    &-leave-to {
      height: 0;
    }
  }
</style>
