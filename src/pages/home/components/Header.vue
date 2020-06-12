<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe61c;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe60c;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
@import url('~@/assets/styles/varibles');
.header {
  height: 0.86rem;
  line-height: 0.86rem;
  display: flex;
  background: @bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon{
        text-align: content;
        font-size: .4rem;
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
    padding-left:.2rem ;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    .arrow-icon{
        margin-left: -.04rem;
        font-size: .24rem;
    }
  }
}
</style>
