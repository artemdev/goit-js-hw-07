// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const element = document.querySelector("#validation-input");
const maxSymbols = Number(element.getAttribute("data-length"));


const checkSymbolsAmount = (e) => {
    if (e.target.value.length !== maxSymbols) {
        element.classList.remove("valid");
        element.classList.add("invalid");
    }

    if (e.target.value.length === maxSymbols) {
        element.classList.remove("invalid");
        element.classList.add("valid");
    }
}

element.addEventListener("input", checkSymbolsAmount);

