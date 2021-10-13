<template>
  <v-app-bar class="mx-auto" color="blue darken-3" dense dark app max-width="1264px">
    <v-toolbar-title>Request - Response</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu left bottom min-width="150px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link @click="$store.commit('setCurrentComponent', 'Echo')">
          <v-list-item-title>Echo</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$store.commit('setCurrentComponent', 'Site')">
          <v-list-item-title>Site</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>