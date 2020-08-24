const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

let gallery = document.querySelector('#gallery');

// SOLUTION WITH REDUCE
const imagesNodes = images.reduce((acc, element) => {
    // console.log(element);
    const $li = document.createElement('li');
    let image = document.createElement('img');
    image.setAttribute('src', element.url);
    image.setAttribute('alt', element.alt);
    $li.insertAdjacentHTML('afterbegin', image.outerHTML);
    acc.push($li);
    return acc;
}, []);

// console.log(imagesNodes);
gallery.append(...imagesNodes);
