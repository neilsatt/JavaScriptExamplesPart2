const toggleList = document.getElementById('toggleList');
const listDiv =  document.querySelector('.list');
const myInput = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');


toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
});

button.addEventListener('click', () => {
    alert('why');
    p.textContent = myInput.value + ':';
})
