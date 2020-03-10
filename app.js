updateList();
function addEvent(){
//take input from input field

let input = document.getElementById("Task_input");

//take tasks from localstotrage and store tasks(Array)
let tasksArr = JSON.parse(localStorage.tasks);

//push into array
tasksArr.push(input.value);
//update that local storage
 localStorage.tasks = JSON.stringify(tasksArr);
//empty the input box
input.value="";

// update list
 updateList();
}
function updateList(){
  
    //take ul 
    let get = document.getElementById("set");
      
     console.log(get);
    //get tasks local storge
     let tasksArr = JSON.parse(localStorage.tasks);
     console.log(tasksArr);
   // loop
     let len = tasksArr.length;
     console.log(len);
    let html = "";
   for(let i=0; i < len; i++){
    html += '<li class="list-group-item" id="' + i + '">'+ tasksArr[i] +'<span><button type="button" class="btn btn-danger remove_btn float-right" onclick="removeItem(this);">Remove</button></span></li>'  
   }
    document.write(html)
}

function removeItem(obj){
   let id = obj.parentElement.id;
console.log(id);
let tasksArr = JSON.parse(localStorage.tasks);
    tasksArr.splice(id,1)
    localStorage.tasks = JSON.stringify(tasksArr);
    updateList();
}