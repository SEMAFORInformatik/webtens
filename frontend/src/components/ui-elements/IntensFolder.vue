<template>
  <div class="intens-folder" :id="data.name" :class="intensClass" :style="expandHorizontal ? 'flex-grow:1;' : ''">
    <vue-tabs v-if="data.buttons" v-model="index" @tab-change="changeTab" :buttonAlignment="buttonsAreBottom ? 'bottom' :'top'"">
      <template v-for="page in pages">
        <v-tab
          class="intens-folder-page"
          :key="page.id"
          :title="`${data.base.Name}-${page.label.replaceAll(' ', '-')}`"
          >
          <div :key="updateKey" :class="{ hidden: !page.visible}" slot="title">{{ page.label }}</div>
          <component :is="'intens-Container'" :data="page.container" :form="form" :style="{
            'min-width': data.base.width + 'px',
            'min-height': data.base.height+ 'px'
          }">
          </component>
        </v-tab>
      </template>
    </vue-tabs>
    <div v-else v-for="(_, i) in data.pages">
      <component
        v-show="i == index"
        v-if="hasBeenShown[i]"
        :is="'intens-Container'"
        :form="form"
        :data="data.pages[i].container">
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { IntensFolderData } from "../../dataTypes";
import { in_proto } from "../../proto";

interface IntensFolder {
  data: in_proto.Folder;
}

@Component
class IntensFolder extends mixins(base) {
  index = 0;
  updateKey = 0;
  hasBeenShown: {[key: string]: boolean} = {};
  pages = this.data.pages.map((page) => {
    page.visible = true;
    return page;
  });
  sending: boolean = false;

  @Watch("index", {immediate: true})
  indexWatch(newIndex: string) {
    this.$set(this.hasBeenShown, newIndex, true);
  }

  created() {
    this.$ids.addComponent(this);
    this.checkActivePage();
    this.updateVisiblePages(this.$store.state.folderState);
  }

  checkActivePage() {
    let i = 0;
    for (let page of this.data.pages) {
      if (page.active) {
        this.index = i;
      }
      i++;
    }
    this.index = this.getActiveFolderTab(this.data.base.Name) >= 0 ? this.getActiveFolderTab(this.data.base.Name) : this.index;
  }
  getNewValue(value: IntensFolderData) {
    this.intensClass = this.prefixCssClass(value.class)
    this.updateVisiblePages(this.$store.state.folderState);
    if (value.active == this.index || this.sending) return;

    this.index = value.active;
  }
  updateVisiblePages(folders: in_proto.WebAPIResponse.IFolderUpdate[]) {
    const folder = folders.find(e => e.name === this.data.base.Name)
    if (!folder) return;
    for (let i = 0; i < folder?.visiblePages?.length; i++) {
      this.$set(this.pages[i], "visible", folder.visiblePages[i]);
    }
    requestAnimationFrame(() => {
      this.$forceUpdate()
      this.updateKey++
      requestAnimationFrame(() => this.updateKey++)
    });
  }
  async changeTab(index: string) {
    if (this.sending) return;
    this.sending = true;
    this.index = parseInt(index);
    this.getTracer().startActiveSpan("change folder tab", async span => {
      await this.control({
        command: "FOLDERTAB",
        argument: this.data.base.Name,
        index: this.index,
        form_name: this.form.base.Name,
      })
      requestIdleCallback(() =>{
        this.sending = false;
      })
      span.end()
    })
  }

  get buttonsAreBottom() {
    return this.data.buttonAlignment === in_proto.GuiElement.Alignment.Bottom
  }

  get expandHorizontal() {
    return this.data.base.expand === in_proto.GuiElement.Orientation.Horizontal || this.data.base.expand === in_proto.GuiElement.Orientation.Both
  }
}

export default IntensFolder;
</script>

<style lang="scss">
.intens-folder {
  min-width: max-content;
}
.tab:has(> .tabs__link > .hidden) {
  display: none;
}
</style>
