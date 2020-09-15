<template>
<div class="mui-textfield">
    <input :type="type" :name="name" :placeholder="hint" :value="modelValue" @input="(event) => $emit('update:modelValue', $event.target.value)">
    <label tabindex="-1">{{label}}</label>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
//import Emit from 'vue-property-decorator';

import {
    Prop
} from "vue-property-decorator";

@Component
export default class MuiInput extends Vue {
    @Prop(String) name;
    @Prop(String) type;
    @Prop(String) label;
    @Prop(String) hint;
    @Prop(String) modelValue;

    //@Emit()
    update() {

    }
}
</script>
