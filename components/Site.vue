<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card height="400px">
          <v-card-title>Piesocket</v-card-title>
          <iframe
            src="https://www.piesocket.com/websocket-tester"
            frameborder="0"
            width="100%"
            height="350px"
            @load="piesocketError = true"
            @error="piesocketError = true"
            v-if="!piesocketError"
          ></iframe>
          <p class="text-h5 mt-4 text-center" v-else>Error</p>
        </v-card>
      </v-col>
      <v-col>
        <v-card min-height="400px">
          <v-card-title>Websocket</v-card-title>
          <iframe
            src="https://www.websocket.org/echo.html"
            frameborder="0"
            width="100%"
            height="400px"
            @error="websocketError = true"
          ></iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      piesocketError: false,
      websocketError: false
    };
  },
  methods: {
    onLoad() {
      console.log("1yes!");
    },
    onError() {
      console.log($event);
    }
  }
};
</script>

<style>
</style>