<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
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
}
.item {
  .item-img-wrapper {
      height: 3.5rem;
      overflow: hidden;
  }
  .item-img {
    width: 100%;
    height: 100%;
  }
  .item-info {
      padding: .1rem;
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
  }
}
</style>
