<template>
  <div class="app" v-if="home">
    <pet-header :home="home"/>
    <pet-article :home="home"/>
    <div class="bomb" @click="toggleShow">
      <img class="bombImg"  src="./go-cat.gif" alt="">
    </div>
    <transition name="fade">
      <div class="bomb-box"  v-show="isShow">
        <div class="main">
          <p class="site-name">CAT</p>
          <p class="b-line">▁</p>
          <p class="call-name">亲爱的小主</p>
          <p class="prompt">您即将进入<span>猫猫站</span></p>
          <p class="b-line b-line2">▁</p>
          <ul class="switch">
            <li @click="changeIndex('dog')">
              <img src="//static.epetbar.com/static_web/wap/src/images/change-dog.png" alt="">
              <div class="switch-name">狗狗站</div>
              <a href="#" class="click-btn" v-show="false">立即进入</a>
            </li>
            <li @click="changeIndex('cat')">
              <img src="//static.epetbar.com/static_web/wap/src/images/change-cat1.png" alt="">
              <div class="switch-name">猫猫站</div>
              <a href="#" class="click-btn">立即进入</a>
            </li>
            <li @click="changeIndex('aquarium')">
              <img src="//static.epetbar.com/static_web/wap/src/images/change-fish.png" alt="">
              <div class="switch-name">水族站</div>
              <a href="#" class="click-btn" v-show="false">立即进入</a>
            </li>
          </ul>
        </div>
        <div class="close"  @click="toggleShow">
          <a href="#"><img src="//static.epetbar.com/static_web/wap/src/images/close2.png" alt=""></a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  import header from '../../components/header/header.vue'
  import article from '../../components/article/article.vue'
  import {mapState} from 'vuex'
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
    computed: {
      ...mapState(['home'])
    },
    components: {
      'pet-header': header,
      'pet-article': article,

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .app
    position relative
    .bomb
      position fixed
      right 0
      bottom 15%
      width 45px
      height 45px
      .bombImg
        width 100%
        height 100%
    .bomb-box
      position fixed
      top 0
      width 100%
      height 100%
      z-index 99
      background rgba(255,255,255,1)
      &.fade-enter-active, &.fade-leave-active
        transition transform  .8s
      &.fade-enter, &.fade-leave-to
        transform scale(0,0)
      .main
        position absolute
        top 0
        bottom  0
        left  0
        right  0
        margin auto
        width 100%
        height 400px

        text-align center
        .site-name
          height 25px
          font-size 16px
          line-height 25px
          color #999
        .b-line
          margin-top -16px
          font-size 12px
          color #000
          font-weight 400
        .call-name
          height 25px
          font-size 16px
          line-height 25px
          color #666
          margin-top 20px
        .prompt
          height 32px
          color #333
          font-size 20px
          line-height 32px
        .b-line2
          margin-top 20px





        .switch
          clearFix()
          margin-top 35px
          padding-left 10%
          text-align center
          font-size 12px
          color #999
          li
            margin-top 35px
            float left
            width 85px
            height 98px
            img
              width 60px
              height 65px
            .switch-name
              margin-top 5px
              height 19px
              line-height 19px
            .click-btn
              display inline-block
              width 48px
              height 19px
              border-radius 30px
              padding 3px 15px
              margin-top 25px
              font-size 12px
              background #e74186
              color #fff
            &:nth-child(2)
              margin-top 0
              width 135px
              height 188px
              img
                width 108px
                height 110px
              .switch-name
                font-size 14px
                height 22px
                line-height 22px
                color #e74186


      .close
        width 100%
        height 40px
        line-height 50px
        position fixed
        bottom 20px
        left 0
        border-top 1px solid #e7e7e7
        a
          width 100%
          display: inline-block
          font-size: 20px;
          text-align center
          img
            width 23px
            height 23px


</style>
