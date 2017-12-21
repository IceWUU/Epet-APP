<template>
  <div class="navigation-page">
    <ul class="nav" v-if="home">
      <li v-for="(navBtn, index) in home.datas[1].menus" :key="index"><img :src="navBtn.image"/></li>
    </ul>
    {{home}}
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props:{
      home: Object
    },

    computed: {},

    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .navigation-page
    .nav
      clearFix()
      width 100%
      li
        width 75px
        float left
        img
          width 100%
</style>
