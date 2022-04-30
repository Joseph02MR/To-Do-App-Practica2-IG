import AddTodo from './components/add-todo.js';
export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.AddTodoForm = new AddTodo();
        this.AddTodoForm.onClick((title,description) => this.addTodo(title,description));
    }
  
    render() {
        const todos = this.model.getTodos();
        todos.forEach((todo) => this.createRow(todo));
    }

    setModel(model){
        this.model = model;
    }

    toggleCompleted(id){
        this.model.toggleCompleted(id);
    }

    addTodo(title, description){
        const todo = this.model.addTodo(title, description);
        this.createRow(todo);
    }

    removeTodo(id) {
        this.model.removeTodo(id);
        document.getElementById(id).remove();
    }

    createRow(todo){
        const row = table.insertRow();
        row.setAttribute('id', todo.id);
        row.innerHTML = `
            <td> ${todo.title} </td> 
            <td> ${todo.description} </td> 
            <td class="text-center">
                
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        const checkbox = document.createElement('input');
         checkbox.type= 'checkbox';
        checkbox.checked=todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        row.children[2].appendChild(checkbox);
    

        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger', 'mb-1');
        removeButton.innerHTML = '<i class="fa fa-trash"></i>';
        removeButton.onclick = () => this.removeTodo(todo.id);
        row.children[3].appendChild(removeButton);
    }
}