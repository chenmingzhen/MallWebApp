<template>
  <div class="content-wrapper">
    <div class="loading-container" v-if="isLoading">
      <!-- <div class="loading-wrapper-banner">
         <me-loading/>
       </div>-->
      <div class="loading-wrapper">
        <me-loading/>
      </div>
    </div>
    <me-scroll ref="scroll">
      <div class="content">
        <div class="pic" v-if="content.banner">
          <a :href="content.banner.linkUrl" class="pic-link">
            <img @load="updateScroll" :src="content.banner.picUrl" alt="" class="pic-img">
          </a>
        </div>
        <div class="section" v-for="(section, index) in content.data" :key="index">
          <h4 class="section-title">{{section.name}}</h4>
          <ul class="section-list">
            <li
              class="section-item"
              v-for="(item, i) in section.itemList"
              :key="i"
            >
              <a href="" class="section-link">
                <p class="section-pic" v-if="item.picUrl">
                  <img v-lazy="item.picUrl" alt="" class="section-img"/>
                </p>
                <p class="section-name">{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop @backtop="backToTop" :visible="isBacktopVisible"/>
    </div>
  </div>
</template>

<script>
  import MeLoading from 'base/loading';
  import MeScroll from 'base/scroll';
  import MeBacktop from 'base/backtop';
  import {getCategoryContent} from '../../api/category';
  import storage from 'assets/js/storage';
  import {CATEGORY_CONTENT_KEY, CATEGORY_CONTENT_UPDATE_TIME_INTERVAL} from './config';

  export default {
    name: 'CategoryContent',
    components: {
      MeLoading,
      MeScroll,
      MeBacktop
    },
    data() {
      return {
        content: {},
        isBacktopVisible: false,
        isLoading: true
      };
    },
    methods: {
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      getContent(id) {
        let contents = storage.get(CATEGORY_CONTENT_KEY);
        let updateTime;
        const curTime = new Date().getTime();
        this.backToTop();
        if (contents && contents[id]) {
          updateTime = contents[id].updateTime || 0;
          if (curTime - updateTime <= CATEGORY_CONTENT_UPDATE_TIME_INTERVAL) {
            // localstorage
            return this.getContentByLocalStorage(contents[id]);
          } else {
            // HTTP
            return this.getContentByHTTP(id).then(() => {
              this.updateLocalStorage(contents, id, curTime);
            });
          }
        } else {
          // HTTP
          return this.getContentByHTTP(id).then(() => {
            this.updateLocalStorage(contents, id, curTime);
          });
        }
      },
      getContentByLocalStorage(content) {
        this.content = content.data;
        return Promise.resolve();
      },
      getContentByHTTP(id) {
        return getCategoryContent(id).then(data => {
          return new Promise(resolve => {
            if (data) {
              this.content = data;
              resolve();
            }
          });
        });
      },
      updateLocalStorage(contents, id, curTime) {
        contents = contents || {};
        contents[id] = {};
        contents[id].data = this.content;
        contents[id].updateTime = curTime;
        storage.set(CATEGORY_CONTENT_KEY, contents);
      },
      updateScroll() {
        this.$refs.scroll && this.$refs.scroll.update();
      }
    },
    props: {
      curId: {
        type: String,
        default: ''
      }
    },
    watch: {
      curId(id) {
        this.isLoading = true;
        this.getContent(id).then(() => {
          this.isLoading = false;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "./scss/content.scss";
</style>
