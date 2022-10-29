<template>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
  <p>{{ total }}</p>
</template>

<script>
import { ref, reactive, computed } from "vue";

export default {
  setup() {
    const count = ref(0);
    const numbers = reactive({
      a: 1,
      b: 2,
    });

    const increase = (n) => {
      numbers[n]++;
    };
    const increment = () => {
      count.value++;
    };

    const total = computed(() => {
      return count.value + numbers.a + numbers.b;
    });

    return {
      count,
      total,
      increase,
      increment,
      numbers,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 40px;
}
button {
  height: 100px;
  width: 100px;
  font-size: 40px;
}
</style>
