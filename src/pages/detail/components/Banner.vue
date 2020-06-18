<template>
  <div>
    <div class="banner" @click="handelBeannerCilck">
      <img
        class="banner-img"
        :src="bannerImg"
      />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-numder">
          <span class="iconfont banner-icon">&#xe64b;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="gallaryImgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "../../../common/gallary/Gallary.vue";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
  },
  props: {
    sightName: String,
    bannerImg:String,
    gallaryImgs:Array
  },
  data() {
    return {
      showGallary: false,
    };
  },
  methods: {
    handelBeannerCilck() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(0deg, black, transparent);
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-numder {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
