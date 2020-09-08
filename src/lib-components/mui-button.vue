<template>
  <button
    :class="`${muiClass}`"
    @mousedown="mousedown($event)"
    @mouseup="mouseup($event)"
    :disabled="disabled ? true : false"
  >
    <slot></slot>
    <span class="mui-btn__ripple-container">
      <span
        class="mui-ripple"
        :style="styleObject"
        :class="{'mui--is-visible': isAnimating, 'mui--is-animating': isAnimating}"
      ></span>
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
  isAnimating: boolean = false;
  styleObject = {
    width: '',
    height: '',
    left: '',
    top: '',
  };
  @Prop({
    default: false,
    type: Boolean,
  })
  disabled: boolean;
  @Prop({
    default: "primary",
    type: String,
  })
  color: string;
  @Prop({
    default: "flat",
    type: String,
  })
  variant: string;
  @Prop({
    default: "",
    type: String,
  })
  size: string;

  mounted() {
    // add color and variant to class
    this.muiClass =
      this.muiClass + " mui-btn--" + this.color + " mui-btn--" + this.variant;

    // add size to class
    if (this.size) {
      this.muiClass = this.muiClass + " mui-btn--" + this.size;
    }
  }

  mousedown(event: MouseEvent) {
    var btn, offsetWidth, offsetHeight, offsetTop, offsetLeft, radius, diameter;
    btn = <HTMLButtonElement>event.target;
    offsetWidth = btn.offsetWidth;
    offsetHeight = btn.offsetHeight;
    offsetTop = btn.offsetTop;
    offsetLeft = btn.offsetLeft;
    radius = Math.sqrt(offsetWidth * offsetWidth + offsetHeight * offsetHeight);
    diameter = radius * 2;

    this.styleObject.width = diameter + "px";
    this.styleObject.height = diameter + "px";
    this.styleObject.left =
      Math.round(event.pageX - offsetLeft - radius) + "px";
    this.styleObject.top = Math.round(event.pageY - offsetTop - radius) + "px";

    this.isAnimating = true;
  }

  mouseup(_event: MouseEvent) {
    setTimeout(() => {
      this.isAnimating = false;
    }, 100);
  }
}
</script>
