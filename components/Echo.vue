<template>
  <v-container>
    <v-card>
      <v-card-title>Connection log</v-card-title>
      <v-card-text>
        <p v-for="(item, i) in log" :key="i">{{ item }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
const apiKey = "EadtTPuWPdsmtw3IK6KJ3MIbNzul7R7IVFNcc3WS";
const channelId = 1;
const connectionState = {
  "0": "Connecting to websocket...",
  "1": "Connection open",
  "2": "Closing",
  "3": "Connection closed",
}

export default {
  data() {
    return {
      log: [],
    };
  },
  created() {
    const piesocket = new WebSocket(
      `wss://free3.piesocket.com/v3/${channelId}?api_key=${apiKey}&notify_self`
    );
    const boundHandleConnection = handleConnection.bind(this);

    function handleConnection(e) {
      if (e.message) {
        this.log.push(e.message);
      } else {
        this.log.push(connectionState[piesocket.readyState]);
      }
      
    }

    piesocket.onopen = boundHandleConnection;
    piesocket.onclose = boundHandleConnection;
    piesocket.onerror = boundHandleConnection;

    this.log.push(connectionState[piesocket.readyState]);
  },
};
</script>

<style>
</style>