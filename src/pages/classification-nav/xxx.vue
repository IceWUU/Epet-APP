<template>
  <div class="tabBrand" ref="tabBrand">
    <ul class="brandDiv">
      <li class="brandDivTitle" v-for="(goods, index) in classifyName.brand">
        <epet-split/>
        <div class="goodsTitle">——{{goods.title}}——</div>
        <ul class="brandDivGoods">
          <li class="brandGood" v-for="(good) in goods.list">
            <div class="GoodImg">
              <img :src="good.logo">
            </div>
            <div class="GoodText">
              <span>{{good.name}}</span>
            </div>
            <div class="GoodCountry">
              <span>{{good.address}}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <!--全部商品遮罩-->
    <div class="shadeShow" v-show="isShow" ref="shade_show">
      <div>
        <div class="shadeHeader" >
          <div  class="shadeBack"  @click="shadeShow1">
            <img src="./triangleicon.png" >
          </div>
          <span class="text">全部品牌</span>
          <div @click="popShow" class="showDiv">
            <img src="./menuicon.png" >
          </div>
        </div>
        <div class="divShow " v-show="isPop">
          <ul class="list">
            <li>
              <a href="javascript:">
                <div></div>
                <span>首页</span>
              </a>
            </li>
            <li>
              商品分类
            </li>
            <li>
              购物车
            </li>
            <li>
              我的e宠
            </li>
          </ul>
        </div>
        <ul class="brandGather" ref="brandList">
          <li class="letterDiv" v-for="(goods, index) in classifyName.brand_gather" :key="index" >
            <div class="letterTitle">
              <span>{{goods.order}}</span>
            </div>
            <ul class="brandList" >
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
      </div>
      <div class="shadeNav">
        <ul class="list">
          <li v-for="(i,index) in arr" :key="index" :class="{current: index===currentIndex}">
            {{i}}
          </li>
        </ul>
      </div>
    </div>
    <div class="wholeGoods" @click="shadeShow1">
      <div class="text" >
        全部
      </div>
    </div>
    <epet-split/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import split from '../../../components/split/split.vue'
  export default {
    data() {
      return {
        arr:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
        isShow: false,
        isPop: false,
        scrollY: 0,  //代表右侧列表滑动的Y轴坐标
        tops: [], // 代表右侧所有分类li的top组件的数组
      }
    },
    watch:{
      isShow:function () {
        setTimeout(()=>{
          this.goodsScroll.refresh()
          this._initTops ()
        })
      }
    },
    mounted(){
      this.$nextTick(() => { // 界面更新后回调
        this.cScorll = new BScroll(this.$refs.tabBrand, {
          click: true
        })
        this._initScroll()
      })
//        this.markshow = new BScroll(this.$refs.shade_show, {
//          //嵌套betterscroll 不可重复定义事件
//        })
    },
    methods:{
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
      shadeShow1(){
        console.log ( 'shadeShow1' )
        this.isShow = ! this.isShow
      },
      popShow(){
        this.isPop = !this.isPop
      }
    },
    components:{
      'epet-split': split
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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .tabBrand
    height 100%
    z-index 20
    padding-top 40px
    .brandDiv
      width 100%
      padding-bottom 100px
      .brandDivTitle
        font-size 12px
        text-align center
        color #999
        .goodsTitle
          padding 20px 0
        .brandDivGoods
          height 100%
          /*padding-bottom 20px*/
          overflow hidden
          .brandGood
            float left
            margin-left 3.25%
            margin-bottom 20px
            height 107px
            width 29%
            text-align center
            .GoodImg
              position relative
              border 1px solid #e2e2e2
              width 100%
              height 62px
              margin-bottom 6px
              img
                position absolute
                left 50%
                top 50%
                width 65%
                transform translate3d(-50%, -50% ,0)
            .GoodText
              font-size 13px
              color black
              margin-bottom 2px
            .GoodCountry
              font-size 12px
              color #7e8c8d
    .wholeGoods
      position fixed
      right 0px
      bottom 50px
      width 45px
      height 45px
      background-color rgba(0, 0, 0, .5)
      border-radius 50%
      .text
        font-size 15px
        line-height 45px
        text-align center
    .shadeShow
      position absolute
      top 0
      width 100%
      height 100%
      background-color white
      z-index 99
      .shadeHeader
        height 50px
        overflow hidden
        .shadeBack
          img
            position absolute
            top 9px
            left 10px
            width 20px
            height 30px
        .text
          position absolute
          top 13px
          left 50%
          transform translateX(-50%)
          margin 0 auto
          font-size 18px
        .showDiv
          float right
          margin 14px 5px 0 0
          img
            width 20px
            height 20px
      .divShow
        height 75px
        background-color white
        overflow hidden
        border 1px solid #f3f4f5
        .list
          width 100%
          li
            width 25%
            float left
            text-align center
            line-height 75px
      .brandGather
        .letterDiv
          .letterTitle
            height 24px
            background-color #eee
            span
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
        position absolute
        top 145px
        right 6px
        .list
          font-size 12px
          text-align center
          li
            height 14px
            color #999
          .current
            color red
</style>
