<template>
  <div class="special">
    <div class="headLogo">
      <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png" alt="">
      <div class="text">距离下一场 <span>00</span>:<span>33</span>:<span>44</span></div>
      <div class="more">MORE ◆</div>
    </div>
    <div class="list" ref="list">
      <ul>
        <li>
          <img src="https://img1.epetbar.com/2017-02/07/10/81189f4d95be18ba88eabb1e4eb7ba87.jpg@!300w-b" alt="">
          <div class="price">
            <span class="coin">￥</span>
            <span class="number">2.00</span>
          </div>
          <p class="save">省￥ 18.00</p>
        </li>
        <li>
          <img src="https://img1.epetbar.com/2017-09/28/11/e0e2994933b8fdded9ba1a3410ea4f8b.jpg@!300w-b" alt="">
          <div class="price">
            <span class="coin">￥</span>
            <span class="number">5.80</span>
          </div>
          <p class="save">省￥ 52.20</p>
        </li>
        <li>
          <img src="https://img1.epetbar.com/2017-11/28/09/6673268b95b4d62b17c56e4484816ecb.jpg@!300w-b" alt="">
          <div class="price">
            <span class="coin">￥</span>
            <span class="number">8.90</span>
          </div>
          <p class="save">省￥ 80.10</p>
        </li>
        <li>
          <img src="https://img1.epetbar.com/2017-08/16/14/157ee5cfcfb8a7cc5cb802a1ca454416.jpg@!300w-b" alt="">
          <div class="price">
            <span class="coin">￥</span>
            <span class="number">4.90</span>
          </div>
          <p class="save">省￥ 44.10</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },

    computed: {},

    methods: {},
    mounted(){
      new BScroll(this.$refs.list, {
        scrollX: true
      })
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .special
    float left
    font-size 0
    width 100%
    /*height 150px*/
    background #fff
    .headLogo
      height 40px
      margin 10px
      img
        width auto
        height 24px
        margin-left -20px
      .text
        display inline-block
        vertical-align bottom
        width auto
        height 24px
        font-size 13px
        line-height 20px
        text-align center
        margin 1px 0 0 10px
        span
          display inline-block
          width 20px
          height 20px
          border 1px solid #cacbcc
          margin 0 2px
      .more
        float right
        width 50px
        height 40px
        font-size 10px
        line-height 30px
        text-align right
        color #898989



    .list
      clearFix()
      float left
      width 100%
      white-space: nowrap
      overflow hidden
      text-overflow ellipsis
      margin-bottom 10px
      ul
        width 110%
        padding-left 5px
        li
          display inline-block
          width 88px
          margin-right 10px
          background #fff
          text-align center
          img
            width 100%
            height auto
          .price
            height 22px
            line-height 22px

            color #f00
            margin-top 5px
            .coin
              font-size 12px
            .number
              font-size 14px
          .save
            font-size 12px
            color #999


</style>
