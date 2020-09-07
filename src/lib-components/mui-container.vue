<template>
    <div :class="`${muiClass}`">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator' 

@Component
export default class MuiContainer extends Vue {
    muiClass:string = "mui-contaner";
    @Prop({ default: 'false', type: Boolean }) fluid: boolean;

    mounted() {
        if(this.fluid == true) {
            console.log("using a fluid container!!!!!!!!!!!!!!!");
            this.muiClass = "mui-container-fluid";
        }
    }
}
</script>
