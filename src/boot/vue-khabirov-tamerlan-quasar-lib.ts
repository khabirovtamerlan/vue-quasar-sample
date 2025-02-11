import { boot } from 'quasar/wrappers';
import VueQuasarLib from 'vue-khabirov-tamerlan-quasar-lib';
import 'vue-khabirov-tamerlan-quasar-lib/dist/vue-khabirov-tamerlan-quasar-lib.css';
import type { App } from 'vue'

export default boot(({ app }: { app: App }) => {
  app.use(VueQuasarLib);
});
