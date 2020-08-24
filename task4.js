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

