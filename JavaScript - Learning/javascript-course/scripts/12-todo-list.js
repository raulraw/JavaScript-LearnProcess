const todoList = [{
  name: 'make dinner', 
  dueDate: '2022-12-22'},
  { name: 'wash dishes',
    dueDate:'2022-12-22'}];

    document.querySelector('.js-add-todo-button').addEventListener('click', () => {
      addTodo();
    });

function addTodo() {
  
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate
  });
  
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

function handleEnter(event) {
  if(event.key === 'Enter') {
    addTodo();
  }
}

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
       <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">
        Delete
      </button>
      
    `;
    todoListHTML = todoListHTML + html;
  });


  /*for(let i = 0; i < todoList.length; i++) { 
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
       <div>${dueDate}</div>
      <button class="delete-todo-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">
        Delete
      </button>
      
    `;
    todoListHTML = todoListHTML + html; 
  }
 */ 
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });

}

renderTodoList();

