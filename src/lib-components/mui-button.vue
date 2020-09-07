<template>
  <button :class="`${muiClass}`" @mousedown="mousedown($event)" @mouseup="mouseup($event)" ref="btn">
    <slot></slot>
    <span class="mui-btn__ripple-container" ref="container">
      <span class="mui-ripple" ref="ripple" :style="{ width: width, height: height, left: left, top: top }" :class="{'mui--is-visible': isAnimating, 'mui--is-animating': isAnimating}"></span>
    </span>
  </button>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component
export default class MuiButton extends Vue {
  muiClass: string = "mui-btn";
  isAnimating:boolean = false;
  _btn: HTMLButtonElement;
  offsetWidth:any;
  offsetHeight:any;
  offsetTop:any;
  offsetLeft: any;
  radius: any;
  diameter:any;
  width:any;
  height:any;
  left: any;
  top: any;
  @Prop({ default: "primary", type: String }) color: string;
  @Prop({ default: "flat", type: String }) variant: string;
  @Prop({ default: "", type: String }) size: string;

  mounted() {
    this.muiClass =
      this.muiClass + " mui-btn--" + this.color + " mui-btn--" + this.variant;
    if (this.size) {
      this.muiClass = this.muiClass + " mui-btn--" + this.size;
    }
    this._btn = this.$refs.btn;
  }

  mousedown(event: MouseEvent) {
    this.offsetWidth = this._btn.offsetWidth;
    this.offsetHeight = this._btn.offsetHeight;
    this.offsetTop = this._btn.offsetTop;
    this.offsetLeft = this._btn.offsetLeft;
    this.radius = Math.sqrt(this.offsetWidth * this.offsetWidth + this.offsetHeight * this.offsetHeight);
    this.diameter = this.radius * 2 + 'px';

    this.width = this.diameter;
    this.height = this.diameter;
    this.left = Math.round(event.pageX - this.offsetLeft - this.radius) + 'px';
    this.top = Math.round(event.pageY - this.offsetTop - this.radius) + 'px';

    this.isAnimating = true;

  }

  mouseup(event: MouseEvent) {
    setTimeout(() => {
        this.isAnimating = false;
      }, 100);
      
  }
}
</script>
