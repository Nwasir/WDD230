const requestURL = '../json/temple.json';
const cards = document.querySelector('.card');

async function displaytemple() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    buildTemple(data);
  } else {
  throw Error(response.statusText);
  }
}

function buildTemple(data) {  
    data.temple.forEach(temple => {
    let section = document.createElement('section');
    let image = document.createElement('img');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');    
    let a = document.createElement('a');
    let link = document.createTextNode('details');

    
    image.setAttribute('src', temple.imageurl );
    image.setAttribute('alt', `logo of ${temple.name}`);
    image.setAttribute('loading', 'lazy');
    name.innerHTML = temple.name;
    address.innerHTML = temple.address;
    phone.innerHTML = temple.phone;   
    a.append(link);
    a.title = 'Details';
    a.href = temple.website;

    section.append(image);
    section.append(name);
    section.append(address);
    section.append(phone);    
    section.append(a);

    cards.append(section);
  })
}
displaytemple();

