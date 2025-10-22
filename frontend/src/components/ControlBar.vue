<template>
  <div class="control-bar" :style="myStyle">
    <div class="subnav">
      <div class="tooltips-menu"><span>Tooltips:</span><input type="checkbox" v-model="showTooltips" /></div>
      <div class="controllbar-menu"><span>showControlBar:</span><input type="checkbox" v-model="showControlBar"/></div>
    </div>
    <form class="logout-menu subnav">
      <button id="web-logout" class="logout-menu subnav" type="submit" @click="logout" v-tooltip.bottom="'Logout'">
        <img alt="logout" :src="logoutURL" height="20" />
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from "vue-class-component";
import { Watch } from "vue-property-decorator";
import base from "./ui-elements/base";

// Used to offer additional functionality in the gui without extending intens
@Component
export default class ControlBar extends mixins(base) {
  showTooltips: boolean = true;
  showControlBar: boolean = true;
  myStyle: string = "";
  logoutURL = this.getBaseUrl() + "/res/logout.png";

  logout(e: Event) {
    console.debug("logout");
    e.preventDefault()
    this.getTracer().startActiveSpan("logout", async span => {
      await this.execute({ action: "QUIT", reason: "Input" });
      span.end();
    });
  }

  @Watch("showTooltips")
  onshowTooltipsChange(show: boolean) {
    if (show) {
      document.body.classList.remove("disable-tooltips");
    } else {
      document.body.classList.add("disable-tooltips");
    }
  }

  @Watch("showControlBar")
  onshowResizeChange(show: boolean) {
    if (!show) {
      this.myStyle = "height:2px; visibility: hidden; "
    } else {
      this.myStyle = ""
    }
  }
}
</script>
<style lang="scss">
.control-bar {
  //position: absolute;
  width: 100%;
  //z-index: 3;
  //top: 0;
  height: 35px;
  background: linear-gradient(to right, orange, yellow, green, cyan, blue, violet);
  background: var(--main-color-dark);
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  .subnav {
    height: 100%;
    margin: auto 0;
    display: inline-block;
    background: var(--background-color-dark);
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
  .logout-menu {
    float: right;
    width: 40px;
    button {
      height: 100%;
      width: 100%;
      background: var(--background-color-dark);
      border: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .tooltips-menu {
    margin: 6px;
    input {
      margin-left: 7px;
    }
    float: left;
  }
  .controllbar-menu {
    margin: 6px;
    input {
      margin-left: 7px;
    }
    float: right;
  }
}
</style>
