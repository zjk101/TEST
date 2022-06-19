<template>
  <div id="app">   
    <Navigation v-if="$route.meta.show" />
    <router-view></router-view>
    <Footer v-if="$route.meta.show" />
    <!-- <Login /> -->
  </div>
</template>

<script>
import Navigation from './components/Navigation/index';
import Footer from './components/Footer/index';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    
  }
}
</script>

<style>
/* html,body,#app {
  height: 100%;
  
} */
</style>
