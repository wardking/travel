<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id"  :to="'/detail/'+item.id">
        <img
          class="item-img"
          :src="item.imgUrl"
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    list:Array
  }
};
</script>

<style lang="less" scoped>
.recommend-title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
}
.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    min-width: 0;
    padding: 0.1rem;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .item-button {
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      margin-top: 0.16rem;
      color: #fff;
      line-height: 0.44rem;
    }
  }
}
</style>
