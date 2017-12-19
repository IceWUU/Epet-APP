<template>
  <div class="line-page">
    <div class="line"></div>
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
  @import "../../common/stylus/mixin.styl"
  .line-page
    clearFix()
    .line
      float left
      width 100%
      height 10px
      background #f3f4f5
</style>
