// Async load LazySizes and it's plugins
if (document.querySelectorAll('.lazyload').length) {
  const LazySizes = import('lazysizes');

  // fix issue when image is already in viewport and content is not loaded yet
  document.addEventListener('DOMContentLoaded', () => {
    LazySizes.init();
  });

  document.addEventListener('lazyloaded', e => {
    const target = e.target.parentNode;
    if (target && target.style.backgroundColor) {
      setTimeout(() => {
        target.style.backgroundColor = 'transparent';
      }, 1000);
    }
  });
}
