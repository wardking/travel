<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img
          class="item-img"
          :src="item.imgUrl"
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data(){
    return{
      recommendList:[
        {id:"0001",
        imgUrl:"//img1.qunarzz.com/sight/p0/2004/9e/9e83583ec8d88c0fa3.water.jpg_256x160_b89fbe7e.jpg",
        title:"广州街香港街",
        desc:"再现1840年前后的羊城旧貌和香江风韵"
        },
        {id:"0002",
        imgUrl:"//img1.qunarzz.com/sight/p0/1912/78/78fdc5a98b55aaefa3.water.jpg_256x160_5483dbb5.jpg",
        title:"香港迪士尼乐园",
        desc:"身临其境感受童话王国"
        },
        {id:"0003",
        imgUrl:"//img1.qunarzz.com/sight/p0/2001/8d/8d7226ecdd14ab82a3.water.jpg_256x160_1d6fb731.jpg",
        title:"香港海洋公园",
        desc:"妙趣横生的大型主题公园"
        },
        {id:"0004",
        imgUrl:"//img1.qunarzz.com/sight/p0/1501/18/181cff1e8af11041.water.jpg_256x160_aa461578.jpg",
        title:"维多利亚海港",
        desc:"美轮美奂的世界夜景，港阔水深的天然良港"
        }
      ]
    }
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
