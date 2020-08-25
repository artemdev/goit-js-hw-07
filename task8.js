// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");
const removeBtn = document.querySelector('button[data-action="destroy"]');
const renderBtn = document.querySelector('button[data-action="render"]');
const input = document.querySelector('#controls input');

const random_bg_color = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

const destroyBoxes = () => {
    window.boxes.innerHTML = '';
};

const createBoxes = () => {
    for (let i = 0; i < input.value; i++) {
        const div = document.createElement("div");
        const divSize = 30 + (i * 10);
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.backgroundColor = random_bg_color();
        boxes.append(div);
    }
};


renderBtn.addEventListener("click", createBoxes);
removeBtn.addEventListener("click", destroyBoxes);




