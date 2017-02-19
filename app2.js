const toggleList = document.getElementById('toggleList');
const listDiv =  document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');


toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.textContent = descriptionInput.value + ':';
    addItemInput.value = '';// clear the input box
});

// Adding elements to the DOM - appendChild method is added to the parent element
addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0]; //returns a collection
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';// clear the input box
});

// Remove elements from the DOM - removeChild method is removed from the parent element
removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0]; //returns a collection
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});



