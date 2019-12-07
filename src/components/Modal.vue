<template>
  <portal to="modal">
    <div v-if="open">
      <div
        :class="color || 'bg-red-600'"
        class="absolute inset-0"
        @click="$emit('close')"
      ></div>
      <slot />
      <button @click="$emit('close')">close</button>
    </div>
  </portal>
</template>

<script>
export default {
  props: ["open", "color"]
};
</script>

<style></style>
