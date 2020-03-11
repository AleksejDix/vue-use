<template>
  <div>
    {{ state.context.tries }} {{ state.value }}

    <template v-if="state.matches('idle')">
      <button @click="send('LOAD')">fetch</button>
    </template>

    <template v-if="state.matches('fulfilled')">
      <button @click="send('LOAD')">refetch</button>
      <img :src="state.context.data" alt="" />
    </template>

    <template v-if="state.matches('rejected')">
      <p>Data could not be loaded. You can retry</p>
      <button class="bg-red-400" @click="send('LOAD')">retry</button>
    </template>
  </div>
</template>

<script>
import useFetchMachine from "@/compositions/useFetchMachine.js";
import { watch } from "@vue/composition-api";
import { list } from "@/api/dogs.js";
import { assign } from "xstate";

export default {
  setup() {
    const { state, send } = useFetchMachine({
      services: {
        fetchEndpoint: list
      },
      actions: {
        try: assign({ tries: context => (context.tries += 1) }),
        reject: assign({ error: (_, event) => event.data }),
        fullfill: assign({ data: (_, event) => event.data })
      }
    });

    watch(state, () => console.log(state));

    return {
      state,
      send
    };
  },
  data() {
    return {
      count: 39472
    };
  },
  methods: {
    up() {
      this.count++;
    },
    zero(num, places) {
      return String(num).padStart(places, "0");
    }
  }
};
</script>
