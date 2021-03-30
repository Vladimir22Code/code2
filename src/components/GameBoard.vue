<template>
  <div class="container" :class="{background : !gameOn}">
    <div class="hidden" 
    v-for="element in board" 
    :key="element.id"
    :class="{open : element.isVisible, blank : element.isCompleted, finished : !gameOn}"
    @click="checkField(element)">
      <img v-if="element.isVisible && gameOn" :src="element.picture">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    checkField(element) {
      this.$store.dispatch('checkField', element)        
    }
  },
  computed: {
    board() {
      return this.$store.state.gameElements
    },
    gameOn() {
      return this.$store.state.gameInProgress
    },
    completedFields() {
      return this.$store.state.completedFields
    }
  },
  watch: {
    completedFields(fields) {
        if (fields == 36) {
          this.$store.state.gameInProgress = false
          clearInterval(this.$store.state.timeCount)
          this.$store.dispatch('checkHighScore')
      } 
    }
  }
}
</script>

<style scoped>
  .container {
    width: 600px;
    height: 600px;
    background-color: var(--color4);
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    place-items: center;
    margin: 20px;
  }
  .hidden {
    display: grid;
    width: 85px;
    height: 85px;
    background-color: var(--color3);
    border: 4px solid var(--color2);
    place-items: center;
  }

  .blank {
    display: grid;
    width: 85px;
    height: 85px;
    background-color: transparent;
    border: 4px solid transparent;
    place-items: center;
  }

  .open {
    display: grid;
    width: 85px;
    height: 85px;
    background-color: var(--color4);
    border: 4px solid var(--color4);
    place-items: center;
  }

  .finished {
    display: grid;
    width: 85px;
    height: 85px;
    background-color: transparent;
    border: 4px solid transparent;
    place-items: center;
  }

  .background {
    background-image: url('/assets/background.png');
  }

</style>