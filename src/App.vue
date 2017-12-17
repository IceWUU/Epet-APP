<template>
  <div>
    <div class="footerTool">
      <ul>
        <li class="home-page"><a href="#"><router-link to="/home"></router-link></a></li>
        <li class="classification"><a href="#"><router-link to="/classification"></router-link></a></li>
        <li class="shopping-cart"><a href="#"><router-link to="/shopping"></router-link></a></li>
        <li class="center"><a href="#"><router-link to="/center"></router-link></a></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        isShow: false,
      }
    },
    methods: {
      toggleShow () {
        this.isShow = !this.isShow
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
  body
    font-size 0

  .footerTool
    position fixed
    z-index 99
    bottom 0
    width 100%
    height 45px
    background #fff
    overflow hidden
    ul
      width 100%
      height 44px
      display flex
      margin 0 auto
      border-top 1px solid #e7e7e7
      li
        flex 1
        text-align center
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
            background-position -42px 0
        &.classification
          a
            background-position -85px -41px
        &.shopping-cart
          a
            background-position -85px -81px
        &.center
          a
            background-position -85px -122px

</style>
