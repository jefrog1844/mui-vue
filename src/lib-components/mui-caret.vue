<template>
  <span :class="[caretClass, direction != null ? directionClass + direction : '']"></span>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class MuiCaret extends Vue {
  @Prop({
    default: null,
    type: String,
  })
  direction: string;

  caretClass: string = "mui-caret";
  directionClass: string = "mui-caret--";
}
</script>
