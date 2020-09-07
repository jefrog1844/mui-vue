<template>
<button :class="`${muiClass}`" @mousedown="mousedown($event)" @mouseup="mouseup($event)">
    <slot></slot>
    <span class="mui-btn__ripple-container">
        <span class="mui-ripple" :style="{ width: width+'px', height: height+'px', left: left+'px', top: top+'px' }" :class="{'mui--is-visible': isAnimating, 'mui--is-animating': isAnimating}"></span>
    </span>
</button>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
    Prop
} from "vue-property-decorator";
@Component
export default class MuiButton extends Vue {
    muiClass: string = "mui-btn";
    isAnimating: boolean = false;
    offsetWidth: number = 0;
    offsetHeight: number = 0;
    offsetTop: number = 0;
    offsetLeft: number = 0;
    radius: number = 0;
    diameter: number = 0;
    width: number = 0;
    height: number = 0;
    left: number = 0;
    top: number = 0;
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
        const btn = < HTMLButtonElement > event.target;
        this.offsetWidth = btn.offsetWidth;
        this.offsetHeight = btn.offsetHeight;
        this.offsetTop = btn.offsetTop;
        this.offsetLeft = btn.offsetLeft;
        this.radius = Math.sqrt(
            this.offsetWidth * this.offsetWidth +
            this.offsetHeight * this.offsetHeight
        );
        this.diameter = this.radius * 2;

        this.width = this.diameter;
        this.height = this.diameter;
        this.left = Math.round(event.pageX - this.offsetLeft - this.radius);
        this.top = Math.round(event.pageY - this.offsetTop - this.radius);

        this.isAnimating = true;
    }

    mouseup(_event: MouseEvent) {
        setTimeout(() => {
            this.isAnimating = false;
        }, 100);
    }
}
</script>
