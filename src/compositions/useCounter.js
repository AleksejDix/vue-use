import { ref } from "@vue/composition-api";

export default function useCounter(value) {
  const counter = ref(value);

  // watch(() => console.log("counter", counter.value));

  function up() {
    counter.value++;
  }

  function down() {
    counter.value--;
  }

  function reset() {
    counter.value = value;
  }

  function setCounter(value) {
    counter.value = value;
  }

  return {
    counter,
    setCounter,
    up,
    down,
    reset
  };
}
