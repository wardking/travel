<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
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
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg",
          title: "马尼拉湾",
          desc: "驾一叶扁舟，寻瓯江往事",
        },
        {
          id: "0002",
          imgUrl:
            "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg",
          title: "马尼拉湾",
          desc: "不负嵊夏好时光，泗乎太安逸",
        },
        {
          id: "0003",
          imgUrl:
            "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c2ae82fcc9fa11fa253e5919c49bcfbf.jpg",
          title: "马尼拉湾",
          desc: "探访日本，一部家庭旅行画册",
        },
        {
          id: "0004",
          imgUrl:
            "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg",
          title: "马尼拉湾",
          desc: "厦门，带娃出行与幸福同行",
        },
      ],
    };
  },
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
