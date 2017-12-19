<template>
  <div id="center-page">
    <div class="center-header">
      <div class="header-top">
        <span class="arrow"></span>
        <span class="register">注册</span>
      </div>
      <div class="m-login">
        <img src="./logo.png" alt="">
      </div>
      <div class="tabs">
        <ul>
          <li class="login_a">
            <a href="#" @click="showI">普通登录</a>
            <i v-if="isShowI1"></i>
          </li>
          <li class="login_a">
            <a href="#" @click="showI">手机动态密码登录</a>
            <i  v-if="isShowI2"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="m-form-box">
        <div id="login_form" v-if="isShowI1" >
          <ul>
            <li>
              <span class="name-ico"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" name="username" class="input-placeholder-color">
            </li>
            <li>
              <span class="password-ico"></span>
              <input type="text" placeholder="输入密码" name="password" class="input-placeholder-color">
            </li>
          </ul>
        </div>
        <div id="new-login-form" v-if="isShowI2">
          <ul>
            <li>
              <span class="num-ico"></span>
              <input type="text" placeholder="已注册的手机号" name="phone" class="input-placeholder-color">
            </li>
            <li>
              <span class="password-ico"></span>
              <input type="text" placeholder="请输入图片内容" name="varify" class="input-placeholder-color">
              <span class="fr-sec-code" >
                  <img src="http://demo.open.renren.io/renren-fast/captcha.jpg">
                </span>
            </li>
            <li>
              <span class="password-ico"></span>
              <input type="text" class="dttext input-placeholder-color" placeholder="动态密码">
              <a class="get_phone-pass ">获取动态密码</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ftc" >
        <a href="https://wap.epet.com/login.html?do=findpassword" class="btn-register">忘记密码？</a>
        <!--<div class="clear"></div>-->
      </div>
      <div class="login-btn">
        <a href="#">登  录</a>
      </div>
      <div class="space"></div>
      <div class="partners">
        <p>合作网站登录</p>
      </div>
      <div class="other_login">
        <div class="zfb-btn">
          <a href="#">
            <img src="./login_ico2.png" alt="">
          </a>
        </div>
        <div class="qq-btn">
          <a href="#">
            <img src="./login_ico4.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return{
        isShowI1: true,
        isShowI2:false
      }
    },

    methods:{
      showI(){
        this.isShowI2 =!this.isShowI2;
        this.isShowI1 =!this.isShowI1;
      },

    },
    mounted(){

    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  #center-page
    height 100%
    clearFix()
    .center-header
      width 100%
      background url("./logobg.png") no-repeat
      background-size cover
      .header-top
        height 50px
        line-height 50px
        position relative
        padding 0 12px
        .arrow
          display block
          width 22px
          height 20px
          position absolute
          margin-top 16px
          background url('./personal-bico3.png') no-repeat
          background-size 12px 17px
        .register
          display block
          position absolute
          right 10px
          top 0
          color #fff
          font-size 16px

      .m-login
        padding 12px 0 24px 0
        img
          display block
          margin auto
          width 20%
      .tabs
        width 100%
        height 44px
        background-color rgba(255,255,255,0.3)
        ul
          width 100%
          display flex
          .login_a
            float left
            text-align center
            height 44px
            line-height 44px
            position relative
            width 0
            flex 1
            a
              font-size 15px
              color #fff
              display: block
            i
              width 0
              height 0
              border-left 10px solid transparent
              border-right 10px solid transparent
              border-bottom 10px solid #fff
              position: absolute
              bottom 0
              left 0
              right 0
              margin auto
              display block
    .main
      clearFix()
      width 100%
      height 100%
      background #fff
      .m-form-box
        clearFix()
        position
        background #fff
        border-radius 0.5px
        margin: 0 4% 1px 4%
        padding: 0 1.6%
        #login_form
          width 100%
          color white

          ul
            clearFix()
            li
              border-bottom #e2e2e2 solid 1px
              padding 12px 0 12px 30px
              position relative
              span
                float left
                display inline
                width 17px
              .name-ico
                height 21px
                background url('./ico3.png') no-repeat
                background-size contain
                margin 1px 0 0 -25px
              .password-ico
                height 20px
                margin 0 0 0 -25px
                background url('./ico4.png') no-repeat
                background-size contain
              input
                display block
                height 21px
                width 100%
                font-size 15px
                border none
                padding 0
                color #666
                font-family "Microsoft Yahei",tahoma,arial
                outline: none;
                &.input-placeholder-color::-webkit-input-placeholder
                  color #ccc
        #new-login-form
          clearFix()
          width 100%
          color white
          ul
            background-color white
            li
              border-bottom #e2e2e2 solid 1px
              padding 12px 0 12px 30px
              position relative
              .get_phone-pass
                background #fff
                color #ff4259
                border 1px solid #eb4c33
                position absolute
                right 0
                top 6px
                border-radius 3px
                width 98px
                height 20px
                font-size 12px
                line-height 20px
                text-align center
                padding 4px 0
              .fr-sec-code
                position absolute
                top:6px
                right 0
                line-height 46px
                img
                  width 85px
                  height 30px
              .num-ico
                float left
                display inline
                width 17px
                height 17px
                background url('./ico1.png') no-repeat
                background-size contain
                margin: 1px 0 0 -25px
              .password-ico
                float left
                display block
                width 17px
                height 20px
                margin 0 0 0 -25px
                background url('./ico4.png') no-repeat
                background-size contain
              input
                display block
                height 21px
                width 100%
                font-size 15px
                border none
                padding 0
                color #666
                font-family "Microsoft Yahei",tahoma,arial
                outline none
                &.input-placeholder-color::-webkit-input-placeholder
                  color #ccc

      .ftc
        clearFix()
        padding 12px 24px
        a
          display block
          height 20px
          font-size 14px
          line-height 20px
          color #898989
          float right


      .login-btn
        text-align center
        padding-top 6px
        height 38px
        width 100%
        a
          display block
          letter-spacing 5px
          margin 0 15px
          border-radius 5px
          background #2ec975
          font-size 15px
          padding 9px 0
          text-align center
          color #fff
      .space
        width 100%
        height 100px
      .partners
        height 20px
        width 100%
        margin-top 8px
        p
          text-align center
          font-size 16px
          color #d7d7d7
          line-height 20px
      .other_login
        width 100%
        padding 18px 0
        display flex
        .zfb-btn,.qq-btn
          width 0
          flex 1
          text-align center
          a
            display inline-block
            img
              width 60%
              height auto
              display block
              margin auto
              max-width 176px

</style>
