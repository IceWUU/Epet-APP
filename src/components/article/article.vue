<template>
  <div class="article" v-if="home">
    <pet-carousel :home="home"/>
    <pet-navigation :home="home"/>
    <pet-line/>
    <pet-special/>
    <pet-line/>
    <pet-mallPictures :home="home"/>
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
    props:{
      home: Object
    },

    computed: {},

    methods: {

    },

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
