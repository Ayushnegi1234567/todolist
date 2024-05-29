// app.js

document.addEventListener('DOMContentLoaded', function() {
    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    // Create
    addTodoButton.addEventListener('click', function() {
        const todoText = newTodoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            newTodoInput.value = '';
        }
    });

    // Read
    function addTodoItem(text) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);

        // Update
        span.addEventListener('dblclick', function() {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);

            input.addEventListener('blur', function() {
                span.textContent = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
            });

            input.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    span.textContent = input.value;
                    li.insertBefore(span, input);
                    li.removeChild(input);
                }
            });

            input.focus();
        });

        // Delete
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    }
});
