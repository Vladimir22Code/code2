<template>
  <div class="container">
    <img src="/assets/b_thumbup.png">
    <button @click="newGame">Start New Game</button>
    <img src="/assets/b_enthusiastic.png">
    <section>
      <h1>Time</h1>
      <p>{{ getMinutes }} : {{ getSeconds }}.{{ getDeciseconds }}</p>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    newGame() {
      this.$store.dispatch('resetBoard')
      this.$store.dispatch('shuffle') 
      this.$store.dispatch('stopWatch')
    }
  },
  computed: {
    getDeciseconds() {
      return this.$store.getters.parseDeciseconds
    },
    getSeconds() {
      return this.$store.getters.parseSeconds
    },
    getMinutes() {
      return this.$store.getters.parseMinutes
    }
  }
}
</script>

<style scoped>
  .container {
    width: 200px;
    height: 600px;
    background-color: var(--color4);
    background-image: linear-gradient(to right, var(--color3), var(--color4));
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 150px);
    place-items: center;
  }

  button {
    cursor: pointer;
    width: 160px;
    height: 80px;
    font-family: 'Comic Neue', cursive;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--color4);
    background-color: var(--color2);
    background-image: linear-gradient(to top, var(--color1), var(--color2));
  }

  section {
    width: 160px;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 50px);
    place-items: center;
    font-weight: 700;
  }

  h1 {
    color: var(--color1);
    font-size: 2.5rem;
  }

  p {
    color: var(--color2);
    font-size: 2.5rem;
  }
</style>