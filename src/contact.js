export default function loadContact() {
    const main = document.querySelector('#main');
    const container = document.createElement('div');
    const address = document.createElement('div');
    const hours = document.createElement('div');
    const contact = document.createElement('div');

    //setup the container
    main.appendChild(container);
    container.setAttribute('id', 'contactContainer');
    container.appendChild(address);
    container.appendChild(hours);
    container.appendChild(contact);

    //construct address
    address.classList.add('address');
    const addressTitle = document.createElement('h2');
    const addressList = document.createElement('ul');
    const addressInfo = ['1-Chome-1-2 Oshiage',
                        'Sumida City, Tokyo',
                        '131-0045'];
    
    addressTitle.innerHTML = 'Address';

    addressInfo.forEach((line) => {
        const li = document.createElement('li');
        li.textContent = line;
        li.classList.add('info');

        addressList.appendChild(li);
    })

    address.appendChild(addressTitle);
    address.appendChild(addressList);

    //construct hours
    hours.classList.add('hours');
    const hoursTitle = document.createElement('h2');
    const hoursList = document.createElement('ul');
    const hoursInfo = ['Monday: 11:00 - 20:00',
                        'Tuesday: 11:00 - 20:00',
                        'Wednesday: 11:00 - 20:00',
                        'Thursday: 11:00 - 20:00',
                        'Friday: 11:00 - 20:00',
                        'Saturday: Closed',
                        'Sunday: Closed'];
    
    hoursTitle.innerHTML = 'Hours';

    hoursInfo.forEach((line) => {
        const li = document.createElement('li');
        li.textContent = line;
        li.classList.add('info');

        hoursList.appendChild(li);
    });

    hours.appendChild(hoursTitle);
    hours.appendChild(hoursList);

    //construct contact

    contact.classList.add('contact');
    const contactTitle = document.createElement('h2');
    const contactList = document.createElement('ul');
    const contactInfo = ['Email: chus@resturants.com',
                        'Phone: 012-3456-7890'];
    
    contactTitle.innerHTML = 'Contact Us';

    contactInfo.forEach((line) => {
        const li = document.createElement('li');
        li.textContent = line;
        li.classList.add('info');

        contactList.appendChild(li);
    })

    contact.appendChild(contactTitle);
    contact.appendChild(contactList);


}