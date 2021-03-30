<template>
  <teleport to="body">
  <div v-if="topTenScore" class="modal-backgound">
    <div class="modal">
      <header>
        <h1>Congratulations!</h1>
        <h1>High Score</h1>
        <img src="/assets/b_strong.png">
      </header>
      <form>
        <label for="name">Enter your name:</label>
        <input v-model="username" type="text" id="name">
        <button @click.prevent="addScore">Continue</button>
      </form>
    </div>
  </div>
  </teleport>
</template>

<script>
export default {
  methods: {
    addScore() {
      this.$store.dispatch('addHighScore')
      this.$store.dispatch('removeScore')
      this.$store.state.topTenScore = false
    }
  },
  computed: {
    topTenScore() {
      return this.$store.state.topTenScore
    },
    username: {
      get() {return this.$store.username},
      set(value) {this.$store.dispatch('updateUsername', value)}
    }
  }
}
</script>

<style scoped>
  .modal-backgound {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 300px;
    height: 420px;
    background-color: var(--color4);
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    border: 5px solid var(--color1);
    border-radius: 5%;
  }

  header {
    display: grid;
    align-items: space-evenly;
    justify-items: center;
    color: var(--color1);
  }

  form {
    display: grid;
    align-items: space-evenly;
    justify-items: center;
    font-size: 1.5rem;
    color: var(--color2);
  }

  button {
    margin-top: 15px;
    width: 100px;
    height: 40px;
    background-image: linear-gradient( to top, var(--color2), var(--color3));
    color: var(--color4);
  }
</style>