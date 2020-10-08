
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo');

todoButton.addEventListener('click', addItem);
todoList.addEventListener('click', deleteCheck);
filterTodo.addEventListener('click', filterTodos);


function addItem(e){
    e.preventDefault();
    
    // <div class="todo">
    //     <li></li>
    //         <button>Delete</button>
    //         <button>Checked</button>    
    // </div>
    
const todoDiv = document.createElement('div');
todoDiv.className = 'todo';

const newTodo = document.createElement('li');
newTodo.className = 'list-item';
newTodo.innerText=todoInput.value;

todoDiv.appendChild(newTodo);

const completedTodo = document.createElement('button');
completedTodo.innerHTML = '<a class="fas fa-check"></a>';
completedTodo.classList.add('btn-complete');

const deleteTodo = document.createElement('button');
deleteTodo.innerHTML = '<a class="fas fa-trash"></a>';
deleteTodo.classList.add('btn-trash');

todoDiv.appendChild(completedTodo);
todoDiv.appendChild(deleteTodo);

console.log(todoDiv);

todoList.appendChild(todoDiv);

todoInput.value='';
}

function deleteCheck(e){
    console.log(e.target);
    const item=e.target;
    
    if(item.classList[0] === 'btn-trash') {
    const todo = item.parentElement; 
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){    
        console.log("going here ")
        todo.remove();
        })
    }

    if(item.classList[0] === 'btn-complete') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodos(e){
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){

            case 'all':
            // todo.style.display="flex";
            break;

            case 'complete' :
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;

            case 'uncomplete' :
            if(!todo.classList.contains('completed')){
                todo.style.display = 'flex';
            }
            else {
                todo.style.display = 'none';
            }
            break;

        }
    })

}

