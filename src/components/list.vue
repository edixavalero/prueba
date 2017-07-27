<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar class="white--text indigo" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>API</v-toolbar-title>
          <v-btn icon>
             <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-tile posts v-for="item in posts" v-bind:key="item.title">
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    posts: [],
    errors: []
  }),
  created () {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
  .then(response => {
    // JSON responses are automatically parsed.
    this.posts = response.data
  })
  }
}
</script>
