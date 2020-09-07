<template>
    <div class="mui-appbar">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class MuiAppbar extends Vue {
}
</script>
