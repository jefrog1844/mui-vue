import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const MuiVue: { install: InstallFunction };
export default MuiVue;

export const MuiVueSample: VueConstructor<Vue>;
