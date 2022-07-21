// because webpack generated code does not go through babel
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

import '../css/app.pcss';

// Add JS Loaded class to the body
document.documentElement.classList.add('js-loaded');

// App main
const main = async () => {
  await import('./_vendors.js');
  await import('./_components.js');
};

// Execute async function
main().then(() => {});
