<template>
  <div v-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import { testPosts } from "../microblog/testPosts.js";

export default {
  computed: {
    post() {
      return testPosts.find((x) => {
        return x.id === parseInt(this.$route.params.id, 10);
      });
    },
  },
};
</script>
