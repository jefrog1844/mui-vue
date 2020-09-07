<script lang="ts">
import Vue from "vue";
import { MuiAppbar } from "@/entry";
import { MuiPanel } from "@/entry";
import { MuiButton } from "@/entry";
 
export default Vue.extend({
  name: "ServeDev",
  components: {
    MuiAppbar,
    MuiPanel,
    MuiButton
  },
});
</script>

<template>
  <div id="app">
    <mui-panel>
    <mui-appbar>
      <table width="100%">
        <tr style="vertical-align:middle;">
          <td class="mui--appbar-height">Left Side</td>
          <td class="mui--appbar-height" align="right">Right Side</td>
        </tr>
      </table>
    </mui-appbar>
    <mui-button>Click</mui-button><mui-button variant="flat" size="large" color="dark">Click2</mui-button>
    </mui-panel>
  </div>
</template>
