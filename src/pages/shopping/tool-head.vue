<template>
  <div class="tool-head">
    <div class="tool-head-box">
      <div class="tool-return"></div>
      <span class="tool-title">购物车</span>
      <div class="tool-tool" @click="showTool"></div>
    </div>
    <div class="tool-nav" v-show="isShowTool">
      <ul>
        <li>
          <span class="s-h-img"></span>
          <p>首页</p>
        </li>
        <li>
          <span class="s-l-img"></span>
          <p>商品分类</p>
        </li>
        <li>
          <span class="s-c-img"></span>
          <div class="total">0</div>
          <p>购物车</p>
        </li>
        <li>
          <span class="s-m-img"></span>
          <p>我的e宠</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
      },
      clickShow() {
        this.toShow = !this.toShow;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .tool-head
    clearFix()
    .tool-head-box
      background #fff
      position relative
      height 49px
      border-1px(#f3f3f3)
      padding 0 10px
      .tool-return
        position absolute
        top 16px
        width 22px
        height 20px
        background url(./personal-bico1.png) no-repeat
        background-size 9px 17px
        background-position 0px 0px
      .tool-title
        width 90%
        display inline-block
        margin 0 auto
        padding-left 20px
        font-size 18px
        color #333
        line-height 50px
        text-align center
      .tool-tool
        position absolute
        top 14px
        right 10px
        width 20px
        height 20px
        background url(./imgtk-new.png) no-repeat
        background-size 20px 20px
        background-position 0px 0px
    .tool-nav
      background #fff
      width 100%
      height 45px
      padding 10px 0
      border-bottom 1px solid #d7d7d7
      ul
        li
          position relative
          float left
          width 25%
          height 45px
          .total
            height 18px
            width: 18px
            color: #fff
            text-align center
            line-height 18px
            font-size 12px
            background #FF0000
            border-radius 100%
            border #fff solid 2px
            position absolute
            top -6px
            left 48px
          span
            display block
            margin 0 auto
            width 25px
            height 25px
            &.s-h-img
              background url(./head_icon1.png) no-repeat
              background-size 25px 25px
              background-position 0 0
            &.s-l-img
              background url(./head_icon2.png) no-repeat
              background-size 25px 25px
              background-position 0 0
            &.s-c-img
              background url(./head_icon4.png) no-repeat
              background-size 25px 25px
              background-position 0 0
            &.s-m-img
              background url(./head_icon5.png) no-repeat
              background-size 25px 25px
              background-position 0 0
          p
            color #666
            font-size 14px
            text-align center
</style>
