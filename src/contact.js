export default function loadContact() {
    const main = document.querySelector('#main');
    const container = document.createElement('div');
    const address = document.createElement('div');
    const map = document.querySelector('.map');
    const hours = document.createElement('div');
    const contact = document.createElement('div');

    const html = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.656607568989!2d139.8085117150878!3d35.710067035997696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2sTokyo%20Skytree!5e0!3m2!1sen!2sjp!4v1673166395529!5m2!1sen!2sjp"

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

    //contruct map
    map.style.display = 'grid';
    map.style.gridArea = 'map';

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