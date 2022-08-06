// console.info(2);
// console.debug(23 + 2);
// console.warn(6 * 3 - 10);
// console.error("app started");

var myName = "Dorin";
var age = 29;
// console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 30;
// console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 31;
// console.info("My name is " + myName + ", I'm " + age + " years old.");

var jobTitle = "<span>Web Developer</span>";
var mottoElement = document.getElementById("motto");

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

// mottoElement.innerHTML = mottoElement.innerHTML + " & " + jobTitle;
mottoElement.innerHTML += " & " + jobTitle;

function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

var activePage = "home";

function showPage(nextPage) {
  console.warn("change", activePage, "to", nextPage);
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}`).classList.add("active");
  activePage = nextPage;
}

function iniEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      var id = e.target.getAttribute(`data-page`);
      console.warn("click pe menu", id, e.target.matches("a"));
      if (e.target.matches("a")) {
        showPage(id);
      }
    });
}

showPage(activePage);
iniEvents();

function displaySkills(skills) {
  var ul = document.querySelector("#skills ul");

  skills.sort(function (a, b) {
    //return a.endorcement - b.endorcement;
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return -1;
    }
  });
  console.info(skills);
  for (var i = 0; i < skills.length; i++) {
    ul.innerHTML += `<li>${skills[i].name} - ${skills[i].endorcement} </li>`;
  }
}

function loadSkills() {
  fetch("skills.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (skills) {
      displaySkills(skills);
    });
}
loadSkills();
