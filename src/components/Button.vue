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
