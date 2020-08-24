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