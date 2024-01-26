import path from 'node:path';
import { defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: path.join(__dirname, './src/components'),
        prefix: 'test',
      });
    });
  },

});
