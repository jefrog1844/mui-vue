<script lang="ts">
import Vue from "vue";
import {
    MuiAppbar
} from "@/entry";
import {
    MuiPanel
} from "@/entry";
import {
    MuiButton
} from "@/entry";
import {
    MuiContainer
} from "@/entry";
import {
    MuiRow
} from "@/entry";
import {
    MuiForm
} from "@/entry";
import {
    MuiDivider
} from "@/entry";
import {
    MuiCaret
} from "@/entry";
import {
    MuiInput
} from "@/entry";

export default Vue.extend({
    name: "ServeDev",
    components: {
        MuiAppbar,
        MuiPanel,
        MuiButton,
        MuiContainer,
        MuiRow,
        MuiForm,
        MuiDivider,
        MuiCaret,
        MuiInput,
    },
    data() {
        return {
            first: "",
            last: "",
            pwd: "",
            age: "",
            address: "",
            zip: "",
        };
    },
});
</script>

<template>
<mui-container fluid>
    <mui-panel>
        <h1>Appbar</h1>
        <mui-appbar>
            <table width="100%">
                <tr style="vertical-align:middle;">
                    <td class="mui--appbar-height">Left Side</td>
                    <td class="mui--appbar-height" align="right">Right Side</td>
                </tr>
            </table>
        </mui-appbar>
    </mui-panel>
    <mui-panel>
        <h1>Buttons</h1>
        <mui-button disabled>disabled</mui-button>
        <mui-button variant="raised" size="large" color="dark">Raised</mui-button>
    </mui-panel>
    <mui-panel>
        <h1>Form</h1>
        <h2>Standard Form</h2>
        <mui-form>
            <mui-caret direction="right"></mui-caret>
            <mui-caret direction="left"></mui-caret>
            <mui-caret direction="up"></mui-caret>
            <mui-caret direction="down"></mui-caret>
            <mui-input type="text" name="first" hint="enter first name" label="First Name" v-model="first"></mui-input>
            <mui-input type="text" hint="enter last name" label="Last Name" v-model="last"></mui-input>
            <mui-input type="password" hint="enter password" label="Password" v-model="pwd"></mui-input>
            <mui-input type="number" hint="enter age" label="Age" v-model="age"></mui-input>
            <p>First Name: {{first}}</p>
            <p>Last Name: {{last}}</p>
            <p>Age: {{age}}</p>
        </mui-form>
        <mui-divider></mui-divider>
        <h2>Inline Form</h2>
        <mui-form inline>
            <mui-input type="text" hint="enter address" label="Address" v-model="address"></mui-input>
            <mui-input type="text" hint="enter zip code" label="Zip Code" v-model="zip"></mui-input>
        </mui-form>
    </mui-panel>
</mui-container>
</template>
