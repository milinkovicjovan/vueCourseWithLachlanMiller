<template>
  {{ store.state.count }}
  <button @click="click">Increment</button>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const click = () => {
      store.commit("increment", { number: 10 });
    };

    return {
      store,
      click,
    };
  },
};
</script>

<style></style>
