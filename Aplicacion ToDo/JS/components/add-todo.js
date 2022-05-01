import Alert from "./alert.js";
export default class AddTodo{
    constructor () {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.Alert = new Alert('alert');
    }
    onClick(callback){
        this.btn.onclick = () =>{
            if (title.value === '' || description.value === '') {
                this.Alert.show('Title and Description are required');
            } else {
                this.Alert.hide();
                callback(this.title.value, this.description.value);
            }
        }
    }
}