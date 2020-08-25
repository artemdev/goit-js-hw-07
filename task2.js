// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

let ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const root = document.querySelector("ul#ingredients")

//decorate with heading
const heading = document.createElement("h2")
heading.innerText = "Ingredients";
root.appendChild(heading);

//create elements
ingredients = ingredients.reduce((acc, element) => {
    let $li = document.createElement("li");
    $li.textContent = element;
    acc.push($li);
    return acc;
}, []);

//push elements
root.append(...ingredients);