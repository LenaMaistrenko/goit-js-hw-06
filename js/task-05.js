const userNameInput = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");
console.log(userNameInput, spanName);
userNameInput.addEventListener("input", (event) => {
  //spanName.textContent = event.target.value;
  console.log(spanName.textContent);
  event.target.value === ""
    ? (spanName.textContent = "Anonymous")
    : (spanName.textContent = event.target.value);
});
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
