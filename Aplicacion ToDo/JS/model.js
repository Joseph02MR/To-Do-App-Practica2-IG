class Model{
    constructor(){
        this.view = null;
        this. todos = JSON.parse(localStorage.getItem('todos'));
        if(!this.todos || this.todos.length < 1) {
            this.todos = [
               {
                   id:0,
                   title: 'Learn JS',
                   description: 'Watch JS Tutorials',
                   completed: false,
               } 
            ]
            this.currentId = 1;
        } else{
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }
        
    }

    save(){
        localStorage.setItem('todos',JSON.stringify(this.todos));
    }

    getTodos() {
        return this.todos;
    }

    findTodo(id) {
        
    }

    toggleCompleted(id) {
        
        this.save();
    }

    addTodo(title, description) {
        
        this.save();
        return {...todo};
    }

    removeTodo(id) {
        this.save(); 
    }
}