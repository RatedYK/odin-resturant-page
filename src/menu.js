export default function loadMenu() {
    const main = document.querySelector('#main');
    const starterMenu = document.createElement('h2');
    const mainMenu = document.createElement('h2');
    const dessertMenu = document.createElement('h2');
    

    //make a <br> so that the starter can be seen and not hidden by the banner
    for (let i = 0; i < 20; i++) {
        main.appendChild(document.createElement('br'));
    }

    //construct starter menu
    starterMenu.innerHTML = "Hors d'oeuvre";
    const starterItems = ['Asparagus wrapped proscuiito', 'Full cheese platter'];
    const starterItemDescriptions = ['fresh organic asparagus, proscuitto smoked in the green hills of italy',
                                    '7 varieties of cheeses from blue, gouda, cheddar, mozerella, camembert, feta and goat'];
    
    const starterList = document.createElement('ul');
    starterItems.forEach((item, i) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        li.textContent = item;
        li.classList.add('item');
        span.textContent = starterItemDescriptions[i];
        
        starterList.appendChild(li);
        starterList.appendChild(span);
    });
    main.appendChild(starterMenu);
    main.appendChild(starterList);


    //construct main menu
    mainMenu.innerHTML = 'Main Prestige';
    const mainItems = ['The Risotto', 'The Fettucine', 'The Bolognese', 'The Steak'];
    const mainItemDescriptions = ['a creamy risotto, cooked in white wine, and plenty of mushrooms',
                                    'served in the most irresistable white sauce, chicken and seasonal mushrooms',
                                'made in a classic italian style, a rich tomato sauce accompanied with the highest grade of minced beef from Japan',
                            'the favourite amongest meat eaters, the classic steak seared in butter and herbs to provide the most savoury of all tastes'];
    
    const mainList = document.createElement('ul');
    mainItems.forEach((item, i) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        li.textContent = item;
        li.classList.add('item');
        span.textContent = mainItemDescriptions[i];
        
        mainList.appendChild(li);
        mainList.appendChild(span);
    });
    main.appendChild(mainMenu);
    main.appendChild(mainList);

    //construct dessert menu
    dessertMenu.innerHTML = 'Dessert';
    const dessertItems = ["Today's Ice Cream", 'Affogato', 'Chocolate with coffee'];
    const dessertItemDescriptions = ['experience the taste of today with an handpicked selection of flavours',
                                    'premium vanilla gelato from germany, soaked in a steaming roasted espresso from the brewers at italy',
                                    'just some chocolate with coffee haha'];
    
    const dessertList = document.createElement('ul');
    dessertItems.forEach((item, i) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        li.textContent = item;
        li.classList.add('item');
        span.textContent = dessertItemDescriptions[i];
        
        dessertList.appendChild(li);
        dessertList.appendChild(span);
    });
    main.appendChild(dessertMenu);
    main.appendChild(dessertList);


 //make a <br> so that the end has some space before footer
 for (let i = 0; i < 1; i++) {
    main.appendChild(document.createElement('br'));
}


}