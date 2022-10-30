<template>
  <form @submit.prevent="submit">
    <input placeholder="Title" />
    <br />
    <textarea v-model="content" rows="5" />
    <br />
    <button>Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },

  methods: {
    submit() {
      const newPost = {
        title: "New Post",
        content: this.content,
      };
      this.$emit("newPost", newPost);
    },
  },
};
</script>

<style scoped>
input,
textarea {
  font-size: 40px;
  width: 400px;
}
</style>
