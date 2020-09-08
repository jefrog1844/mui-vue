<template>
  <form :class="[formClass, inline ? inlineClass : '']">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class MuiForm extends Vue {
  formClass: string = "mui-form";
  inlineClass = "mui-form--inline";
  @Prop({
    default: false,
    type: Boolean,
  })
  inline: boolean;
}
</script>
