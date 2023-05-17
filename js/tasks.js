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
        task.classList.add('task');
        tasksRef.append(task);
        
        buttonRemoveTask(task)
    }
    
    inputRef.value = '';   
}

const buttonRemoveTask = (task) => {
    const buttonRemove = document.createElement('span');
    buttonRemove.classList.add('button-remove');
    task.append(buttonRemove);
    buttonRemove.addEventListener('click', () => {
        task.remove()
    })
}





buttonAddRef.addEventListener('click', addTask)
