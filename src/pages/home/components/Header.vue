<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe61c;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe60c;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: "Header",
 computed:{
   ...mapState(['city'])
 }
};
</script>

<style lang="less" scoped>
@import url("~@/assets/styles/varibles");
.header {
  height: @headerHeight;
  line-height:@headerHeight;
  display: flex;
  background: @bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: content;
      font-size: 0.4rem;
    }
  }
  .header-input {
    flex: 1;
    margin-top: 0.12rem;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-right: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    padding-left: 0.2rem;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
