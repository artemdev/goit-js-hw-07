// // Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// // Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// // Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// // Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


    
    //ВОПРОС как можно currentValue запомнить и использовать в двух функциях?
    


    const currentValue = () => parseInt(document.querySelector('#value').textContent);

    const decrement = (e) => {
        document.querySelector('#value').textContent =  (currentValue() > 0 ? currentValue() - 1 :  0);
    };

    const increment = (e) => {
        document.querySelector('#value').textContent =  (currentValue() + 1)
    };

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);


