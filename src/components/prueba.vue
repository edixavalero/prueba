<template>
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://lorempixel.com/400/200'
          },
          {
            src: 'http://lorempixel.com/g/400/200'
          },
          {
            src: 'http://lorempixel.com/400/200'
          },
          {
            src: 'http://lorempixel.com/400/200/sports'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
