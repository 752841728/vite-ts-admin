import type { App, Plugin } from "vue";

// 全局注册组件
export const withInstall = <T>(component: T) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name, component);
  };
  return component as T & Plugin;
};
