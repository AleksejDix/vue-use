<template>
  <div>
    <button @click="prev">prev</button>
    <button @click="next">next</button>
    <Interval :time="1000" @tick="log" />
    <ul>
      <li
        v-for="(song, index) in songs"
        :key="index"
        :class="{
          current: isCurrent(index)
        }"
      >
        {{ song }}
      </li>
    </ul>

    <input type="number" min="0" :max="total - 1" v-model.number="current" />

    <ul>
      <li v-for="(song, index) in songs" :key="index">
        <button @click="select(index)">{{ index + 1 }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import usePlayer from "./../compositions/usePlayer";
import Interval from "@/components/renderless/Inderval.vue";

export default {
  components: {
    Interval
  },
  setup() {
    const log = () => {
      // console.log(new Date());
    };
    return {
      log,
      ...usePlayer({
        loop: true,
        select: 3,
        songs: ["ant", "bison", "camel", "duck", "bison"]
      })
    };
  }
};
</script>

<style>
.current {
  background: red;
}
</style>
