const changeModeButton = document.querySelector('.change-mode');
const newInput = document.getElementById('new-task-input');
const newTaskBtn = document.querySelector('.newtask-btn');
let actionButtons = [];
let itemsLeft = document.getElementById('items-left');
const taskContainer =  document.querySelector('.new-tasks-container');

const bodyBackgDark = (e) => {
    if (window.screen.width < 768) {
        e.style.background = "top / 100% no-repeat url(images/bg-mobile-dark.jpg), hsl(235, 21%, 11%)";
    } else {
        e.style.background = "top / 100% no-repeat url(images/bg-desktop-dark.jpg), hsl(235, 21%, 11%)";
    };
};
const bodyBackgLight = (e) => {
    if (window.screen.width < 768) {
        e.style.background = "top / 100% no-repeat url(images/bg-mobile-light.jpg),hsl(0, 0%, 98%)";
    } else {
        e.style.background = "top / 100% no-repeat url(images/bg-desktop-light.jpg),hsl(0, 0%, 98%)";
    };
};

const changeMode = () => {
    let modeButtonBckg = changeModeButton.classList;
    let newTask = document.querySelector('.new-task');
    let taskContainer = document.querySelector('.task-container');
    let selectionButtons = document.querySelector('.selection').children;
    let attribution = document.querySelector('.attribution');
    
    if (modeButtonBckg.contains('to-dark-mode')) {
        modeButtonBckg.replace('to-dark-mode', 'to-light-mode');
        bodyBackgDark(document.body);
        newTask.classList.add('task-dark-mode');
        taskContainer.classList.add('task-dark-mode');
        newInput.classList.add('new-task-input-dark-mode');
        for (const button of selectionButtons) {
            button.style.color = "hsl(0, 0%, 98%)";
        };
        attribution.style.color = "hsl(234, 39%, 85%)"
    }
    else if (modeButtonBckg.contains('to-light-mode')) {
        modeButtonBckg.replace('to-light-mode' ,'to-dark-mode');
        bodyBackgLight(document.body);
        newTask.classList.remove('task-dark-mode');
        taskContainer.classList.remove('task-dark-mode');
        newInput.classList.remove('new-task-input-dark-mode');
        for (const button of selectionButtons) {
            button.style.color = "hsl(235, 19%, 35%)";
        };
        attribution.style.color = "hsl(235, 19%, 35%)";
    };
};

const checkingButton = () => {
    let i = 0;
    actionButtons.forEach(e => {
        if (!e.classList.contains('checked')) {
            i++;

            taskContainer.insertBefore(e.parentElement.parentElement, taskContainer.firstChild);

        } else if (e.classList.contains('checked')) {
            let taskDoneContainer = document.querySelector('.task-done');

            taskDoneContainer.insertBefore(e.parentElement.parentElement, taskDoneContainer.firstChild);
        }
        itemsLeft.innerText = i;
    });
};

const createNewTask = () => {
    if (newInput.value != "") {
        let newTaskContainer = document.createElement('div');
        taskContainer.insertBefore(newTaskContainer, taskContainer.firstElementChild);
        newTaskContainer.classList.add('task-created');
    
        let newTaskContent = document.createElement('div');
        newTaskContent.classList.add('task-created-content');
        newTaskContainer.appendChild(newTaskContent);
        
        let newHr = document.createElement('hr');
        newTaskContainer.appendChild(newHr);
    
        let newBtn = document.createElement('button');
        newBtn.classList.add('task-btn', 'action-button');
        newTaskContent.appendChild(newBtn);
    
        let newTaskText = document.createElement('input');
        newTaskText.classList.add('task-created-text');
        newTaskContent.appendChild(newTaskText);
        newTaskText.value = newInput.value;
        newInput.value = "";

        actionButtons.push(newBtn);
        checkingButton();
        actionButtons.forEach(e => {
            e.onclick = () => { 
                e.classList.toggle('checked');
                checkingButton();
            };
        });
      } else {
        window.alert("Can't add empty task");
    };
};

changeModeButton.onclick = changeMode;
newTaskBtn.onclick = createNewTask;

let allBtn = document.getElementById('all-btn');
let activeBtn = document.getElementById('active-btn');
let completedBtn = document.getElementById('completed-btn');
let selectionBtn = [allBtn, activeBtn, completedBtn];

const blueBtnClass = () => {
    for (const btn of selectionBtn) {
        btn.classList.remove('blue-btn');
    };
};

const showSeletedTasks = () => {
    let taskDone  = document.querySelector('.task-done');
    
    if (allBtn.classList.contains('blue-btn')) {
        taskDone.style.display = "block";
        taskContainer.style.display = "block";
    } else if (activeBtn.classList.contains('blue-btn')) {
        taskDone.style.display = "none";
        taskContainer.style.display = "block";
    } else if (completedBtn.classList.contains('blue-btn')) {
        taskDone.style.display = "block";
        taskContainer.style.display = "none";
    };
}

allBtn.onclick = () => {
    blueBtnClass();
    allBtn.classList.add('blue-btn');
    showSeletedTasks();
};

activeBtn.onclick = () => {
    blueBtnClass();
    activeBtn.classList.add('blue-btn');
    showSeletedTasks();
};

completedBtn.onclick = () => {
    blueBtnClass();
    completedBtn.classList.add('blue-btn');
    showSeletedTasks();
};

let clearBtn = document.getElementById('clear-completed'); 

clearBtn.onclick = () => {
    let taskDone = document.querySelector('.task-done');
    while (taskDone.childElementCount > 0) {
        taskDone.firstElementChild.remove();
    };
};