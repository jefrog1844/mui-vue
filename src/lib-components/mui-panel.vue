<template>
  <div class="mui-panel">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class MuiPanel extends Vue {
}
</script>
