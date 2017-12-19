<template>
  <div>
    <div class="footerTool" >
      <ul>
        <li class="home-page active"><router-link to="/home"><a href="#"></a></router-link></li>
        <li class="classification"><router-link to="/classification"><a href="#"></a></router-link></li>
        <li class="shopping-cart"><router-link to="/shopping"><a href="#"></a></router-link></li>
        <li class="center"><router-link to="/center"><a href="#"></a></router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {

//    el: '.footerTool',
    data () {
      return {
        isActive: false
      }
    },
    methods: {
      ssss () {
        this.isActive = !this.isActive
      }
    },
    components: {

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    margin 0
    padding 0
  ul
   list-style none
  a
    text-decoration none
  html,body
    font-size 0
    width 100%
    height 100%

  .footerTool
    position fixed
    bottom 0
    z-index 99
    width 100%
    height 45px
    background #fff
    overflow hidden
    ul
      height 44px
      width 100%
      z-index 99
      margin 0 auto
      background #fff
      border-top 1px solid #e7e7e7
      li
        float: left
        width 25%
        height 100%
        text-align center
        line-height 45px
        a
          display block
          background url(./img/img.png) no-repeat
          background-size 234px 163px
          height 40px
          width 42px
          margin 0 auto
          margin-top 2px

        &.home-page
          a
            background-position -85px 0
        &.classification
          a
            background-position -85px -41px
        &.shopping-cart
          a
            background-position -85px -81px
        &.center
          a
            background-position -85px -122px
/*
        &.active.home-page
          a
            background-position -42px 0
        &.active.classification
          a
            background-position -42px -41px
        &.active.shopping-cart
          a
            background-position -42px -81px
        &.active.center
          a
            background-position -42px -122px
*/



</style>
