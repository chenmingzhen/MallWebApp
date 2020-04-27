<template>
  <div class="home">
    <header class="g-header-container">
      <home-header :class="{'header-transition':isHeaderTransition}" ref="header"></home-header>
    </header>
    <me-scroll :data="recommends" ref="scroll" pullDown @pull-down="pullToRefresh" pullUp @pull-up="pullToLoadMore"
               @scroll-end="scrollEnd" @scroll="scroll" @pull-down-transition-end="pullDownTransitionEnd">
      <home-slider ref="slider"/>
      <home-nav></home-nav>
      <home-recommend ref="recommend" @loaded="getRecommends"></home-recommend>
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop :visible="isBacktopVisible" @backtop="backToTop"/>
    </div>
    <!--子路由-->
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import MeScroll from 'base/scroll';
  import HomeNav from './nav';
  import HomeRecommend from './recommend';
  import MeBacktop from 'base/backtop';
  import {HEADER_TRANSITION_HEIGHT} from './config';

  export default {
    name: 'home',
    components: {
      HomeHeader,
      HomeSlider,
      MeScroll,
      HomeNav,
      HomeRecommend,
      MeBacktop
    },
    data() {
      return {
        isHeaderTransition: false,
        recommends: [],
        isBacktopVisible: false
      };
    },
    methods: {
      getRecommends(recommends) {
        this.recommends = recommends;
      },
      pullToRefresh(end) {
        this.$refs.slider.update().then(end);
        /* setTimeout(() => {
          console.log('下拉刷新');
          end();
        }, 1000); */
      },
      pullToLoadMore(end) {
        /* setTimeout(() => {
          console.log('上拉刷新');
          end();
        }, 1000); */
        this.$refs.recommend.update().then(end).catch(err => {
          if (err) {
            console.log(err);
          }
          end();
        });
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) {
          this.changeHeaderStatus(translate);
        }
        this.isBacktopVisible = translate < 0 && -translate > scroll.height;
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return;
        }

        this.$refs.header.show();

        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      pullDownTransitionEnd() {
        this.$refs.header.show();
      }
    }

  };
</script>

<style lang="scss" scoped>
  //@import "~assets/scss/mixins";
  @import "src/assets/scss/mixins";

  .home {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }

</style>
