const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function displayProphets() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
   // console.log(data);
   buildProphetCard(data);
  } else {
    throw Error(response.statusText);
  }
}

function buildProphetCard(data) {
  let nonUtah = data.prophets.filter(p => p.birthplace !== 'Utah')
    nonUtah.forEach(prophet => {
    let section = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let image = document.createElement('img');

    fullname = `${prophet.name} ${prophet.lastname}`

    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    p.innerHTML = `Date of Birth: ${prophet.birthdate} <br>place of Birth: <strong>${prophet.birthplace}</strong>`;
    
    image.setAttribute('src', prophet.imageurl );
    image.setAttribute('alt', `Picture of President ${fullname}`);
    image.setAttribute('loading', 'lazy')

    section.append(h2);
    section.append(p);
    section.append(image);

    cards.append(section);
  })
}
displayProphets();

/*fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
  });

const prophets = jsonObject["prophets"];

prophets.forEach(displayProphets);

function displayProphets(prophet) {
  //create elements to ass to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");

   // Change the textContent property of the h2 element to contain the prophet's full name
   h2.textContent = prophet.name + ' ' + prophet.lastname;

   /* Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
   ____.setAttribute('src', prophet.imageurl);
   ____.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
   ____.setAttribute('loading', 'lazy');*
 
   // Add/append the section(card) with the h2 element
   card.appendChild(h2);
   card.appendChild(portrait);
 
   /* Add/append the existing HTML div with the cards class with the section(card)
   document.querySelector('div.cards').appendChild(card);
}*/
