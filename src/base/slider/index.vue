<template>
  <swiper :option="swiperOption" :key="keyId">
    <!--使用插槽放swiper-slider-->
    <slot></slot>
    <!--FIXME 分页器没有生效-->
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {Swiper} from 'vue-awesome-swiper';

  export default {
    name: 'MeSlider',
    components: {
      Swiper
    },
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        // 检验传递过来的值是否合法
        validator(value) {
          // 传递的值是否为其中一个
          return ['horizontal', 'vertical'].indexOf(value) > -1;
        }
      },
      interval: {
        type: Number,
        default: 3000,
        validator(value) {
          return value >= 0;
        }
      },
      loop: {
        type: Boolean,
        default: true
      },
      // 分页器
      pagination: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        keyId: Math.random()
      };
    },
    watch: {
      data(newData) {
        if (newData.length === 0) {
          return;
        }
        this.swiperOption.loop = newData.length === 1 ? false : this.loop;
        this.keyId = Math.random();
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.swiperOption = {
          watchOverflow: true,
          direction: this.direction,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false
          } : false,
          slidesPerView: 1,
          loop: this.data.length <= 1 ? false : this.loop,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          }
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
</style>
