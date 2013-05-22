var todos = {
    1: {
        'name': 'Take out the trash',
        'due-date': 'May 31, 2013'
    }, 
    2: {
        'name': 'Finish homework',
        'due-date': 'June 1, 2013'

    },
    3: {
        'name': 'Cook dinner'//,
        //'due-date': 'June 6, 2013'

    }, 
    4: {
        'name': 'Kick back and relax',
        'due-date': 'June 20, 2013'

    },
    5: {
        'name': 'Fix the sink'//,
        //'due-date': 'June 30, 2013'
    }
    
};

var printToDo = function(todo) {
    if(todo['name'] && todo['due-date']) {
        document.write('<li>' + todo.name + ' - due on ' + todo['due-date'] + '</li>');
    } else {
        throw "this todo is missing some properties.";
    }
}

document.write('<div class="container"><h2>My To-Do List</h2>');
document.write('<ul class="to-do-list">');

for(var key in todos) {
    var todo = todos[key];
    try {
        printToDo(todo);
    } catch(e) {
        console.log(e);
    }
}

document.write('</ul></div>');