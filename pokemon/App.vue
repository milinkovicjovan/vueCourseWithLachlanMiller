<template>
  <div class="cards">
    <the-card v-for="pokemon in pokemons" :key="pokemon.id">
      <template v-slot:title>
        {{ pokemon.name }}
      </template>
      <template v-slot:content> <img :src="pokemon.sprite" /> </template>
      <template v-slot:description>
        <div v-for="type in pokemon.types" :key="type">
          {{ type }}
        </div>
      </template>
    </the-card>
  </div>
</template>

<script>
import TheCard from "./TheCard.vue";
const api = "https://pokeapi.co/api/v2/pokemon";
const ids = [1, 4, 7];

export default {
  components: {
    TheCard,
  },
  data() {
    return {
      pokemons: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const responses = await Promise.all(
        ids.map((id) => window.fetch(`${api}/${id}`))
      );
      const json = await Promise.all(responses.map((data) => data.json()));

      this.pokemons = json.map((datum) => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other["official-artwork"].front_default,
        types: datum.types.map((type) => type.type.name),
      }));
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
}

img {
  width: 100%;
}
</style>
