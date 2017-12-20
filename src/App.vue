<template>
  <div>
    <div class="footerTool" >
      <ul>
        <li id="home-page" :class="activePink" @click="isActive('1')" ref="listOne"><router-link to="/home"><a href="#"><div></div></a></router-link></li>
        <li id="classification" @click="isActive('2')" ref="listTwo"><router-link to="/classification"><a href="#"><div></div></a></router-link></li>
        <li id="shopping-cart" @click="isActive('3')" ref="listThree"><router-link to="/shopping"><a href="#"><div></div></a></router-link></li>
        <li id="center" @click="isActive('4')" ref="listFour"><router-link to="/center"><a href="#"><div></div></a></router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {

//    el: '.footerTool',
    data () {
      return {
        activePink: 'activePink'
      }
    },
    methods: {
      //控制tab颜色
      isActive(xxx){
        if (xxx==='1'){
          this.$refs.listOne.className="activePink"
          this.$refs.listTwo.className=" "
          this.$refs.listThree.className=" "
          this.$refs.listFour.className=" "
        }else if (xxx==='2'){
          this.$refs.listOne.className=" "
          this.$refs.listTwo.className="activePink"
          this.$refs.listThree.className=" "
          this.$refs.listFour.className=" "
        } else if (xxx==='3'){
          this.$refs.listOne.className=" "
          this.$refs.listTwo.className=" "
          this.$refs.listThree.className="activePink"
          this.$refs.listFour.className=" "
        } else {
          this.$refs.listOne.className=" "
          this.$refs.listTwo.className=" "
          this.$refs.listThree.className=" "
          this.$refs.listFour.className="activePink"
        }
      }
    },
    components: {

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    margin 0
    padding 0
  ul
   list-style none
  a
    text-decoration none
  html,body
    font-size 0
    width 100%
    height 100%

  .footerTool
    position fixed
    bottom 0
    z-index 99
    width 100%
    height 45px
    background #fff
    overflow hidden
    ul
      height 44px
      width 100%
      z-index 99
      margin 0 auto
      background #fff
      border-top 1px solid #e7e7e7
      li
        float: left
        width 25%
        height 100%
        text-align center
        line-height 45px

        a
          display block
          height 100%
          width 100%
          div
            width 42px
            height 40px
            margin 2px auto 0
            background url(./img/img.png) no-repeat
            background-size 234px 163px
        &#home-page
          a
            div
              background-position -85px 0
        &#classification
          a
            div
              background-position -85px -41px
        &#shopping-cart
          a
            div
              background-position -85px -81px
        &#center
          a
            div
              background-position -85px -122px


        &#home-page.activePink
          a
            div
              background-position -42px 0
        &#classification.activePink
          a
            div
              background-position -42px -41px
        &#shopping-cart.activePink
          a
            div
              background-position -42px -81px
        &#center.activePink
          a
            div
              background-position -42px -122px



</style>
