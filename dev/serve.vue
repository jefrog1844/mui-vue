<script lang="ts">
import Vue from "vue";
import { MuiAppbar } from "@/entry";
import { MuiPanel } from "@/entry";
import { MuiButton } from "@/entry";
import { MuiContainer } from "@/entry";

export default Vue.extend({
  name: "ServeDev",
  components: {
    MuiAppbar,
    MuiPanel,
    MuiButton,
    MuiContainer,
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
      <mui-button>Click</mui-button>
      <mui-button variant="flat" size="large" color="dark">Click2</mui-button>
    </mui-panel>
  </mui-container>
</template>
