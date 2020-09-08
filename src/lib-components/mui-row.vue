<template>
  <div class="mui-row">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class MuiRow extends Vue {
}
</script>
