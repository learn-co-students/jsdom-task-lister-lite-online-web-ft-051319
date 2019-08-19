document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form')
  const taskDescription = document.getElementById('new-task-description')
  const taskList = document.getElementById('tasks')

    taskForm.addEventListener('submit', function(event) 
    {
      event.preventDefault();
      const taskTask = taskDescription.value;
      taskList.innerHTML += `<ul>${taskTask}</ul>`;
      taskDescription.value = ""
    })

});
