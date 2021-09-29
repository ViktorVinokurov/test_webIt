<template>
  <v-app>
    <t-header />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import THeader from '@/components/header'
export default {
  name: 'App',
  components: {
    THeader
  },
  data: () => ({
    //
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
