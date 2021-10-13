<template>
  <v-card min-height="400px">
    <v-card-title :class="textSize">Connection to "websocket.org" log:</v-card-title>
    <v-card-text>
      <p v-for="(item, i) in log" :key="i">{{ item }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { createLogEvent } from "~/assets/utils.js";

export default {
  data() {
    return {
      log: []
    };
  },
  computed: {
    textSize() {
      if (this.$vuetify.breakpoint.name === "xs") {
        return "text-body-1";
      } else {
        return "text-h6";
      }
    }
  },
  created() {
    const websocket = new WebSocket(`wss://websocket.org`);

    const boundHandleOpen = handleOpen.bind(this);
    const boundHandleClose = handleClose.bind(this);
    const boundHandleMessage = handleMessage.bind(this);
    const boundHandleError = handleError.bind(this);

    function handleOpen(e) {
      this.log.push(createLogEvent(`connection open`));
    }

    function handleClose(e) {
      if (e.wasClean) {
        this.log.push(createLogEvent(`connection closed, code=${e.code}`));
      } else {
        this.log.push(createLogEvent("connection is broken"));
      }
    }

    function handleMessage(e) {
      this.log.push(createLogEvent(`received ${e.data}`));
    }

    function handleError(e) {
      this.log.push(createLogEvent("error"));
    }

    websocket.onopen = boundHandleOpen;
    websocket.onclose = boundHandleClose;
    websocket.onmessage = boundHandleMessage;
    websocket.onerror = boundHandleError;

    this.log.push(createLogEvent("connecting..."));
  }
};
</script>

<style>
</style>