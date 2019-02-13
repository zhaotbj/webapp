<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
@import './assets/style/common.less';
#app {
  width: 100%;
  height: 100%;
  font-size: .12rem;
}
</style>