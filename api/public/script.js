console.log("script file is loading");
const RESPONSE_DONE = 4;
const STATUS_OK = 200;
const TODOS_LIST_ID = 'todos_list_div';
function  add_todo_element(id,todos_data_json) {
    var parent = document.getElementById(id);
    parent.innerText = todos_data_json;
}
function  getTodosAjax() {

   var xhr = new XMLHttpRequest();
   xhr.open("GET","/api/todos",true);
   xhr.onreadystatechange = function () {
       if(xhr.readyState == RESPONSE_DONE)
       {
           if(xhr.status == STATUS_OK){
               console.log(xhr.responseText);
               add_todo_element(TODOS_LIST_ID,xhr.responseText);
           }
       }
   }
   xhr.send(data = null);
}