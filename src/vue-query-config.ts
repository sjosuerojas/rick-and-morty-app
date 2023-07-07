import type { App } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

export const VueQuery = (app: App<Element>) => {
  VueQueryPlugin.install(app, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          cacheTime: 1000 * 100
        }
      }
    }
  });
};
