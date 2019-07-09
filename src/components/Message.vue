<template>
    <span v-if="win === undefined">You need 45 points</span>
    <span v-else-if="win" style="color: green;">You Win</span>
    <span v-else style="color: red;">You Loose</span>
</template>

<script>
export default {
  name: 'Message',
  computed: {
    win() { return this.$store.state.win }
  }
}
</script>
