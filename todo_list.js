const taskInput=document.getElementById("taskInput");
const addTaskBtn=document.getElementById("addTaskBtn");
const taskList=document.getElementById("taskList");
const clearCompletedBtn=document.getElementById("clearCompletedBtn");

//now declearing varibale name with tasks
let tasks=[];

//creating the addTask function by including the given code 
function addTask(){
    const taskText=taskInput.value.trim();
    if (taskText !==""){
        tasks.push({text:taskText});
        taskInput.value="";
        displayTasks();
    }
}

//creating function for displayTasks

function displayTasks(){
    taskList.innerHTML=""; //tasklist.innerHTML=""; is used to clear the existing content within the tasklist elemennt by setting its innnerHTML to an empty string.
    tasks.forEach((task,index)=>{
        const li=document.createElement("li");
        li.innerHTML=`<input type="checkbox" id="task-${index}" ${task.completed?"checked":""}>
          <label for="task=${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change",()=>toggleTask(index));
        taskList.appendChild(li);
    });
}

//creating the toggleTask function
function toggleTask(index){
    task[index].completed=!tasks[index].completed;
    displayTasks();
}

//creat a clearCompletedTasks function

function clearCompletedTasks(){
    task=tasks.filter(task=>!task.completed);
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

displayTasks();