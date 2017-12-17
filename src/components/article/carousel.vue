<template>
  <div class="carousel">
    <mt-swipe :auto="1000">
      <mt-swipe-item><img src="https://img2.epetbar.com/nowater/2017-12/13/23/6b14a021f255a05b7d8e4f7b03e8dc36.png@!water" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="https://img2.epetbar.com/nowater/2017-12/14/11/3d37da259b71fee7a52d9ec8e6909a6f.jpg@!water" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="https://img2.epetbar.com/nowater/2017-12/13/14/c3a870ba1b2efc5a020a51cae6d6f72c.jpg@!water" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="https://img2.epetbar.com/nowater/2017-12/14/11/fa4f3fc3e22d73eb1180d0facc7d8978.jpg@!water" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="https://img2.epetbar.com/nowater/2017-12/13/22/6a26f5c3d5063271682027443021aac3.jpg@!water" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe } from 'mint-ui';
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .carousel
    width 100%
    height 160px
    img
      width 100%
      height 100%
</style>
