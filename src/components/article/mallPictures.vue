<template>
  <div class="mallPictures">
    <div class="discountOne">
      <img src="https://img2.epetbar.com/nowater/2017-12/14/21/370311d69fd1a39fedca2774dc25ad97.jpg@!water">
    </div>
    <pet-line></pet-line>
    <div class="overseas">
      <img class="international" src="https://img2.epetbar.com/nowater/2017-12/14/19/5a2a1a99f5642f160f4d22ee3cb7ee8a.jpg@!water" alt="">
      <img class="internationalSmall" src="https://img2.epetbar.com/nowater/2017-12/13/09/e785855e80fd229d424d9ce15d7d7666.jpg@!water" alt="">
      <img class="internationalSmall" src="https://img2.epetbar.com/nowater/2017-12/13/09/5d685158ea5f5eb8b707dad905384aa6.jpg@!water" alt="">
    </div>
    <pet-line></pet-line>
    <!--视频-->
    <pet-nav-head></pet-nav-head>
    <pet-video></pet-video>
    <pet-line></pet-line>
    <!--品牌特卖-->
    <pet-nav-head></pet-nav-head>
    <div class="brand">
      <img src="https://img2.epetbar.com/nowater/2017-12/13/21/f9b03b752970c2c957877a4c6eabf206.jpg@!water" alt="">
      <pet-line></pet-line>
      <img src="https://img2.epetbar.com/nowater/2017-12/13/21/ed5436e5ee13a4f8d83fff1314e24e42.jpg@!water" alt="">
      <pet-line></pet-line>
      <img src="https://img2.epetbar.com/nowater/2017-12/13/21/7dee954fae7fdb254a57bf9aef7fa404.jpg@!water" alt="">
      <pet-line></pet-line>
      <img src="https://img2.epetbar.com/nowater/2017-12/14/18/41a2c0e86fc36dba2a99b7e2ca7f977c.jpg@!water" alt="">
      <pet-line></pet-line>
      <img src="https://img2.epetbar.com/nowater/2017-12/13/21/f517eb9ebcc886504f885041717b944e.jpg@!water" alt="">
      <pet-line></pet-line>
      <img src="https://img2.epetbar.com/nowater/2017-12/13/21/78d0d84294183888aaaf864cb04ca0df.jpg@!water" alt="">
      <pet-line></pet-line>
      <img src="https://img2.epetbar.com/nowater/2017-12/13/21/0a1231be7907b558c59cc2453d6135b1.jpg@!water" alt="">
      <pet-line></pet-line>
    </div>
    <pet-line></pet-line>
    <!--体验馆-->
    <pet-nav-head></pet-nav-head>
    <pet-carousel :home="home"></pet-carousel>
    <pet-line></pet-line>
    <!--萌宠说-->
    <pet-nav-head></pet-nav-head>
    <pet-video></pet-video>
    <pet-line></pet-line>
    <!--小剧场-->
    <pet-nav-head></pet-nav-head>
    <pet-video></pet-video>
    <pet-line></pet-line>
    <div class="footer">
      <img src="https://img2.epetbar.com/nowater/2017-12/13/16/2b4302241c921a29523ce43d465cd28d.jpg@!water" alt="">
      <div class="contact">
        <div class="mode">
          <span><a href="">触屏版 </a></span>
          <span><a href="">手机客户端 </a></span>
          <span><a href="">关于我们 </a></span>
          <span><a href="">联系我们 </a></span>
        </div>
        <div class="company">&copy wap.epet.com 版权：重庆易宠科技有限公司</div>
      </div>
    </div>
  </div>
</template>

<script>
  import line from './line.vue'
  import video from './video.vue'
  import navHead from './nav-head.vue'
  import carousel from './carousel.vue'
  export default {
    data() {
      return {}
    },
    props:{
      home: Object
    },
    computed: {},

    methods: {},
    components: {
      'pet-line': line,
      'pet-nav-head': navHead,
      'pet-video': video,
      'pet-carousel': carousel,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .mallPictures
    .discountOne
      img
        width 100%
        height 185
    .overseas
      clearFix()
      width 100%
      .international
        float left
        width 50%
      .internationalSmall
        float right
        width 50%
    .brand
      img
        width 100%
        height 160px
    .footer
      width 100%
      height 116px
      img
        width 100%
        height 30px
      .contact
        width 100%
        height 86px
        .mode
          width 100%
          height 22px
          padding 15px 0 5px 0
          text-align center
          span
            padding-right 10px
            &:first-child
              a
                color: #f00
            a
              font-size 14px
              line-height 22px
              color #000
        .company
          height 44px
          margin 0 10px
          padding-bottom 25px
          text-align center
          font-size 12px


</style>
