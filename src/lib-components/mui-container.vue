<template>
  <div :class="[fluid ? fluidClass : containerClass]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class MuiContainer extends Vue {
  containerClass: string = "mui-container";
  fluidClass: string = "mui-container-fluid";
  @Prop({
    default: false,
    type: Boolean,
  })
  fluid: boolean;
}
</script>
