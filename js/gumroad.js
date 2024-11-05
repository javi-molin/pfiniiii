{
  const script = document.createElement("script");
  script.src = "https://assets.gumroad.com/packs/js/overlay-f8f9015a9aabefa09736.js";
  script.charset = "utf-8";
  document.head.appendChild(script);
    document.head.innerHTML += '<link rel="stylesheet" href="../../packs/css/overlay-63c6c0f7.css" />';

    const loaderScript = document.querySelector("script[src*='/js/gumroad.js']");
    loaderScript.dataset.stylesUrl = "../packs/css/design-99169f60.css";
}
