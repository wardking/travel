<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" 
    @change="handleLettChange"></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
CityAlphabet;
import CityAlphabet from "./components/Alphabet.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter:"",
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/getCityInfo").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      if (res.status == 200 && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLettChange(letter){
        this.letter= letter
    }
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style lang="less" scoped></style>
