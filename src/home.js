export default function loadHome() {
    const main = document.querySelector('#main')
    const title = document.createElement('h1');
    const description = document.createElement('div');
    const btn = document.createElement('button');

    title.classList.add('title');
    description.classList.add('description');
    btn.classList.add('btn');

    title.innerHTML = "Chu's";
    description.innerHTML = "An fine dining experience at the comfort of your own home";
    btn.innerHTML = "See Menu";

    main.appendChild(title);
    main.appendChild(description);
    main.appendChild(btn);
};