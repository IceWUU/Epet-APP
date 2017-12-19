<template>
  <div class="classification-msg">
    <div class="head-class">
      <ul>
        <li :class="active" @click="isLeft(true)" ref="listLeft">
          <router-link to="/classification/goods">
            <span class="head-class-goods" >分类</span>
          </router-link>
        </li>
        <li @click="isLeft(false)" ref="listRight">
          <router-link to="/classification/brand">
            <span class="head-class-brand">品牌</span>
          </router-link>
        </li>
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
        active: 'active'
      }
    },
    mounted(){
      this.$store.dispatch('getGoods')
    },
    computed: {},

    methods: {
      //控制tab颜色
      isLeft(left){
        if (left){
          this.$refs.listLeft.className="active"
          this.$refs.listRight.className=" "
        }else{
          this.$refs.listLeft.className=" "
          this.$refs.listRight.className="active"
        }
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
      background #fff
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
            .head-class-goods,.head-class-brand
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
