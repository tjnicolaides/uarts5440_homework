var todos = ['Take out the trash', 'Finish homework', 'Cook dinner', 'Kick back and relax', 'Fix the sink'];

document.write('<div class="container"><h2>My To-Do List</h2>');
document.write('<ul class="to-do-list">');

for(var i = 0; i < todos.length; i++) {
    document.write('<li>' + todos[i] + '</li>');
}

document.write('</ul></div>');