<template>
  <button :class="`${muiClass}`">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator' 
@Component
export default class MuiButton extends Vue {
  muiClass: string = "mui-btn";
  @Prop({ default: 'primary', type: String }) color: string;
  @Prop({ default: 'flat', type: String }) variant: string;
  @Prop({ default: '', type: String }) size: string;

  mounted() {
    this.muiClass = this.muiClass + " mui-btn--"+this.color + " mui-btn--"+this.variant;
    if(this.size) {
      this.muiClass = this.muiClass + " mui-btn--"+ this.size;
    }
  }

}
</script>
