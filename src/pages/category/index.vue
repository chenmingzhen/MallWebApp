<template>
  <div class="category">
    <header class="g-header-container">
      <category-header/>
    </header>
    <div class="g-content-container">
      <div class="sidebar">
        <category-tab @switch-tab="getCurrentId"/>
      </div>
      <div class="main">
        <category-content :curId="curId"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CategoryHeader from './header';
  import CategoryTab from './tab';
  import CategoryContent from './content';

  export default {
    name: 'Category',
    components: {
      CategoryHeader,
      CategoryTab,
      CategoryContent
    },
    data() {
      return {
        curId: ''
      };
    },
    methods: {
      getCurrentId(id) {
        this.curId = id;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixins";

  .g-header-container {
   position: relative;
  }

  .category {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }

  .g-content-container {
    display: flex;
    height: 100%;//这里填坑 没有设置 swiper滑动有阻力 但是还是无法滑到最后一个
  }

  .sidebar {
    width: 1.6rem;
    /* height: 100%;  无法拖拽滚动条*/
    //height: 10rem;
    height: 100%;
  }

  .main {
    flex: 1;
    height: 100%;
  }
</style>
