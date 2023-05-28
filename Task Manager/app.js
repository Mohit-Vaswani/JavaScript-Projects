// Retriving all the elements

const taskInput = document.getElementById("taskInput");
const taskButton = document.getElementById("taskBtn");
const taskList = document.getElementById("taskList");

// Adding Event Listeners

taskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        addTask();
    }
})

// Task adding functionality.

function addTask(){
    const taskText = taskInput.value;

    if(taskText){
        const taskItem = document.createElement('li');
        taskItem.innerText = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

taskList.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.remove();
    }
})