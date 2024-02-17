document.getElementById('add-form').addEventListener('submit', function(e) {
	e.preventDefault();
	const newItem = document.getElementById('new-item').value;
	if (newItem === '') return;
	const list = document.getElementById('todo-list');
	const li = document.createElement('li');
	li.innerHTML = `<span>${newItem}</span><button class="delete">Delete</button>`;
	list.appendChild(li);
	document.getElementById('new-item').value = '';
	const deleteButtons = document.getElementsByClassName('delete');
	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', function() {
			this.parentElement.remove();
		});
	}
});

document.getElementById('delete-all').addEventListener('click', function() {
	const list = document.getElementById('todo-list');
	list.innerHTML = '';
});

const deleteButtons = document.getElementsByClassName('delete');
for (let i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener('click', function() {
		this.parentElement.remove();
	});
}