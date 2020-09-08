<script lang="ts">
import Vue from "vue";
import { MuiAppbar } from "@/entry";
import { MuiPanel } from "@/entry";
import { MuiButton } from "@/entry";
import { MuiContainer } from "@/entry";
import { MuiRow } from "@/entry";
import { MuiForm } from "@/entry";
import { MuiDivider } from "@/entry";
import { MuiCaret } from "@/entry";

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
    MuiCaret
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
      <mui-form>this is a mui form
        <mui-caret direction="right"></mui-caret>
        <mui-caret direction="left"></mui-caret>
        <mui-caret direction="up"></mui-caret>
        <mui-caret direction="down"></mui-caret>
      </mui-form>
      <mui-divider></mui-divider>
      <mui-form inline>this is an inline mui form</mui-form>
    </mui-panel>
  </mui-container>
</template>
