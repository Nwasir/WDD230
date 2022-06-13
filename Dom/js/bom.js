
const input = document.querySelector("input");
const button = document.querySelector("#bt");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
  const myitem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myitem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "❌";
  list.appendChild(listItem);

  listBtn.addEventListener("click", () => {
      list.removeChild(listItem);
    });
  input.focus();
});

document.querySelector('#datemod').textContent = document.lastModified;
document.querySelector('#year').textContent = new Date().getFullYear(); 


