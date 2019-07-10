<template>
  <div id="app">
    <Button/>
    <Grid/>
    <Score/>
    <Message/>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Grid from './components/Grid.vue'
import Score from './components/Score.vue'
import Message from './components/Message.vue'
import store from './vuex/store.js'


export default {
  name: 'app',
  store,
  components: {
    Button,
    Grid,
    Score,
    Message
  }
}
</script>

<style>
#app {
  font-family: 'Arial';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
