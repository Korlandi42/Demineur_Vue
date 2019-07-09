<template>
    <div id="cell" v-if="!hide" style="background-color: lightgreen;">
        <img v-if="value === 0" src="bomb.png" height="35px" width="35px" style="margin-top: 3px"/>
        <span v-else>{{value}}</span>
    </div>
    <div v-on:click="display(value)"  id="cell" v-else style="background-color: green;">
    </div>
</template>

<script>
export default {
  name: 'Cell',
  methods : {
    display (value) {
        if (this.$store.state.win !== undefined)
            return
        this.hide = false
        if (value) {
            this.$store.commit('increment', value)
            if (this.$store.state.score >= 45)
                this.$store.commit('end', true)
        }
        else
            this.$store.commit('end', false)
    }
  },
  data () {
      return {
          hide: true
      }
  },
  props: {
      value: Number
  }
}
</script>

<style>
#cell {
    height: 45px;
    width: 45px; 
    margin: 8px;
    line-height: 45px;
    text-align: center;
    font-size: 20px;
}
</style>
