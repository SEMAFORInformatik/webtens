<template>
  <div id="app-wrapper">
    <main-app :connected="connected" @loadStatus="loadStatus" @load="loaded = true"></main-app>
    <div id="loader-style"></div>
    <div v-if="!loaded" id="loading-screen" :style="{background: backgroundColor}">
      <div class="loading-container">
        <img v-show="startup_image" :src="startup_image" alt="logo" />
        <br>
        <span v-if="!connected" class="spinner"></span>
        <h1>{{ loadText }}...</h1>
        <progress v-if="connected" id="wrapper-loading-bar" :value="loadProgress" max="100"></progress>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MainApp from "./MainApp.vue";
import Component from "vue-class-component";
import Vue from "vue";
import { STARTUP_IMG, getBaseUrl, getConfig } from "../config";
import { Watch } from "vue-property-decorator";

// Wrap outside the application. Either shows intens or a loading screen
@Component({
  components: {
    MainApp,
  },
})
export default class AppWrapper extends Vue {
  loaded = false;
  loadProgress = 0;
  loadMax = 0;
  loadText = "Preparing your INTENS instance. This might take a while"
  progressInterval = 0;
  connected = false;
  startup_image = "";
  backgroundColor = "";

  @Watch("connected")
  onConnectionStatus() {
    if (this.connected) {
      this.loadText = "Loading";
    }
  }

  async mounted() {
    this.progressInterval = setInterval(() => {
      this.loadProgress += (this.loadMax - this.loadProgress) / 100
    }, 20);

    this.startup_image =  getBaseUrl() + "/res/" + ((await getConfig()).loadingLogo || "semafor.png");
    this.backgroundColor = (await getConfig()).background;
  }

  unmounted() {
    clearInterval(this.progressInterval);
  }


  loadStatus(status: string, loadProgress: number, max: number) {
    if (loadProgress === 100) {
      clearInterval(this.progressInterval);
    }
    this.loadText = status;
    this.loadProgress = loadProgress;
    this.loadMax = max;

  }
}
</script>

<style lang="scss">
#loading-screen {
  text-align: center;
  color: white;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: -1;
}

.loading-container {
  align-self: center;

  .icon-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

}

#wrapper-loading-bar {
  width: 100%;
  height: 2em;
}

h1 {
  font-size: 2em;
}

.spinner{
  color: #ffffff;
  font-size: 45px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  display: inline-block;
  margin-top: 1em;
  border-radius: 50%;
  position: relative;
  transform: translateZ(0);
  animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
}

@keyframes mltShdSpin {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
    -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
     -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
     -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
     -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
     -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
    0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}

@keyframes round {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
 </style>
