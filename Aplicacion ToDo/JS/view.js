export default class View {
    constructor() {

    }

    setModel(model){

    }

    render() {
        const todos = this.model.getTodos();
        todos.forEach((todo) => this.createRow(todo));
    }

    addTodo(title, description) {

    }

    createRow(todo) {
        
    }
}