<template>
  <fieldset class="intens-fieldgroup" :class="[{ framed: data.frame }, intensClass]" v-show="show">
    <legend class="label" v-if="data.label" v-html="label"></legend>
    <div
      class="intens-fieldgroup-lines"
      :class="{ vertical }"
      :style="{
        'grid-template-columns': templateColumns,
        'grid-template-rows': `repeat(${vertical ? longestLine : lines.length}, max-content)`,
      }">
      <template v-for="line in lines">
        <template v-for="(component, i) in line">
          <div
            v-if="component !== null"
            :class="[{ 'first-item': i === 0 }, `fieldgroup-${typeToString(component.type)}`]"
            :style="{
              'justify-content': alignmentToCss(component.alignment, component),
              'align-items': alignmentToCss(component.alignment, component),
              'grid-column-end': `span ${
                isSeparator(component.type)
                  ? longestLine
                  : component.colspan > 1
                  ? component.colspan
                  : 1
              }`,
              'grid-row-end': `span ${
                isSeparator(component.type)
                  ? longestLine
                  : component.rowspan > 1
                  ? component.rowspan
                  : 1
              }`,
            }">
            <component :is="'intens-' + typeToString(component.type)" :data="component" :form="form"></component>
          </div>
        </template>
      </template>
    </div>
  </fieldset>
</template>
<script lang="ts">
import base from "./base";
import unescape from "unescape";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensFieldgroup {
  data: in_proto.FieldGroup;
}

@Component
class IntensFieldgroup extends mixins(base) {
  longestLine = 0;
  label = "";
  vertical = false;
  lines: any = []
  show: boolean = this.data.base.visible || this.data.base.visible === undefined;

  mounted() {
    this.intensClass = this.prefixCssClass(this.data.base.styleClass)
    this.$ids.addComponent(this);
    this.vertical = this.data.orientation === in_proto.GuiElement.Orientation.Vertical;
    for (const line of this.data.lines) {
      let assembledLine = []
      for (const element of line.elements) {
        const fetchedElement = this.getElementData(element) || {};
        (fetchedElement as any).colspan = fetchedElement?.colspan || fetchedElement.base?.colspan || fetchedElement.base?.base?.colspan || fetchedElement.field?.base?.colspan;
        (fetchedElement as any).rowspan = fetchedElement?.rowspan || fetchedElement.base?.rowspan || fetchedElement.base?.base?.rowspan || fetchedElement.field?.base?.rowspan;
        (fetchedElement as any).type = element.type;
        (fetchedElement as any).alignment = fetchedElement?.alignment || fetchedElement.base?.alignment || fetchedElement.base?.base?.alignment || fetchedElement.field?.base?.alignment;
        assembledLine.push(fetchedElement);
      }
      this.lines.push(assembledLine)
    }
    // Find out which line has the most columns
    this.longestLine = this.lines.reduce((val, e) => {
      // Calculate the amount of columns in this line.
      // Each element counts as one or its colspan
      const length = e.reduce((val2, e2) => (e2.colspan ? val2 + e2.colspan : val2 + 1), 0);
      // Set the new value if it's larger
      return val > length ? val : length;
    }, 0);


    this.label = unescape(this.data.label);
    this.show = this.data.base.visible || this.data.base.visible === undefined;
  }

  getNewValue(data: in_proto.IFieldGroup) {
    this.intensClass = this.prefixCssClass(data.base.styleClass)
    this.show = data.base.visible || data.base.visible === undefined;
  }

  alignmentToCss(alignment: in_proto.GuiElement.Alignment, e): string {
    switch(alignment) {
      case in_proto.GuiElement.Alignment.Default:
      case in_proto.GuiElement.Alignment.Left:
      case in_proto.GuiElement.Alignment.Top:
        return "flex-start";
      case in_proto.GuiElement.Alignment.Center:
        return "center";
      case in_proto.GuiElement.Alignment.Right:
      case in_proto.GuiElement.Alignment.Bottom:
        return "flex-end"
    }
    return "flex-start"
    
  }

  isSeparator(type: in_proto.GuiElement.Type) {
    return type ===  in_proto.GuiElement.Type.ESeparator
  }

  get templateColumns() {
    return this.data.gridTemplateColumns.map(e => {
      if (!e.minMax) return "max-content"
      return `minmax(max-content, ${e.minMax}%)`
    }).join(" ")
  }
}

export default IntensFieldgroup;
</script>
<style lang="scss">
.filling-table {
  width: 100%;
}

.intens-fieldgroup-lines {
  display: grid;

  &:not(.vertical) > .first-item {
    grid-column-start: 1 !important;
  }

  &.vertical {
    grid-auto-flow: column;
    > .first-item {
      grid-row-start: 1;
    }
  }

  > * {
    display: flex;
    align-items: center;
  }

  > .fieldgroup-FieldGroup, > .fieldgroup-Container {
    display: initial;
  }
}

.intens-fieldgroup {
  padding: 0;
  &:not(.framed) {
    border: none;
  }
  &.framed {
    border: 1px solid black;
    border-radius: 3px;
    padding: 3px;
    margin: 2px !important;
  }
}

.label {
  font-size: 1.15em;
  font-weight: bold;
  padding: 0 2px;
  margin-left: 5px;
}
</style>
