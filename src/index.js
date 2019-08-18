document.addEventListener("DOMContentLoaded", (e) => {
  // your code here

  const submit = document.querySelector('input[type="submit"');

  submit.addEventListener("click", add_item);

  function add_item(e){
    e.preventDefault();
    let new_item = document.querySelector("#new-task-description");
    const list_container = document.querySelector("#tasks");
    let li = document.createElement('li');
    li.textContent = new_item.value
    list_container.appendChild(li);
  }
});
