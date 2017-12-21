<template>
  <div class="nav-brand" ref="tabBrand">
    <ul class="brand-name" v-if="classifyName">
      <li class="brand-name-list" v-for="(goods, index) in classifyName.brand">
        <p class="list-name">—— {{goods.title}} ——</p>
        <ul class="brand-img" v-if="classifyName.brand">
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

    <div class="brand-all" @click="clickShow" >全部</div>
    <div class="all-brand-page" v-show="toShow" v-if="classifyName" >
      <div class="brand-return" @click="clickShow"></div>
      <pet-toolHead></pet-toolHead>

      <ul class="brandGather" ref="brandList" v-if="classifyName.brand_gather">
        <li class="letterDiv" v-for="(goods, index) in classifyName.brand_gather" :key="index" >
          <div class="letterTitle">
            <span>{{goods.order}}</span>
          </div>
          <ul class="brandList"  v-if="classifyName">
            <li v-for=" (good ,index) in goods.list">
              <div class="left">
                <img :src="good.logo">
              </div>
              <div class="textList">
              <span class="brandName">
                {{good.name}}
              </span> <br/>
                <span class="country">
                {{good.address}}
              </span>
              </div>
              <div class="borderline"></div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="shadeNav" >
        <ul class="list" v-if="arr">
          <li v-for="(i,index) in arr" :key="index" :class="{current: index===currentIndex}">
            {{i}}
          </li>
        </ul>
      </div>
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
        arr:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

        toShow: false,
        scrollY: 0,  //代表右侧列表滑动的Y轴坐标
        tops: [] // 代表右侧所有分类li的top组件的数组
      }
    },
    watch:{
      toShow:function () {
        setTimeout(()=>{
          this.goodsScroll.refresh()
          this._initTops ()
        })
      }
    },
    computed: {
      ...mapState(['classifyName']),
      currentIndex () {
        const {scrollY, tops} = this
        console.log(tops)
        // 根据scrollY在tops中找到一个对应的下标
        // scrollY>=top && scrollY<nextTop
        return tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
      }
    },
    mounted(){
      this.$nextTick(() => { // 界面更新后回调
        this.cScorll = new BScroll(this.$refs.tabBrand, {
          click: true
        })
        this._initScroll()
      })
    },

    methods: {
      clickShow() {
        this.toShow = !this.toShow;
      },
      _initScroll(){
        this.goodsScroll = new BScroll(this.$refs.shade_show, {
          probeType: 3//嵌套betterscroll 不可重复定义事件
        }),
          this.goodsScroll.on('scroll', (event) => {
            console.log(event.y)
            // 更新scrollY
            this.scrollY = Math.abs(event.y)
          })
        // 绑定滑动结束的监听
//          this.goodsScroll.on('scrollEnd', (event) => {
//            this.scrollY = Math.abs(event.y)
//          })
      },
      _initTops () {
        const tops = []
        let top = 0
        tops.push(top)
        let brandList = this.$refs.brandList
        console.log(brandList)
        const lis = brandList.getElementsByClassName('brandList')
        console.log ( 'lis=' , lis )
        for (var i = 0,length=lis.length; i<length;  i++) {
          var li = lis[i]
          top += li.clientHeight
          tops.push(top)
        }
        // 更新状态
        this.tops = tops
        console.log (  tops )
      },
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
      clearFix()
      z-index 10
      position absolute
      top 0
      width 100%
      height 100%
      background #fff
      .brand-return
        z-index 999
        position absolute
        top 16px
        width 22px
        height 20px

      .brandGather

        .letterDiv
          .letterTitle
            height 24px
            background-color #eee
            span
              display inline-block
              height 24px
              font-size 13px
              text-align center
              line-height 24x
              color: #999
              padding-left 15px
          .brandList
            li
              border-1px(bottom,#eee)
              position relative
              height 73px
              overflow hidden
              .left
                position relative
                margin auto 0
                height 52px
                width 100px
                margin-left 10px
                margin-top 11px
                border 1px solid #eee
                img
                  position absolute
                  top 6px
                  left 5px
                  width 90%
              .textList
                margin-top -46px
                margin-left 130px
                .brandName
                  font-size 14px
                .country
                  font-size 12px
                  color  #999
              .borderline
                border 1px red





      .shadeNav
        clearFix()
        position absolute
        top 145px
        right 6px
        .list
          clearFix()
          font-size 12px
          text-align center
          li
            height 14px
            color #999
          .current
            color red

</style>
