// Adding tasks
const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const darkModeToggle = document.getElementById('darkModeToggle');

addBtn.addEventListener('click', () => {
    const taskText = todoInput.value;
    if (taskText.trim()) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${taskText} <button class="deleteBtn">X</button>`;
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
});

// Delete tasks
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        e.target.parentElement.remove();
    }
});

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
