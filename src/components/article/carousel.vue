<template>
  <div class="carousel">
    <mt-swipe :auto="1000" v-if="home">
      <mt-swipe-item v-for="(xxx, index) in home.datas[0].value" :key="index"><img :src="xxx.image" /></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe } from 'mint-ui';
  export default {
    props:{
      home: Object
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .carousel
    clearFix()
    width 100%
    height 160px
    img
      width 100%
      height 100%
</style>
