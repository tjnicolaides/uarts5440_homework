
$(document).ready(function(){

    var tasks = [{
        'name' : 'Do the laundry',
        'complete' : true
    }, {
        'name': 'Take out the trash',
        'complete' : false
    }, {
        'name' : 'Feed the dog',
        'complete' : false
    }];
    
    var html = '<h2>My Tasks</h2>'; // contain our HTML as a string
    
        html +='<ol>';
    
    
    for(var i= 0; i < tasks.length; i++) {
        try {
            html += printTask(tasks[i]);
        } catch (msg) {
            console.log('There is a problem: ' + msg);
        }
    }
    
    html += '</ol>';
    
    
    $('.container').append(html);    

});

function printTask(task) {
    if(typeof task.name === 'undefined') {
        throw 'The name of this task is missing! Help!';
    } else if (typeof task.complete === 'undefined') {
        throw 'The completion status of this task is gone. OH NO';
    }
    
    if(task.complete) {
        return '<li class="complete">' + task.name + '</li>';
    } else {
        return '<li>' + task.name + '</li>'; 
    }
}

function removeCompleted() {
    $('.complete').remove();
}