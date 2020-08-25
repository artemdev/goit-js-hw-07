// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const element = document.querySelector("#name-output");
const userInput = document.querySelector("#name-input");

const page = {
    defaultValue: "Незнакомец",

    updateView(e) {
        if (e.target.value === "") {
            element.textContent = this.defaultValue;
        }
        else {
            element.textContent = e.target.value;
        }
    }
};

element.textContent = page.defaultValue;
userInput.addEventListener("input", page.updateView.bind(page));


