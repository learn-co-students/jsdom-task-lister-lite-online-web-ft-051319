document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const tasks = document.querySelector("#tasks");

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let li = document.createElement('li');
    li.innerHTML = form.elements[0].value
    tasks.appendChild(li)
  })
});
