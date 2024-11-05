let currentTopicId = null;

function showEditForm(id) {
    const titleElement = document.getElementById(`title-${id}`);
    const currentTitle = titleElement.textContent;

    document.getElementById('edit-title').value = currentTitle;
    currentTopicId = id;

    document.getElementById('edit-form').style.display = 'block';
}

function hideEditForm() {
    document.getElementById('edit-form').style.display = 'none';
    currentTopicId = null;
}

function updateTopic() {
    const newTitle = document.getElementById('edit-title').value;

    fetch(`/update/${currentTopicId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Tema actualizado') {
            document.getElementById(`title-${currentTopicId}`).textContent = newTitle;
            hideEditForm();
        } else {
            alert('Error al actualizar el tema');
        }
    })
    .catch(() => {
        alert('Error al actualizar el tema');
    });
}

