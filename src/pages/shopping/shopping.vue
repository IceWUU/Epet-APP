<template>
  <div class="shopping-msg">
    <pet-toolHead></pet-toolHead>

    <div class="shopping-form">
      <div class="shopping-img">
        <span class="big-cart"></span>
        <p class="shopping-prompt">购物车是空的</p>
      </div>
      <div class="shopping-btn">
        <span class="go-stroll">去逛逛</span>
        <span class="my-collection">我的收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
  import toolHead from './tool-head.vue'
  export default {
    data() {
      return {
        isShowTool: false
      }
    },

    computed: {},

    methods: {
      showTool() {
        this.isShowTool = !this.isShowTool;
      }
    },
    components: {
      'pet-toolHead': toolHead,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  body
    background #f3f4f5
  .shopping-msg
    clearFix()
    .shopping-form
      background #fff
      .shopping-img
        width 100%
        height 100px
        padding 50px 0 50px 0
        .big-cart
          display block
          width 100px
          height 100px
          margin 0 auto 20px
          background url(./cart-ico.png) no-repeat
          background-size 105px auto
          background-position 0px -159px
        .shopping-prompt
          font-size 16px
          line-height 20px
          color #dbdbdb
          text-align center
          width 100%
          height 20px
      .shopping-btn
        height 90px
        text-align center
        margin-top 5px
        .go-stroll,.my-collection
          display inline-block
          border-radius 5px
          border 1px solid #999
          height 40px
          width 100px
          font-size 16px
          color #999
          line-height 40px
          &.go-stroll
            margin-right 8px




</style>
