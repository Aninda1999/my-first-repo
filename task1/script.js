let tasklist = document.querySelector('#task_ul')
let taskinput = document.querySelector('#new_task')
let taskfil = document.querySelector('#task_filter')
let form = document.querySelector('#task_form')
let clrtask = document.querySelector('#task_clear')


form.addEventListener('submit', addtask)
tasklist.addEventListener('click', remotask)
clrtask.addEventListener('click', clearall)
taskfil.addEventListener('keyup', filtertask)
document.addEventListener('DOMContentLoaded', gettask)

function addtask(e){
    if (taskinput.value === '')
    {
        alert('Add Something!')
    } else
    {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(taskinput.value + " "))
        tasklist.appendChild(li); 
        let link = document.createElement('a')
        link.setAttribute('href', '#')
        link.innerHTML = 'X'
        li.appendChild(link)
        tasklist.appendChild(li);
        e.preventDefault();
        
        taskinlocalstorage(taskinput.value)
        taskinput.value = '';
       
    }
    e.preventDefault();
}

function remotask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are you sure??"))
        {let element = e.target.parentElement;
            element.remove();
            removefromls(element);
        }
    }
}

function clearall(e){
    if (confirm("Are you really sure!!!"))
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

    localStorage.clear();
}

function filtertask(e){
    let text = e.target.value.toLowerCase()
    document.querySelectorAll('li').forEach(task => {
        let list = task.firstChild.textContent.toLowerCase()
        if (list.indexOf(text)!= -1){
            task.style.display = 'block';
        }
        else
        {
            task.style.display = 'none';
            task.style.display = 'none';
        }
    })
}



function taskinlocalstorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
        
    }else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));  
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
}

function gettask(){
        let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
        
    }else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));  
    }

    tasks.forEach(task =>{
                let li = document.createElement('li')
        li.appendChild(document.createTextNode(task + " "))
        tasklist.appendChild(li); 
        let link = document.createElement('a')
        link.setAttribute('href', '#')
        link.innerHTML = 'X'
        li.appendChild(link)
        tasklist.appendChild(li);
    }
        )
}


function removefromls(taskitem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
        
    }else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));  
    }

    let li = taskitem;
    li.removeChild(li.lastChild);

    tasks.forEach((task, index) => {
    
        if(li.textContent.trim() === task){
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}