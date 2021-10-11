<template>
  <v-container fluid>
    <v-card>
      <v-card-text>{{ response }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
const apiKey = "EadtTPuWPdsmtw3IK6KJ3MIbNzul7R7IVFNcc3WS";
const channelId = 1;
const piesocket = new WebSocket(
  `wss://free3.piesocket.com/v3/${channelId}?api_key=${apiKey}&notify_self`
);

export default {
  data() {
    return {
      response: ""
    };
  },
  created() {
    piesocket.onopen = function() {
      this.response = "Websocket connected";
      piesocket.send(
        JSON.stringify({
          event: "new_joining",
          sender: "User"
        })
      );
    };
  },
  /*async fetch() {
    await fetch("https://www.piesocket.com/api/connections", {
      headers: {
        key: "EadtTPuWPdsmtw3IK6KJ3MIbNzul7R7IVFNcc3WS",
        secret: "owJBY6nspgSBwmHy048vCcr8Rt2ZF8kR"
      }
    })
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(data => {
        console.log(data);
      });
  }*/
};
</script>

<style>
</style>