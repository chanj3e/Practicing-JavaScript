let addBtn = document.querySelector(".add");
let tasksContainer = document.querySelector(".tasks");
let inputTxt = document.querySelector(".input");
// check for previos tasks
if (window.localStorage.getItem("tasks")) {
  tasksContainer.innerHTML = window.localStorage.getItem("tasks");
}
// always focus on input
inputTxt.focus();
// creating div to contain elements
let taskDiv = document.createElement("div");
taskDiv.className = "task-div";
// declaring delete button
let deleteBtn = document.createElement("button");
deleteBtn.className = "delete";
deleteBtn.innerText = "Delete";
// selecting buttons to loop in them and delete
let del = document.querySelectorAll(".delete");
let pValue = document.createElement("p");
// addind the desired element by sumbiting
addBtn.addEventListener("click", function () {
  if (inputTxt.value.length > 0) {
    pValue.innerText = inputTxt.value;
    // adding the element to the new div
    taskDiv.append(pValue);
    // adding the delete button to the new div
    taskDiv.append(deleteBtn);
    // adding the new div to the main div
    tasksContainer.append(taskDiv);
    // adding divs value to local storage
    window.localStorage.setItem("tasks", tasksContainer.innerHTML);
  }
});
// Remove whatever i want
del.forEach((button) => {
  button.addEventListener("click", () => {
    // removing the botton parent
    button.parentElement.remove();
    // reassing divs value to local storage
    window.localStorage.setItem("tasks", tasksContainer.innerHTML);
  });
});
