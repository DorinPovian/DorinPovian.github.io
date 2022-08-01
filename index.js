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
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}
function show(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

function hideAll() {
  hide("home");
  hide("skills");
  hide("projects");
  hide("languages");
}

function showPage(id) {
  console.warn("pls show me this page", id);
  hideAll();
  show(id);
}
showPage("home");
