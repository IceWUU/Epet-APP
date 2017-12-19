<template>
  <div id="head">
    <div class="search">
      <div class="search-nav">
        <a href="#" class="search-navT"><span>喵喵站</span><span>|</span><span>天堂◆</span></a>
        <p class="search-text">
          <a href="#">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          </a>
        </p>
        <a href="#" class="search-img" @click="isShowMsg">
          <img src="../../img/mydope.png">
        </a>
      </div>
    </div>
    <div class="nav" ref="nav">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">猫猫主粮</a></li>
        <li><a href="#">罐头超市</a></li>
        <li><a href="#">医疗保健</a></li>
        <li><a href="#">猫砂</a></li>
        <li><a href="#">零食玩具</a></li>
        <li><a href="#">美容香波</a></li>
      </ul>
    </div>
    <div class="header-msg" v-show="isShow" @click="isShowMsg">
      <pet-toolHead></pet-toolHead>
    </div>
  </div>
</template>

<script>
  import toolHead from '../../pages/shopping/tool-head.vue'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        isShow: false
      }
    },
    mounted(){
      new BScroll(this.$refs.nav, {
        scrollX: true
      })
    },
    methods: {
      isShowMsg() {
        this.isShow = !this.isShow;
      }
    },
    components: {
      'pet-toolHead': toolHead,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  #head
    position fixed
    top 0
    z-index 9
    width 100%
    /*height 87px*/
    .search
      width 100%
      height 41px
      padding 5px 0
      background #fff
      text-align center
      .search-nav
        padding 8px
        margin 0 auto
        .search-navT
          span
            vertical-align middle
            color #898989
            font-size 14px
            line-height 25px
            margin-right 2px
            &spanlast-child
              margin-right 8px
        .search-text
          vertical-align middle
          display inline-block
          width 220px
          height 25px
          background #e9e9e9
          border-radius 4px
          color #bcbcbc
          font-size 13px
          a
            input
              width 100%
              border 0
              height 25px
              border-radius 4px
              background #e9e9e9
              color #bcbcbc
              text-indent 10px
              font-size 13px
              outline none
        .search-img
          vertical-align middle
          display inline-block
          width 25px
          height 25px
          margin-left 10px
          img
            width 100%
            height 100%
    .nav
      clearFix()
      float left
      width 100%
      height 36px
      white-space: nowrap
      overflow hidden
      text-overflow ellipsis
      background #fff
      ul
        width 125%
        height 100%
        li
          display inline-block
          text-align center
          height 36px
          width 74px
          /*&:first-child*/
          &:nth-child(1)
            a
              color #e73f85
              padding-bottom 7px
              border-bottom 2px solid #e73f85
          a
            display inline-block
            height 27px
            padding 0 6px
            line-height 36px
            font-size 14px
            color #666


    .header-msg
      position absolute
      top 0
      width 100%
      height 700px
      background #f3f4f5
</style>
