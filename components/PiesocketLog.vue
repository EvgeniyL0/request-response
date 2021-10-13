<template>
  <v-card min-height="400px">
    <v-card-title :class="textSize">Connection to "piesocket.com" log:</v-card-title>
    <v-card-text>
      <p v-for="(item, i) in log" :key="i">{{ item }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { createLogEvent } from "~/assets/utils.js";

const apiKey = "EadtTPuWPdsmtw3IK6KJ3MIbNzul7R7IVFNcc3WS";
const channelId = 1;

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
    const piesocket = new WebSocket(
      `wss://free3.piesocket.com/v3/${channelId}?api_key=${apiKey}&notify_self`
    );

    const boundHandleOpen = handleOpen.bind(this);
    const boundHandleClose = handleClose.bind(this);
    const boundHandleMessage = handleMessage.bind(this);
    const boundHandleError = handleError.bind(this);

    function handleOpen(e) {
      this.log.push(createLogEvent(`connection open`));
      piesocket.send("cmd_ping");
      this.log.push(createLogEvent(`send "ping"`));
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

    piesocket.onopen = boundHandleOpen;
    piesocket.onclose = boundHandleClose;
    piesocket.onmessage = boundHandleMessage;
    piesocket.onerror = boundHandleError;

    this.log.push(createLogEvent("connecting..."));
  }
};
</script>

<style>
</style>