const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
const botoes = document.querySelectorAll(".keys");
const temas = document.getElementById("temas");

const allowedKeys = ["(", ")", "/", "*", "-", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", " %", " "];

input.addEventListener("keydown", (ev) => {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    ev.preventDefault();
    input.value += ev.key;
  }

  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  if (ev.key === "Enter") {
    calcula();
  }
});

botoes.forEach((keys) => {
  keys.addEventListener("click", () => {
    const valor = keys.dataset.value;
    input.value += valor;
  });
});

document.getElementById("equal").addEventListener("click", () => {
  calcula();
});

function calcula() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  resultInput.value = eval(input.value).toLocaleString("pt-br");
  resultInput.classList.remove("error");
}

document.getElementById("copy").addEventListener("click", (ev) => {
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied";
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
});

const limpa = document.getElementById("clear");
limpa.addEventListener("click", () => {
  input.value = "";
  resultInput.value = "";
  resultInput.classList.remove("error");
  input.focus();
});

temas.addEventListener("click", () => {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--body-color", "#f8f8ff");
    root.style.setProperty("--cor-fonte", "#1c1c1c");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--cor-primaria", "#2F4F4F");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--body-color", "#1c1c1c");
    root.style.setProperty("--cor-fonte", "#f8f8ff");
    root.style.setProperty("--border", "#888");
    root.style.setProperty("--cor-primaria", "#4dff92");
    main.dataset.theme = "dark";
  }
});
