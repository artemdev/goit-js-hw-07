// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const element = document.querySelector("#name-output");
const userInput = document.querySelector("#name-input");
const defaultValue = "Незнакомец";
  

const insertText =  (e) => {
    if (e.target.value === "") {
        element.textContent = defaultValue;
    }
    else {
        element.textContent = e.target.value;
    }
};

element.textContent = defaultValue;
userInput.addEventListener("input", insertText);


