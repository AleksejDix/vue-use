<template>
  <div>
    <Machine :machine="machine">
      <template #default="{current, send}">
        state: {{ current.context.amount }}
        <div class="w-32 h-32 relative border border-black">
          <div
            class="w-full bottom-0 absolute bg-blue-500 water"
            :style="{
              height: current.context.amount + '%'
            }"
          ></div>
        </div>

        <button
          v-if="current.matches('filling')"
          class="button bg-blue-500 text-white rounded-full px-3 py-1"
          @click="send('PAUSE')"
        >
          pause
        </button>
        <button
          v-if="current.matches('empty') || current.matches('pause')"
          class="button bg-blue-500 text-white rounded-full px-3 py-1"
          @click="send('FILL')"
        >
          fill
        </button>
        <button
          class="button bg-blue-500 text-white rounded-full px-3 py-1"
          @click="send('EMPTY')"
          v-if="current.matches('full')"
        >
          Drink
        </button>
      </template>
    </Machine>
  </div>
</template>

<script>
import glass from "@/machines/glass.js";
import Machine from "@/components/renderless/xstate-machine";

export default {
  components: {
    Machine
  },
  computed: {
    machine() {
      return glass;
    }
  }
};
</script>

<style>
.water {
  transition: 0ms height ease-in-out;
}
</style>
