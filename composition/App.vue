<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  setup() {
    const msg = "Hello World";

    return {
      msg,
    };
  },
};
</script>

<style scoped></style>
