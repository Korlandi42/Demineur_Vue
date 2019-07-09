<template>
    <div className="Grid" style="margin-bottom: 15px">
     <div v-for="(row, y) in map" :key="row.id" style="display: flex">
        <Cell v-for="cell in row" :key="cell.id" :value="cell"/>
        <SolverCell :sum="sumrow[y]"/>
    </div>
    <div style="display: flex">
        <SolverCell v-for="(solvercell, i) in sumcol" :key="solvercell.id" :sum="sumcol[i]"/>
    </div>
    </div>
</template>

<script>
import Cell from './Cell.vue'
import SolverCell from './SolverCell.vue'


export default {
  name: 'Grid',
  components: {
    Cell,
    SolverCell
  },
  beforeMount() {
    this.generateRow()
  },
  data() {
      return {
          map: [],
          sumrow: [],
          sumcol: []
      }
  },
  props: {
    msg: String
  },
  methods : {
    generateRow () {
        let map = []
        for (let j = 0; j < 6; j++) {
            map[j] = []
            for (let i = 0; i < 6; i++) {
                map[j][i] = getRandomInt(4)
            }
        }
        this.map = map
        this.sumcol = this.countCol(map)
        this.sumrow = this.countRow(map)
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }   
    },
    countRow (map) {
        let sumrow = []
        for (let j in map)
        {
            let sum = 0
            let bomb = 0
            for (let i in map[j])
            {
                sum += map[j][i]
                if (map[j][i] === 0)
                    bomb += 1
            }
            sumrow.push({sum , bomb})
        }
        return sumrow
    },
    countCol (map) {
        let sumcol = []
        for (let i = 0; i < 6; i++)
        {
            let sum = 0
            let bomb = 0
            for (let j = 0; j< 6; j++)
            {
                sum += map[j][i]
                if (map[j][i] === 0)
                    bomb += 1
            }
            sumcol.push({sum , bomb})
        }
        return sumcol
    }
  }
}
</script>
