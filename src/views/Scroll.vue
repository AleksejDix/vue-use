<template>
  <div>
    <div class="nav" ref="scrollSpyReportTo">
      <a href="#lol1" @click="scrollTo">jump to 1</a>
      <a href="#lol2" @click="scrollTo">jump to 2</a>
      <a href="#lol3" @click="scrollTo">jump to 3</a>
    </div>
    <ul class="sections" ref="scrollSpyOn">
      <li id="lol1" class="section s1">1</li>
      <li id="lol2" class="section s2">2</li>
      <li id="lol3" class="section s3">3</li>
    </ul>
  </div>
</template>

<script>
import useScrollTo from "../compositions/useScrollTo";
import useScrollSpy from "../compositions/useScrollSpy";
import { ref } from "@vue/composition-api";

export default {
  setup() {
    const scrollSpyReportTo = ref(null);
    const scrollSpyOn = ref(null);

    useScrollSpy({
      to: scrollSpyReportTo,
      on: scrollSpyOn
    });

    const { scrollTo } = useScrollTo();

    return {
      scrollTo,
      scrollSpyReportTo,
      scrollSpyOn
    };
  }
};
</script>

<style>
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.sections {
  display: flex;
  margin: 100rem 0;
}
.section {
  height: 100vh;
  min-width: 100vw;
}
.s1 {
  background: gold;
}
.s2 {
  background: red;
}
.s3 {
  background: green;
}

.active {
  background-color: hotpink;
}
</style>
