<template>
  <div class="recommend">
    <header-nav :tabIndex="0"></header-nav>

    <Swiper>
      <swiper-item v-for="(item, index) in bannerData" :key="index">
        <img class="banner_img" :src="item.imageUrl" alt="">
      </swiper-item>
    </Swiper>
    <div class="re-songList">
      <h1 class="list-item">
        <b></b>推荐歌单
        <i class="iconfont icon-right"></i>
      </h1>
      <ul>
        <li v-for="(item, index) in recommendList" :key="index">
          <i class="iconfont icon-headset">195万</i>
          <img :src="item.coverImgUrl" alt>
          <p>我要努力，以最好的姿态在未来和你相遇</p>
        </li>
        <!-- <li>
          <i class="iconfont icon-headset">195万</i>
          <img src="../assets/images/m.jpg" alt>
          <p>我要努力，以最好的姿态在未来和你相遇我要努力，以最好的姿态在未来和你相遇我要努力，以最好的姿态在未来和你相遇我要努力，以最好的姿态在未来和你相遇</p>
        </li>
        <li>
          <i class="iconfont icon-headset">195万</i>
          <img src="../assets/images/m.jpg" alt>
          <p>我要努力，以最好的姿态在未来和你相遇</p>
        </li>
        <li>
          <i class="iconfont icon-headset">195万</i>
          <img src="../assets/images/m.jpg" alt>
          <p>我要努力，以最好的姿态在未来和你相遇</p>
        </li>
        <li>
          <i class="iconfont icon-headset">195万</i>
          <img src="../assets/images/m.jpg" alt>
          <p>我要努力，以最好的姿态在未来和你相遇</p>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
import headerNav from "../components/headerNav"
import { Swiper, SwiperItem } from "vux"

export default {
  components: { headerNav, Swiper, SwiperItem },
  data() {
    return {
      bannerData: [] ,
      recommendList: []
    };
  },
  created() {
    this.getBanner()
    this.initRecommend();
  },
  methods: {
    getBanner() {
      this.$http.get("/banner").then((res)=> {
        if(res.status===200) {
          this.bannerData = res.data.banners;
        }
      })
    },
    initRecommend() {
      this.$http.get("/top/playlist?limit=10&order=new").then((res)=> {
        if(res.status ===200) {
          this.recommendList = res.data.playlists
        }
      });
    }
  }
};
</script>
<style lang="less">
@import "../assets/style/mixins";
.recommend {
  .vux-slider {
    margin-top: 0.92rem;
    .banner_img {
      width: 100%;
    }
  }
  .re-songList {
    .list-item {
      color: #333;
      font-size: 0.15rem;
      height: 0.45rem;
      width: 100%;
      line-height: 0.45rem;
      font-weight: normal;
      b {
        height: 0.15rem;
        border: 0.01rem solid #f33;
        margin-right: 0.05rem;
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        flex: 0 0 33%;
        position: relative;
        img {
          width: 100%;
          display: block;
        }
        p {
          width: 100%;
          // white-space: nowrap;
          // overflow: hidden;
          // text-overflow: ellipsis;
          /* 类似于display: flex */
       
          display: -webkit-box;
          /* 类似于flex-dircection */
          /* 垂直的，竖立的; */
          -webkit-box-orient: vertical;
          /* 设定文字显示几行 */
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .icon-headset{
          position: absolute;
          top: 0.03rem;
          right: 0.05rem;
          font-size: 0.12rem;
          color: #fff;
        }
      }
    }
  }
}
</style>


