//last modified
document.querySelector('#datemod').textContent = document.lastModified;

//get current time
document.querySelector('#year').textContent = new Date().getFullYear(); 

// select the elements to manipulate (output to)
const datefield = document.querySelector("#currentDate");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

//get week day

let day = now.getDay();
let events = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'

if (day == 1 || day == 2) {
	document.querySelector('#banner').innerHTML = events;
}

