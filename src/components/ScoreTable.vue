<template>
  <div class="container">
    <header>
      <h1>High<br>Scores</h1>
      <img src="/assets/b_super.png">
    </header>
    <section>
      <ul>
        <li v-for="(highScore, index) in highScores" :key="highScore.id">
        <span class="number">{{ index + 1 }}.</span><span class="name"> {{ highScore.name }} -&nbsp;</span><span class="time"> {{ highScore.time }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>


export default {
  computed: {
    highScores () {
      return this.$store.getters.sortHighScores
    }
  }
}
</script>

<style scoped>
  .container {
    width: 400px;
    height: 600px;
    background-color: var(--color3);
    background-image: linear-gradient(to left, var(--color3), var(--color4));
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 220px 380px;
    place-items: center;

  }

  header {
    width: 360px;
    height: 180px;
    display: grid;
    grid-template-columns: 260px 100px;
    place-items: center;
  }

  h1 {
    color: var(--color1);
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
  }

  section {
    width: 360px;
    height: 420px;
    padding: 20px;
    display: grid;  
    place-items: left;
    font-size: 1.85rem;
  }

  .number {
    color: var(--color1);
  }

  .name {
    color: var(--color2);
  }

  .time {
    color: var(--color1)
  }

  li {
    list-style: none;
  }
</style>