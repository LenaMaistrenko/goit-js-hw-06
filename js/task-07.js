const fontSizeControl = document.querySelector("#font-size-control");
const textItem = document.querySelector("#text");
textItem.style.fontSize = "40px"; //min="16" max="96"
const fontResize = () => {
  textItem.style.fontSize = fontSizeControl.value + "px";
};

fontSizeControl.addEventListener("input", fontResize);

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text
//обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
