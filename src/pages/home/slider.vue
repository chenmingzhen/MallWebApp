<template>
  <div class="slider-wrapper">
    <!--v-if有值才开始渲染-->
    <me-loading v-if="!sliders.length"></me-loading>
    <me-slider
      :data="sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-if="sliders.length">
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" alt="" class="slider-img">
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {SwiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {getHomeSlider} from '../../api/home';
  import MeLoading from 'base//loading';

  export default {
    name: 'HomeSlider',
    components: {
      MeSlider,
      SwiperSlide,
      MeLoading
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: []
        /* {
            'linkUrl': 'https://www.imooc.com',
            'picUrl': require('./img/1.jpg')
          },
          {
            'linkUrl': 'https://www.imooc.com',
            'picUrl': require('./img/2.jpg')
          },
          {
            'linkUrl': 'https://www.imooc.com',
            'picUrl': require('./img/3.jpg')
          },
          {
            'linkUrl': 'https://www.imooc.com',
            'picUrl': require('./img/4.jpg')
          } */
      };
    },
    created() {
      this.getSliders();
    },
    methods: {
      update() {
        return this.getSliders();
      },

      getSliders() {
        return getHomeSlider().then(data => {
          // 接收传递过来的参数
          this.sliders = data;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .slider-wrapper {
    width: 100%;
    height: 3.66rem;
  }

  .slider-link {
    display: block;
  }

  .slider-link,
  .slider-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
</style>
