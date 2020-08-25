// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const updateValue = {
    value: Number(document.querySelector('#value').textContent),
    increment() {
        this.value += 1;
        document.querySelector('#value').textContent = this.value;
        this.writeResult();
    },
    decrement() {
        this.value > 0 ? this.value -= 1 : this.value = 0;
        this.writeResult();
    },
    writeResult() {
        document.querySelector('#value').textContent = this.value;
    }
};


const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');


incrementBtn.addEventListener("click", updateValue.increment.bind(updateValue));
decrementBtn.addEventListener("click", updateValue.decrement.bind(updateValue));

