<template>
  <div class="nav-goods">
    <div class="nav-name"  ref="list">
      <ul class="nav-list">
        <li class="greyBg">猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
        <li>猫屎咖啡</li>
      </ul>
    </div>
    <div class="nav-msg">
        dsdsgvsd
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },

    computed: {
      ...mapState(['classifyName'])
    },


     mounted(){
      new BScroll(this.$refs.list, {
        scrollY: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .nav-goods
    clearFix()
    position relative
    top 0
    width 100%
    height 582px
    .nav-name
      width 70px
      height 100%
      background #f3f4f5
      overflow hidden
      .nav-list
        li
          border-1px(#f3f4f5)
          width 70px
          height 50px
          background #fff
          font-size 13px
          line-height 50px
          text-align center
          &.greyBg
            background #f3f4f5
    .nav-msg
      position absolute
      left 70px
      top 0
      width 100%
      height 100%
      font-size 50px
</style>
