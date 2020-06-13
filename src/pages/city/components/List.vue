<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="buttom">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="buttom">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div 
      class="area" 
      v-for="(item,key) of cities" 
      :key="key"
      :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">
              {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props:{
      hot:Array,
      cities:Object,
      letter:String
  },
  mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch:{
      letter(){
          if(this.letter){
              const element = this.$refs[this.letter][0];
              this.scroll.scrollToElement(element)
          }
      }
  }
};
</script>

<style lang="less" scoped>
@import url("~@/assets/styles/varibles");
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area {
    .title {
      line-height: 0.54rem;
      background: #eee;
      padding-left: 0.26rem;
      color: #666;
    }
    .border-topbottom {
      &::before {
        border-color: #ccc;
      }
      &::after {
        border-color: #ccc;
      }
    }
    .border-bottom {
      &::before {
        border-color: #ccc;
      }
    }
    .item-list {
      .item {
        line-height: 0.76rem;
        padding-left: 0.2rem;
      }
    }
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .buttom {
        text-align: center;
        padding: 0.1rem 0;
        margin: 0.1rem 0.1rem;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
}
</style>
