import { createApp } from 'vue';
import Test from './components/Room.vue';

import 'virtual:uno.css';

if (document.readyState === 'complete') {
  initApp();
}
else {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete')
      initApp();
  });
}

function initApp() {
  const rootEl = document.createElement('div');
  document.body.appendChild(rootEl);
  createApp(Test).mount(rootEl);
}
