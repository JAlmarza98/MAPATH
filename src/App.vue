<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
  <div class="d-flex version">
    <img src="./assets/logo.png" alt="Vue Logo" class="logo" />
    <span class="text-white align-bottom">{{vueVersion}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, version } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    return {
      vueVersion: computed(() => version)
    }
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

.logo {
  width: 30px;
}

.version {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
