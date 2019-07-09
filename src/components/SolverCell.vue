<template>
    <div id="solvercell" style="background-color: pink;">
        {{sum.sum + '/' + sum.bomb}} <img src="bomb.png" height="11px" width="11px" style="margin-left: -3px"/>
    </div>
</template>

<script>
export default {
  name: 'SolverCell',
  props: {
      sum: Object
  }
}
</script>

<style>
#solvercell {
    height: 45px;
    width: 45px; 
    margin: 8px;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
}
</style>
