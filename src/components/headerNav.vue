<template>
  <div class="header-box">
    <div class="header">
      <div class="search">
        <i class="iconfont icon-micro"></i>
        <div class="search-box">
          <label for="searchBox" class="iconfont icon-glass">
            <span>搜索音乐，歌词，电台</span>
          </label>
          <input type="text" id="searchBox">
        </div>
        <i class="iconfont icon-music"></i>
      </div>
    </div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">个性推荐</tab-item>
      <tab-item @on-item-click="onItemClick">歌单</tab-item>
      <tab-item @on-item-click="onItemClick">排行榜</tab-item>
    </tab>
  </div>
</template>
<script>
import {Tab, TabItem } from "vux";
export default {
  components: {Tab, TabItem },
  methods: {
    onItemClick(index) {
      switch (index) {
        case 0:
          this.$router.push({
            name: "Recommend"
          });
          break;
        case 1:
          this.$router.push({
            name: "songList"
          });
          break;
        case 2:
          this.$router.push({
            name: "topList"
          });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  background-color: #f33;
  position: flex;
  top: 0;
  left: 0;
  height: 0.48rem;
  line-height: 0.48rem;
  .search {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 0.48rem;
    line-height: 0.48rem;
    .search-box {
      background-color: #fff;
      height: 0.32rem;
      line-height: 0.32rem;
      width: 70%;
      border-radius: 0.2rem;
      position: relative;
      input {
        height: 0.32rem;
        line-height: 0.32rem;
        border-radius: 0.2rem;
        text-indent: 5%;
      }
      label {
        height: 0.32rem;
        color: #dedede;
        position: absolute;
        left: 22%;
        font-size: 0.14rem;
        span {
          margin-left: 0.02rem;
        }
      }
    }
    .icon-micro,
    .icon-music {
      position: absolute;
      font-size: 0.22rem;
      left: 5%;
      color: #fff;
    }
    .icon-music {
      position: absolute;
      font-size: 0.22rem;
      color: #fff;
      top: 0.03rem;
      left: 90%;
    }
  }
}
.vux-tab-wrap {
  .vux-tab-item.vux-tab-selected {
    color: #f33;
  }
}
</style>
