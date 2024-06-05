(() => {
  const mainElement = document.getElementsByTagName("main");
  console.log(mainElement[0]);

  const h1Element = document.createElement("h1");
  h1Element.innerText = "Hello World!";

  setTimeout(() => {
    mainElement[0].appendChild(h1Element);
  }, 1000);
})();
