document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.querySelector("form#create-task-form");
  submitForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event.innerHTML);
    let content = document.querySelector("input#new-task-description");
    let taskList = document.querySelector("ul#tasks");
    let list = document.createElement("li");
    list.textContent = content.value;
    taskList.appendChild(list);
  });
});
