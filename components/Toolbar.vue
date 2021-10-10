<template>
  <v-app-bar color="deep-purple accent-4" dense dark app>
    <v-toolbar-title>Request - Response</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item link>
          <v-list-item-title>Echo</v-list-item-title>
        </v-list-item>
        <v-list-item link>
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