<template>
  <div id="wrapper">
    <div>
      <label>Search hashtag:</label>
      <input :value="currentTag" @input="handleInput" placeholder="#vue" />
    </div>
    <div class="cards">
      <the-card v-for="post in filteredPosts" :key="post.id">
        <template v-slot:title>
          {{ post.title }}
        </template>

        <template v-slot:content>
          {{ post.content }}
        </template>

        <template v-slot:description>
          <the-controls :post="post" />
        </template>
      </the-card>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { store } from "./store.js";
import TheCard from "../pokemon/TheCard.vue";
import TheControls from "./TheControls.vue";

export default {
  components: {
    TheCard,
    TheControls,
  },

  setup() {
    const handleInput = ($event) => {
      store.setHashtag($event.target.value);
    };

    return {
      handleInput,
      filteredPosts: computed(() => store.posts),
      currentTag: computed(() => store.state.currentTag),
    };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
}

input,
label {
  font-size: 30px;
}

input {
  height: 30px;
  width: 200px;
  padding: 5px;
  margin: 5px;
  margin: 30px;
}

#wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
