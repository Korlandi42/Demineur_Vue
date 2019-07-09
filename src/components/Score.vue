<template>
    <div style="margin-bottom: 10px; margin-left: 300px">
        Score: {{score}}
    </div>
</template>

<script>
export default {
  name: 'Score',
  computed: {
      score () {
          return this.$store.state.score
      }
  }
}
</script>
