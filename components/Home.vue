<template>
  <v-container>
    <h1
      :class="`${textSize} mt-4 text-center`"
    >Click menu button and seletct what should be displayed</h1>
  </v-container>
</template>

<script>
export default {
  computed: {
    textSize() {
      if (this.$vuetify.breakpoint.name === "xs") {
        return "text-body-1";
      } else {
        return "text-h5";
      }
    }
  }
};
</script>

<style>
</style>