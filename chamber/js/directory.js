const requestURL = 'json/data.json';
const cards = document.querySelector('.card');

async function displaydirectory() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    builddirectory(data);
  } else {
  throw Error(response.statusText);
  }
}

function builddirectory(data) {  
    data.directory.forEach(directory => {
    let section = document.createElement('section');
    let image = document.createElement('img');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let membership = document.createElement('p');
    let a = document.createElement('a');
    let link = document.createTextNode('visit site');

    
    image.setAttribute('src', directory.imageurl );
    image.setAttribute('alt', `logo of ${directory.name}`);
    image.setAttribute('loading', 'lazy');
    name.innerHTML = directory.name;
    address.innerHTML = directory.address;
    phone.innerHTML = directory.phone;
    membership.innerHTML = directory.membership;
    a.append(link);
    a.title = 'visit site';
    a.href = directory.website;

    section.append(image);
    section.append(name);
    section.append(address);
    section.append(phone);
    section.append(membership);
    section.append(a);

    cards.append(section);
  })
}
displaydirectory();

