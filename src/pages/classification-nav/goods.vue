<template>
  <div class="nav-goods">
    <div class="nav-name"  ref="listLeft">
      <ul class="nav-list">
        <li v-for="(item, index) in classifyName.categorys"> {{item.name}}</li>
      </ul>
    </div>
    <div class="nav-msg" ref="listRight">
      <div>
        <ul class="nav-msg-nav">
          <li>
            <span class="list-name">热门推荐</span>
            <img class="all-goods-btn" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png"/>
            <ul>
              <li>
                <img src="https://img2.epetbar.com/nowater/2016-07/21/14/24857d999c8c62a85110c66f1ebcf3ac.jpg@!300w-b" alt="">
                <p class="img-name">进口猫粮</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/db87afdd8179689ef67c0e352e7c2183.jpg@!300w-b" alt="">
                <p class="img-name">美毛化毛</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/cates/2014-03/24/2da82a732a1b0df918dfeb38f6b32621.jpg@!300w-b" alt="">
                <p class="img-name">体内驱虫</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/c122bda1f10770c115fe2c765f5b9e83.jpg@!300w-b" alt="">
                <p class="img-name">强化免疫</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/2017-05/26/10/209951b1f61083be7bba561de378316c.jpg@!300w-b" alt="">
                <p class="img-name">罐头湿粮</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/cates/2014-03/24/dddda26213f5bbb2a3540693d887a0bf.jpg@!300w-b" alt="">
                <p class="img-name">猫砂专区</p>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="nav-msg-nav">
          <li>
            <span class="list-name">热门推荐</span>
            <img class="all-goods-btn" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png"/>
            <ul>
              <li>
                <img src="https://img2.epetbar.com/nowater/2016-07/21/14/24857d999c8c62a85110c66f1ebcf3ac.jpg@!300w-b" alt="">
                <p class="img-name">进口猫粮</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/db87afdd8179689ef67c0e352e7c2183.jpg@!300w-b" alt="">
                <p class="img-name">美毛化毛</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/cates/2014-03/24/2da82a732a1b0df918dfeb38f6b32621.jpg@!300w-b" alt="">
                <p class="img-name">体内驱虫</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/c122bda1f10770c115fe2c765f5b9e83.jpg@!300w-b" alt="">
                <p class="img-name">强化免疫</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/2017-05/26/10/209951b1f61083be7bba561de378316c.jpg@!300w-b" alt="">
                <p class="img-name">罐头湿粮</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/cates/2014-03/24/dddda26213f5bbb2a3540693d887a0bf.jpg@!300w-b" alt="">
                <p class="img-name">猫砂专区</p>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="nav-msg-nav">
          <li>
            <span class="list-name">热门推荐</span>
            <img class="all-goods-btn" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png"/>
            <ul>
              <li>
                <img src="https://img2.epetbar.com/nowater/2016-07/21/14/24857d999c8c62a85110c66f1ebcf3ac.jpg@!300w-b" alt="">
                <p class="img-name">进口猫粮</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/db87afdd8179689ef67c0e352e7c2183.jpg@!300w-b" alt="">
                <p class="img-name">美毛化毛</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/cates/2014-03/24/2da82a732a1b0df918dfeb38f6b32621.jpg@!300w-b" alt="">
                <p class="img-name">体内驱虫</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/c122bda1f10770c115fe2c765f5b9e83.jpg@!300w-b" alt="">
                <p class="img-name">强化免疫</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/2017-05/26/10/209951b1f61083be7bba561de378316c.jpg@!300w-b" alt="">
                <p class="img-name">罐头湿粮</p>
              </li>
              <li>
                <img src="https://img2.epetbar.com/nowater/cates/2014-03/24/dddda26213f5bbb2a3540693d887a0bf.jpg@!300w-b" alt="">
                <p class="img-name">猫砂专区</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
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
    methods: {
    },

     mounted(){
      new BScroll(this.$refs.listLeft, {
        scrollY: true,
        click: true
      });
      new BScroll(this.$refs.listRight, {
        scrollY: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .nav-goods
    background #f3f4f5
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
      overflow hidden
      position absolute
      right 0
      top 5px
      width 300px
      background #f3f4f5
      height 582px
      div
        .nav-msg-nav
          background #fff
          width 290px
          padding 15px 5px 20px 5px
          border-top 1px solid #f3f4f5
          li
            span
              display inline-block
              height 19px
              font-size 12px
              color #999
              line-height 19px
            .all-goods-btn
              float right
              width 46px
              height: 10px
              margin-top 5px
            ul
              clearFix()
              li
                float left
                width 86px
                padding 0 5px
                margin-top 10px
                img
                  width 100%
                  height 100%
                p
                  font-size 12px
                  color #333
                  margin-top 10px
                  text-align center


</style>
