document.addEventListener("DOMContentLoaded", () => {
  // Step 1: Grab the DOM elements we need
  let nTD = document.getElementById("new-task-description");
  let createTaskForm = document.getElementById("create-task-form");
  let list = document.getElementById("tasks");

  //Step 2. Grab the value of the new-task-description field when a user clicks Create New Task
  createTaskForm.addEventListener("submit", function(e) {
    e.preventDefault()
    //Step 3. Take that value and add it to the Tasks div
    let value = nTD.value
    list.innerHTML += `<li>${value}</li>`;
    //Step 4. Reset the value of the new-task-description so that we can enter a new one
    nTD.value = ""
  })





});
