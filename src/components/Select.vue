<template>
  <div>
    <pre>  {{ state.context }}</pre>
    <pre>  {{ state.value }}</pre>

    <div class="dropdown">
      <button
        class="dropdown-toggle rounded border px-4 py-2"
        @click="send"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span>
          {{ state.context.selected ? state.context.selected : " -empty-" }}
        </span>
      </button>

      <button @click="send('remove')" v-if="state.matches('selector.selected')">
        delete
      </button>
      <div v-if="state.matches('browse.open')">
        <ul role="menu" class="dropdown-list border">
          <li
            v-for="option in state.context.options"
            :key="option"
            class="border"
          >
            <a
              @click.prevent="send('select', { $event, option })"
              role="menuitem"
              class="dropdown-item"
              href="#"
              >{{ option }}</a
            >
          </li>
        </ul>
        <button @click="send('close')">close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useMachine } from "@xstate/vue";
import select from "@/machines/select.js";
import { reactive } from "@vue/composition-api";

export default {
  setup() {
    const context = reactive({
      options: ["apple", "banana", "dog"],
      selected: "apple"
    });
    const { state, send } = useMachine(select, {
      context,
      actions: {
        log: (c, e) => {
          console.log(c, e);
        }
      }
    });
    return { state, send };
  }
};
</script>
