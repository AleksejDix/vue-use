<template>
  <div>
    {{ state.value }}
    <button @click="send('RELOAD')">send load nested</button>

    <div class="flex" v-if="state.value === 'success'">
      <img
        class="w-12"
        v-for="dog in state.context.dogs"
        :src="dog"
        :key="dog"
      />
    </div>
  </div>
</template>

<script>
import useDogs from "@/compositions/useDogs.js";

export default {
  setup() {
    const { state, send } = useDogs();
    return {
      state,
      send
    };
  }
};
</script>
