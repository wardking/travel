<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  computed:{
      letters(){
          const letters = [];
          for(let i in this.cities){
              console.log(i)
              letters.push(i)
          }
          return letters
      }
  },
  data() {
    return {
      touchStatus: false,
    };
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove() {
        if(this.touchStatus){
            
        }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/assets/styles/varibles");
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: @bgColor;
  }
}
</style>
