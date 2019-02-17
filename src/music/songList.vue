<template>
  <div class="song_list">
    <header-nav :tabIndex="1"></header-nav>
    <div class="song_list_wrap">
      <div class="song_list_title">
        <span :class="{bgColor: num==0}" @click="handleTabList('new', 0)">最新</span>
        <span :class="{bgColor: num==1}" @click="handleTabList('hot', 1)">最热</span>
        <span :class="{bgColor: num==2}" @click="handleTabList('highquality', 2)">精品</span>
      </div>
    </div>
    <div class="song_list_content">
      <ul>
        <li v-for="(item, index) in songLists" :key="index">
          <i class="iconfont icon-headset">195万</i>
          <img :src="item.coverImgUrl" alt>
          <p>{{item.description}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import headerNav from "../components/headerNav";
export default {
  components: { headerNav},
  data() {
    return {
      songLists: [],
      num: 0
    };
  },
  created() {
    this.getList('new', 0);
  },
  methods: {
    getList(str, num) {
      this.$http.get(`/top/playlist?limit=10&order=${str}`).then(res => {
     
        if(res.status=== 200) {
          this.songLists = res.data.playlists
          this.num=num
          
        }
      });
    },
    handleTabList(str, num) {
      this.getList(str, num)
    }
  }
};
</script>
<style lang="less" scoped>
.song_list {
  margin-top: 0.92rem;
  .song_list_wrap {
    width: 100%;
    height: 0.5rem;
    position: fixed;
    top: 0.92rem;
    .song_list_title {
      height: 0.3rem;
      width: 80%;
      display: flex;
      position: fixed;
      left: 50%;
      transform: translatex(-50%);
      padding: 0.1rem 0;
      span {
        flex: 1;
        text-align: center;
        line-height: 0.3rem;
        font-size: 0.14rem;
        color: #f33;
        border: 0.01rem solid #f33;
      }
      span:first-child {
        border-radius: 0.5rem 0 0 0.5rem;
        border-right: none;
      }
      span:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
        border-left: none;
      }
      .bgColor {
        background-color: #f33;
        color: #fff;
      }
    }
  }
  .song_list_content {
    margin-top: 1.4rem;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        flex: 0 0 49%;
        position: relative;
        img {
          width: 100%;
        }
        .icon-headset {
          position: absolute;
          top: 0.03rem;
          right: 0;
          font-size: 0.12rem;
          color: #fff;
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
      }
    }
  }
}
</style>

