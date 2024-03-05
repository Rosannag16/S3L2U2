function saveName() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();
    if (name !== '') {
        localStorage.setItem('savedName', name);
        displaySavedName(name);
        nameInput.value = '';
    }
}

function clearName() {
    localStorage.removeItem('savedName');
    displaySavedName('');
}

function displaySavedName(name) {
    const savedNameDiv = document.getElementById('saved-name');
    if (name !== '') {
        savedNameDiv.textContent = `Saved Name: ${name}`;
    } else {
        savedNameDiv.textContent = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
        displaySavedName(savedName);
    }
});