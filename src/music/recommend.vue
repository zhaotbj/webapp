<template>
  <div class="recommend">
   <header-nav></header-nav>
    <Swiper>
      <swiper-item v-for="(item, index) in recommendList" :key="index">
        <!-- <img :src="item.img" alt=""> -->
        <!-- <img src="../assets/images/1.jpg" alt=""> -->
      </swiper-item>
    </Swiper>
  </div>
</template>
<script>
import headerNav from '../components/headerNav'
import { XHeader,XInput, Swiper, SwiperItem } from "vux";

export default {
  components: {
    headerNav,
    XInput,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      recommendList: [
        {
          url: "javascript:",
          img: "../assets/images/1.jpg",
          title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img: "../assets/images/2.jpg",
          title: "送你一次旅行",
          fallbackImg: ""
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.recommend {

}
</style>

