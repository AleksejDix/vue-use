<template>
  <div class="about">
    <h1>This is an about page</h1>

    <pre>{{ query }}</pre>

    <form @submit.prevent>
      <input v-model="name" />
      <input v-model.number="age" type="number" />
      <button>search</button>
    </form>

    <router-link :to="{ query: { name: 'lidia', age: '31' } }">
      Lidia
    </router-link>
    <router-link :to="{ query: { name: 'aleksej', age: '33' } }">
      Aleksej
    </router-link>
  </div>
</template>

<script>
import { pickBy, identity } from "lodash-es";
import { ref } from "@vue/composition-api";

function useQuery() {
  const query = ref({});

  // pickBy(params, identity);

  pickBy(query.value, identity);

  return { query };
}

export default {
  setup() {
    const name = ref("");
    const age = ref(0);

    const { query } = useQuery({
      name,
      age
    });

    return { name, age, query };
  }
};
</script>
