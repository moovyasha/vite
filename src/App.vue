
<template>
  <div id="app">
    <!-- <h1>Todo APP</h1>
    <Menu />
    <div style="border-top: 6px solid purple"></div>
    <router-view /> -->
    <q-layout view="lhh Lpr lff">
    <q-page-container>
      <Menu />
      <router-view />
    </q-page-container>
  </q-layout>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>