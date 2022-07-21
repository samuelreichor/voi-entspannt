const asynchronicallyImportScript = (cssSelector, path) => {
  if (document.querySelectorAll(cssSelector).length) {
    import(path)
        .then(component => component.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
  }
};

// asynchronicallyImportScript('header', '../../templates/_components/header/header.js');
