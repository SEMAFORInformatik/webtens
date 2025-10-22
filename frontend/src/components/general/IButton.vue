<template functional>
  <div
    class="intens-button"
    v-tooltip="props.helptext"
    @click="(() => props.disabled || listeners.click())"
    :style="{
      background: props.backgroundColor,
      color: props.color,
      visibility: props.visible === undefined || props.visible ? 'visible' : 'hidden',
    }"
    :class="[{
      disabled: props.disabled,
      icon: props.shape == 'circle',
      square: props.shape == 'square',
    }, props.classes]"
    :id="props.id"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class IButton extends Vue {}
</script>

<style lang="scss">
.intens-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin: 1px;
  line-height: 1em;
  min-height: 1em;
  text-align: center;
  cursor: pointer;
  padding: 6.5px 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  background: linear-gradient(white, #f0f0f0);
  box-shadow: 1px 2px 5px #0000001a;

  &:active {
    background: linear-gradient(#f0f0f0, white);
  }

  &.disabled {
    background: #58595a;
    border-color: var(--background-color-dark) !important;
    cursor: default;
  }

  &.icon {
    border-radius: 4px;
    border: 2px solid var(--main-color-dark);
    background: var(--background-color);
    padding: 2px;
    margin: 0px 2px;

    &:hover {
      background: var(--hover-color-dark);
      border: 2px solid var(--border-color);
    }
  }

  &.square {
    width: 100%;
  }
}
</style>
