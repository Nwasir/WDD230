const requestURL = "json/data.json";
let cards = document.querySelector("#spotlights");
let count = 0;
let results = [];

function builddirectory(directory) {
  let section = document.createElement("section");
  let image = document.createElement("img");
  let name = document.createElement("h3");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let membership = document.createElement("p");
  // membership.classList.add("levels");
  let a = document.createElement("a");
  let link = document.createTextNode("visit site");

  image.setAttribute("src", directory.imageurl);
  image.setAttribute("alt", `Logo of ${directory.name}`);
  image.setAttribute("loading", "lazy");
  // Change the Content property to contain the member's full name, address, phone, email
  name.innerHTML = directory.name;
  address.innerHTML = directory.address;
  phone.innerHTML = directory.phone;
  membership.innerHTML = `${directory.membership} Membership`;
  a.append(link);
  a.title = "visit site";
  a.href = directory.website;

  section.append(image);
  section.append(name);
  section.append(address);
  section.append(phone);
  section.append(membership);
  section.append(a);
  section.setAttribute("id", `hide`);

  if (count == 7) {
    return;
  } else if (count <= 6) {
    if (directory.membership == "Gold") {
      section.setAttribute("class", "gold");
      results[count] = cards.appendChild(section);
      count = count + 1;
    } else if (directory.membership == "Silver") {
      section.setAttribute("class", "silver");
      results[count] = cards.appendChild(section);
      count = count + 1;
    }
  };
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject["directory"];
    members.forEach(builddirectory);

    let randomItem = results[Math.floor(Math.random() * [results.length - 1])];
    randomItem.setAttribute("id", "show");

    let randomItem2 = results[Math.floor(Math.random() * [results.length - 1])];
    while (randomItem == randomItem2) {
      randomItem2 = results[Math.floor(Math.random() * [results.length - 1])];
    };

    randomItem2.setAttribute("id", "show");
    let randomItem3 = results[Math.floor(Math.random() * [results.length - 1])];
    while (randomItem3 == randomItem2 || randomItem3 == randomItem) {
      randomItem3 = results[Math.floor(Math.random() * [results.length - 1])];
    };
    randomItem3.setAttribute("id", "show");
  });
