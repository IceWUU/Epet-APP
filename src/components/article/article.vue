<template>
  <div class="article">
    <pet-carousel></pet-carousel>
    <pet-navigation></pet-navigation>
    <pet-line></pet-line>
    <pet-special></pet-special>
    <pet-line></pet-line>
    <pet-mallPictures></pet-mallPictures>

  </div>
</template>

<script>
  import carousel from './carousel.vue'
  import navigation from './navigation.vue'
  import line from './line.vue'
  import special from './special.vue'
  import mallPictures from './mallPictures.vue'


  export default {
    data() {
      return {}
    },

    computed: {},

    methods: {},
    components: {
      'pet-carousel': carousel,
      'pet-navigation': navigation,
      'pet-line': line,
      'pet-special': special,
      'pet-mallPictures': mallPictures,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .article
    padding 87px 0 45px 0
</style>
