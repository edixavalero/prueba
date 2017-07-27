<template>
  <v-app id="example-3" standalone>
    <v-navigation-drawer permanent clipped light>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title">
          <router-link :to="item.router" >
          <v-list-tile-action >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </router-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="purple" dark>
      <v-toolbar-title>Barra de Navegación</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
        <!--v-router-->
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Formulario', icon: 'dashboard', router: '/' },
        { title: 'Carousel', icon: 'image', router: '/prueba' },
        { title: 'Cards', icon: 'folder', router: '/card' },
        { title: 'List', icon: 'format-list-bulleted', router: '/list' }
      ],
      right: null
    }
  }
}
</script>

<style>
#app, .router-link{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.application--light{
  background: #c5c5c5;
}

</style>
