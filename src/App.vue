<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <!--router-view嵌套-->
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="g-footer-container">
      <c-tabbar/>
    </div>
  </div>
</template>

<script>
  import CTabbar from 'components/tabbar';

  export default {
    name: 'App',
    components: {
      CTabbar
    }
  };
</script>
