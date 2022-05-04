import Model from './Aplicacion ToDo/JS/model.js';
import View from './Aplicacion ToDo/JS/view.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);

    view.render();
});