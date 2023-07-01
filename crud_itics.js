import { Savetask } from "./connection.js";

const taskform = document.getElementById('container-itics');

taskform.addEventListener('submit', async e => {
    e.preventDefault();

    const title = taskform['task-title'].value;
    const description = taskform['task-description'].value;

    Savetask(title, description)

    // Vuelve al inicio para limpiar los campos
    taskform.reset()
})