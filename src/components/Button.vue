<template>
    <button v-on:click="reload" style="margin-bottom: 10px" >New Game</button>
</template>

<script>
export default {
  name: 'Button',
  methods : {
    reload() {
      document.location.reload(true)
    }
  }
}
</script>

<style>
button {
  text-transform: uppercase;
  background: #f1f1f1;
  padding: 5px 8px;
  border-radius: 3px;
  border-bottom: solid 2px rgba(0,0,0,0.2);
  font-size: 14px;
}
</style>