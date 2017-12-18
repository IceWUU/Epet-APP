<template>
  <div class="classification-msg">
    <div class="head-class">
      <ul>
        <li><router-link to="/classification/goods"><span class="head-class-goods active" @click="isred(item)">分类</span></router-link></li>
        <li><router-link to="/classification/brand"><span class="head-class-brand">品牌</span></router-link></li>
      </ul>
      <div class="classification-search">
        <img src="./search.png" alt="" class="img-search">
      </div>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: true
      }
    },

    computed: {},

    methods: {
      isred () {
        this.item = !this.item
      }
    },
    components: {


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .classification-msg
    clearFix()
    position fixed
    top 0
    width 100%
    height 100%
    .head-class
      position relative
      ul
        height 39px
        padding 0 15px
        border-bottom 1px solid #cbcbcb
        li
          float left
          font-size 13px
          font-weight 700
          line-height 40px
          width 50%
          height 100%
          &:nth-child(1)
            text-align right
          .head-class-goods,.head-class-brand
            display inline-block
            width 26px
            height 38px
            padding 0 4px
            margin-right 17px
            text-align center
            color #333
            &.active
              border-bottom 2px solid #ed4044
              color #ed4044
          .head-class-brand
            margin-left  17px

      .classification-search
        position absolute
        top 13px
        right 15px
        width 14px
        height 14px
        .img-search
          width 100%
          height  100%

</style>
