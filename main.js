var tasks = [{
        'name' : 'Defragment hard drive',
        'complete' : true
    }, {
        'name' : 'Do the laundry'
    }, {
        'complete' : false
    }, {
        'name' : 'Feed the dog',
        'complete' : false
    }];

document.write('<h2>My Tasks</h2>');
document.write('<ol>');

for(var i= 0; i < tasks.length; i++) {
    try {
        printTask(tasks[i]);
    } catch (msg) {
        console.log('There is a problem: ' + msg);
    }
}

document.write('</ol>');

function printTask(task) {
    if(typeof task.name == 'undefined') {
        throw 'The name of this task is missing! Help!';
    } else if (typeof task.complete == 'undefined') {
        throw 'The completion status of this task is gone. OH NO'
    }
    
    if(task['complete']) {
        document.write('<li class="complete">' + task.name + '</li>');
    } else {
        document.write('<li>' + task.name + '</li>'); 
    }
}



