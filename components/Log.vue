<template>
  <v-card>
    <v-card-title :class="textSize">
      Connection to {{ name }} log:
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link @click="clearLog">
            <v-list-item-title>Clear log</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="closeConnection">
            <v-list-item-title>Close connection</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-card-text>
      <div class="log">
        <p v-for="(item, i) in log" :key="i">{{ item }}</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { createLogEvent } from "~/assets/utils.js";

export default {
  props: {
    name: String,
    url: String
  },
  data() {
    return {
      socket: {}
    };
  },
  computed: {
    log() {
      return this.$store.state[this.name];
    },
    textSize() {
      if (this.$vuetify.breakpoint.name === "xs") {
        return "text-body-1";
      } else {
        return "text-h6";
      }
    }
  },
  methods: {
    clearLog() {
      this.$store.commit("clearLog", this.name);
    },
    closeConnection() {
      this.socket.close(1000, "the work is finished");
    }
  },
  created() {
    const boundHandleOpen = handleOpen.bind(this);
    const boundHandleClose = handleClose.bind(this);
    const boundHandleMessage = handleMessage.bind(this);
    const boundHandleError = handleError.bind(this);

    function handleOpen(e) {
      this.$store.commit("addItemToLog", {
        dest: this.name,
        data: createLogEvent("connection open")
      });
      this.socket.send("cmd_ping");
      this.$store.commit("addItemToLog", {
        dest: this.name,
        data: createLogEvent(`send "ping"`)
      });
    }

    function handleClose(e) {
      if (e.wasClean) {
        this.$store.commit("addItemToLog", {
          dest: this.name,
          data: createLogEvent(`connection closed, code=${e.code}`)
        });
      } else {
        this.$store.commit("addItemToLog", {
          dest: this.name,
          data: createLogEvent("connection is broken")
        });
      }
    }

    function handleMessage(e) {
      this.$store.commit("addItemToLog", {
        dest: this.name,
        data: createLogEvent(`received ${e.data}`)
      });
    }

    function handleError(e) {
      this.$store.commit("addItemToLog", {
        dest: this.name,
        data: createLogEvent("error")
      });
    }

    this.socket = new WebSocket(this.url);
    this.socket.onopen = boundHandleOpen;
    this.socket.onclose = boundHandleClose;
    this.socket.onmessage = boundHandleMessage;
    this.socket.onerror = boundHandleError;

    this.$store.commit("addItemToLog", {
      dest: this.name,
      data: createLogEvent("connecting...")
    });
  },
  beforeDestroy() {
    this.closeConnection();
  }
};
</script>

<style>
.log {
  height: 400px;
  padding: 5px;
  overflow-y: auto;
}
</style>