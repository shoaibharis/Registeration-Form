let clearAll = document.getElementsByClassName("clear-button");
let title = document.getElementsId("title");
let teamMembers = document.getElementById("teamMembers");
let idea = document.getElementById("idea");
let email = document.getElementById("email");
let cell = document.getElementById("cell");
let comments = document.getElementById("comments");

clearAll.addEventListener("click", () => {
  title.innerHTML = "";
  teamMembers.innerHTML = "";
  idea.innerHTML = "";
  email.innerHTML = "";
  cell.innerHTML = "";
  comments.innerHTML = "";
});

clearAll.onClick(() => {
  // clearAll.innerHTML = "";
  title.innerHTML = "";
  teamMembers.innerHTML = "";
  idea.innerHTML = "";
  email.innerHTML = "";
  cell.innerHTML = "";
  comments.innerHTML = "";
});
