<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <Log
          :name="`piesocket`"
          :url="`wss://free3.piesocket.com/v3/1?api_key=${pieKey}&notify_self`"
        />
      </v-col>
      <v-col cols="12" md="6">
        <Log :name="`websocket`" :url="`wss://websocket.org`" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { piesocketApiKey } from "~/assets/constants.js";

export default {
  data() {
    return {
      pieKey: piesocketApiKey
    };
  }
};
</script>

<style>
</style>