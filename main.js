
var taskApp;

$(document).ready(function(){

    taskApp = {
        
        'tasks' : {
            'list' : [],
            'render' : function(task) {
                if(typeof task.name === 'undefined') {
                    throw 'The name of this task is missing! Help!';
                } else if (typeof task.complete === 'undefined') {
                    throw 'The completion status of this task is gone. OH NO';
                }
                
                if(task.complete) {
                    return '<li class="complete">' + task.name + '</li>';
                } else {
                    if(task.urgent()) {
                        return '<li class="urgent">' + task.name + '</li>';

                    } else {
                        return '<li>' + task.name + '</li>'; 
                    }
                }
            }
            
        },
        'add' : function(name, due) {
            this.tasks.list.push(new Task(name, due));
        },
        'remove' : function() {
            $('.complete').remove();
            
        },
        'display' : function() {
                var tasks = this.tasks;
                var html = '<h2>My Tasks</h2>'; // contain our HTML as a string
    
                    html +='<ol>';

                    for(var i= 0; i < tasks.list.length; i++) {
                        try {
                            html += tasks.render(tasks.list[i]);
                        } catch (msg) {
                            console.log('There is a problem: ' + msg);
                        }
                    }
                    
                    html += '</ol>';
                    $('.container').html(html); 
        },
        'init' : function() {
            this.add('Take out the garbage', moment('2013-07-15'));
            this.add('Fold the laundry', moment());
            this.add('Feed the dog');
            this.add('Do week 7 slides');
            this.display();
        }
         
    }
    taskApp.init();
});

var Task = function(name, due) {
    // generate a task
    
    this.name = name || 'Generic task';
    this['complete'] = false;
    this.due = due || moment().add('days', 10);
    this.urgent = function() {
        var oneWeekFromNow = moment().add('days', 7);
        console.log(oneWeekFromNow);

        if(this.due.isBefore(oneWeekFromNow)) {
            return true;
        } 
        return false;
    };
}