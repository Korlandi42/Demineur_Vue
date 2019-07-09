<template>
    <div id="solvercell" style="background-color: pink;">
        {{sum.sum + '/' + sum.bomb}} <img src="bomb.png" height="9px" width="8px" style="margin-left: -3px"/>
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
    height: 33px;
    width: 33px; 
    margin: 8px;
    line-height: 30px;
    text-align: center;
    font-size: 11px;
}
</style>
