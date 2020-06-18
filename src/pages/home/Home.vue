<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from 'axios';
import {mapState} from 'vuex'
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return{
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  mounted(){
    this.getHomeInfo()
    this.lastCity = this.city
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    // 获取首页的数据
    getHomeInfo(){
      axios.get('/getHomeInfo')
      // axios.post('/getHomeInfo?city='+this.city)
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
     if(res.status==200&&res.data){
       const data = res.data;
       this.swiperList = data.swiperList
       this.iconList = data.iconList
       this.recommendList = data.recommendList
       this.weekendList = data.weekendList
     }
    },
    activated(){
      if(this.lastCity !== this.city){
        this.lastCity = this.city;
        this.getHomeInfo();
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
