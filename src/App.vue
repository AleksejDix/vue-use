<template>
  <div id="app" class="flex">
    <div id="nav " class="w-64">
      <router-link class="block" to="/">Home</router-link>
      <router-link class="block" to="/about">About</router-link>
      <router-link class="block" to="/mouse">Mouse</router-link>
      <router-link class="block" to="/scroll">Scroll</router-link>
      <router-link class="block" to="/portals">Portals</router-link>
      <router-link class="block" to="/tooltip">Tooltip</router-link>
      <router-link class="block" to="/forms">Forms</router-link>
    </div>
    <div class="flex-1">
      <router-view />
      <portal-target name="modal"></portal-target>
      <portal-target name="modal-confirm"></portal-target>
      <portal-target name="tooltip" slim></portal-target>
    </div>
  </div>
</template>

<script>
export default {};
</script>
