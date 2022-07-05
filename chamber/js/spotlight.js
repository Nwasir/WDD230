const requestURL = "json/data.json";
let cards = document.querySelector(".cards");
let count = 0;
let results = [];

function builddirectory(directory) {
  let section = document.createElement("section");
  section.classList.add("spotlights");
  let image = document.createElement("img");
  let name = document.createElement("h3");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let membership = document.createElement("p");
  membership.classList.add("levels");
  let a = document.createElement("a");
  let link = document.createTextNode("visit site");

  image.setAttribute("src", directory.imageurl);
  image.setAttribute("alt", `Logo of ${directory.name}`);
  image.setAttribute("loading", "lazy");
  // Change the textContent property to contain the member's full name, address, phone, email
  name.innerHTML = directory.name;
  address.innerHTML = directory.address;
  phone.innerHTML = directory.phone;
  membership.innerHTML = `${directory.membership} Member`;
  a.append(link);
  a.title = "visit site";
  a.href = directory.website;

  section.append(name);
  section.append(address);
  section.append(phone);
  section.append(membership);
  section.append(image);
  section.append(a);

  if (count == 6) {
    return;
  } else if (count <= 5) {
    if (directory.membership == "Gold") {
      results[count] = cards.append(section);
      count += 1;
    }
    if (directory.membership == "Silver") {
      results[count] = cards.append(section);

      count = count + 1;
    }
    section.setAttribute("id", `spotLight${count}`);
  }
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject["members"];
    members.forEach(builddirectory);

    let randomItem = results[Math.floor(Math.random() * [results.length - 1])];
    randomItem.style.display = "none";
    let randomItem2 = results[Math.floor(Math.random() * [results.length - 1])];
    while (randomItem == randomItem2) {
      randomItem2 = results[Math.floor(Math.random() * [results.length - 1])];
    }
    randomItem2.style.display = "none";
  });
