<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe61c;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "City",
};
</script>

<style lang="less" scoped>
@import url("~@/assets/styles/varibles");
.header {
  position: relative;
  height: @headerHeight;
  line-height: @headerHeight;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background: @bgColor;
  font-size: 0.32rem;
  .header-back {
    position: absolute;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    top: 0;
    left: 0;
    color: #fff;
  }
}
</style>
