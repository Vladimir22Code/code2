<template>
  <game-menu></game-menu>
  <game-board></game-board>
  <score-table></score-table>
  <modal></modal>
</template>

<script>
import GameMenu from '@/components/GameMenu.vue'
import GameBoard from '@/components/GameBoard.vue'
import ScoreTable from '@/components/ScoreTable.vue'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    GameMenu,
    GameBoard,
    ScoreTable,
    Modal
  },
  created() {
    this.$store.dispatch('getData')
  },
  beforeUnmount() {
    this.$store.dispatch('sendData')
  }
}

</script>

<style>
  :root {
    --color1: #91091e;
    --color2: #da723c;
    --color3: #c39e5c;
    --color4: #fdf1d6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Comic Neue', cursive;
  }

  #app {
    background-color: var(--color4);
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    grid-auto-flow: row;
    place-items: center;
  }
</style>
