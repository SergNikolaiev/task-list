'use strict'

const inputRef = document.querySelector('#task');
const buttonAddRef = document.querySelector('.button.button-add');
const tasksRef = document.querySelector('.list-tasks')
const textOutputRef = document.querySelector('.text-output')

const addTask = (evt) => {
    evt.preventDefault();
    const valueInput = inputRef.value;
    if(valueInput !== '') {
        const task = document.createElement('li');
        task.textContent = valueInput;
        tasksRef.append(task);
        task.classList.add('task');
    }
    inputRef.value = '';   
}



buttonAddRef.addEventListener('click', addTask)
