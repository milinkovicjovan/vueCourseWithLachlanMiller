<template>
  <the-card v-for="post in store.state.posts" :key="post.id">
    <template v-slot:title> {{ post.title }} </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <the-controls :post="post" />
    </template>
  </the-card>
</template>

<script>
import { store } from "./store.js";
import TheCard from "../pokemon/TheCard.vue";
import TheControls from "./TheControls.vue";

export default {
  components: {
    TheCard,
    TheControls,
  },
  setup() {
    return {
      store,
    };
  },
};
</script>

<style></style>
