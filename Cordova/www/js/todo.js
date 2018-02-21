var ToDo = function () {

    var _todos = ["Dummy taak"];

    var _setLocalStorage = function() {
        console.log('bewaar alle taken in "todo"');
        console.log(_todos);
    };

    var _taskList = function() {
        console.log('voeg alle taken aan de ul-tag toe');
    };

    var init = function(){
        console.log('de todo app start op...');
    };

    var addTask = function(){
        console.log('nieuwe taak toevoegen');
    };

    var deleteTask = function(id){
        console.log('taak wissen: id = ' + id);
    };

    var editTask = function(id, task){
        console.log('taak bewerken: _dotos[' + id + '] = ' + task);
    };

    return {
        init: init,
        addTask: addTask,
        deleteTask : deleteTask,
        editTask : editTask
    };
}();
