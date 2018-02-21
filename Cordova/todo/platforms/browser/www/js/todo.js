var ToDo = function () {

    var _todos = ["Dummy taak"];

    var _setLocalStorage = function () {
        console.log('bewaar alle taken in "todo"');
        console.log(_todos);
        localStorage.setItem('todo', JSON.stringify(_todos)); // localStorage.setItem('key', 'value')
        _taskList();
    };

    var _taskList = function () {
        console.log('voeg alle taken aan de ul-tag toe');
        $('ul').empty(); // verwijder alle li-tags
        for (var i = 0; i < _todos.length; i++) {
            var item = '<li class="collection-item avatar"> ' +
                '<i class="material-icons circle red deleteTask" data-task="' + i + '">delete_forever</i> ' +
                '<div class="title" data-task="' + i + '" contenteditable>' + _todos[i] + '</div> ' +
                '</li>';
            $('ul.collection').append(item);
        };
    };

    var init = function () {
        console.log('de todo app start op...');
        _todos = []; // Maak array leeg
        var todos_str = localStorage.getItem('todo');
        if (todos_str !== null) {
            _todos = JSON.parse(todos_str);
        }
        _taskList();
    };

    var addTask = function () {
        console.log('nieuwe taak toevoegen');
        _todos.push('Taak ' + _todos.length); // / Voeg achteraan (push) of vooraan (unshift) de array de tekst "Taak x" toe
        _setLocalStorage();
    };

    var deleteTask = function (id) {
        console.log('taak wissen: id = ' + id);
        if (confirm('Deze taak wissen?')) {
            _todos.splice(id, 1); // Verwijder het x-de element uit de array
            _setLocalStorage();
        }

    };

    var editTask = function (id, task) {
        console.log('taak bewerken: _dotos[' + id + '] = ' + task);
        _todos[id] = task;
        _setLocalStorage();
    };

    return {
        init: init,
        addTask: addTask,
        deleteTask: deleteTask,
        editTask: editTask
    };
}();