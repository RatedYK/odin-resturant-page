export default function loadMenu() {
    const main = document.querySelector('#main');
    const starterMenu = document.createElement('h2');
    const mainMenu = document.createElement('h2');
    const dessertMenu = document.createElement('h2');
    

    //make 3 <br> so that the starter can be seen and not hidden by the banner
    for (let i = 0; i < 3; i++) {
        main.appendChild(document.createElement('br'));
    }

    //construct starter menu
    main.appendChild(starterMenu);
    const starterItems = ['Asparagus wrapped proscuiito', 'Full cheese platter'];
    const starterItemDescriptions = ['fresh organic asparagus, proscuitto smoked in the green hills of italy',
                                    '7 varieties of cheeses from blue, gouda, cheddar, mozerella, camembert, feta and goat'];
    
    const starterList = document.createElement('ul');
    starterItems.forEach((item, i) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        li.textContent = item;
        span.textContent = starterItemDescriptions[i];
        
        starterList.appendChild(li);
        starterList.appendChild(span);
    })



}