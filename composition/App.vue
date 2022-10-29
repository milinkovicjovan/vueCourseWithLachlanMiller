<template>
  <button @click="increment">{{ count }}</button>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <p>{{ total }}</p>
  <div v-for="number in history" :key="number">
    {{ number }}
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const count = ref(0);
    const a = ref(0);
    const b = ref(0);
    const history = ref([]);

    const increment = () => {
      count.value++;
    };

    const total = computed(() => {
      return count.value + a.value + b.value;
    });

    watch([a, b], ([newA, newB], [oldA, oldB]) => {
      if (newA !== oldA) {
        history.value.push(`A: ${oldA} -> ${newA}`);
      }
      if (newB !== oldB) {
        history.value.push(`B: ${oldB} => ${newB}`);
      }
    });

    return {
      a,
      b,
      history,
      count,
      total,
      increment,
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
