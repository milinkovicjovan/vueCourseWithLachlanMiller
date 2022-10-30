<template>
  <div>{{ post.likes }}</div>
  <button @click="handleLike">❤️ Like</button>
  <hr />
  <the-hashtag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashtag="hashtag"
  />
</template>

<script>
import TheHashtag from "./TheHashtag.vue";
import { store } from "./store.js";

export default {
  components: {
    TheHashtag,
  },
  props: {
    post: {
      type: Object,
    },
  },

  setup(props) {
    const handleLike = () => {
      store.likePost(props.post);
    };

    return {
      handleLike,
    };
  },
};
</script>
