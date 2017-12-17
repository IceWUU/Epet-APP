<template>
  <div class="footerTool">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },

    computed: {},

    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footerTool
    position fixed
    z-index 9
    bottom 0
    width 100%
    height 45px
    background #fff
    overflow hidden
    ul
      width 100%
      height 44px
      display flex
      margin 0 auto

      border-top 1px solid #e7e7e7
      li
        flex 1
        float left
        height 55px
        font-size 12px
        text-align center
</style>
