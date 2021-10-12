<template>
  <v-main>
    <component :is="$store.state.currentComponent"></component>
  </v-main>
</template>

<script>
export default {};
</script>

<style>
</style>