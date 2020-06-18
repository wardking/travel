<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
    name:"Detail",
    components:{
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data(){
      return{
        sightName:'',
        bannerImg:'',
        gallaryImgs:[],
        list:[]
      }
    },
    methods:{
      getDetailInfo(){
        axios.get('/getDetailInfo?id='+this.$route.params.id).then(this.handleGetDataSucc)
      },
      handleGetDataSucc(res){
        let data = res.data;
        if(data){
          this.sightName = data.sightName;
          this.bannerImg= data.bannerImg;
          this.gallaryImgs = data.gallaryImgs;
          this.list = data.priceType;
        }
      }
    },
    mounted(){
      this.getDetailInfo()
    }

}
</script>

<style lang="less" scoped>
.content {
  height: 50rem;
}
</style>
