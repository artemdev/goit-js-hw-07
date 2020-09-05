// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

//create elements
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
].reduce((acc, element) => {
    let $li = document.createElement("li");
    $li.textContent = element;
    acc.push($li);
    return acc;
}, []);;


const root = document.querySelector("ul#ingredients")

//decorate with heading
const heading = document.createElement("h2")
heading.innerText = "Ingredients";
root.appendChild(heading);


//push elements
root.append(...ingredients);