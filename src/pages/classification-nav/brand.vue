<template>
  <div class="nav-brand" ref="list">
    <ul class="brand-name">
      <li class="brand-name-list" v-for="(goods, index) in classifyName.brand">
        <p class="list-name">—— {{goods.title}} ——</p>
        <ul class="brand-img">
          <li v-for="(good) in goods.list">
            <div class="logo-img">
              <img :src="good.logo">
            </div>
            <p class="sign-name">{{good.name}}</p>
            <p class="country">{{good.address}}</p>
          </li>

        </ul>
      </li>

    </ul>
    <div class="brand-all" @click="clickShow">全部</div>
    <div class="all-brand-page" v-show="toShow">
      <pet-toolHead></pet-toolHead>
    </div>
  </div>
</template>

<script>
  import toolHead from '../shopping/tool-head.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        toShow: false
      }
    },

    computed: {
      ...mapState(['classifyName'])
    },

    methods: {
      clickShow() {
        this.toShow = !this.toShow;

      }
    },
    mounted(){
      new BScroll(this.$refs.list, {
        click: true,
        scrollY: true
      })
    },
    components: {
      'pet-toolHead': toolHead,
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .nav-brand
    clearFix()
    width 100%
    height 597px
    background #f3f4f5
    overflow hidden
    .brand-name
      width 100%
      padding  5px 0
      .brand-name-list
        background #fff
        padding 0 5px
        margin-bottom 10px
        .list-name
          height 19px
          width 100%
          color #999
          font-size 12px
          text-align center
          padding-top 20px
        .brand-img
          clearFix()
          li
            float left
            width 33.333333%
            height 112px
            margin-top  20px
            text-align center
            .logo-img
              height  40px
              padding 10px
              margin 0 5px
              border 1px solid #f3f4f5
              line-height 40px
              img
                height 40px
            .sign-name
              height 20px
              line-height 20px
              overflow hidden
              text-overflow ellipsi;
              white-space nowrap
              font-size 13px
              margin-top 5px
              text-align center
            .country
              height 20px
              line-height 20px
              font-size 12px
              color #999
              text-align center



    .brand-all
      z-index 10
      position fixed
      right 6px
      bottom 65px
      width 40px
      height 40px
      background rgba(0,0,0,.4)
      border-radius 50%
      font-size 12px
      line-height 40px
      text-align center
      color #fff

    .all-brand-page
      z-index 9999
      position absolute
      top 0
      width 100%
      height 100%
      background #fff

</style>
