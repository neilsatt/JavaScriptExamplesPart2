// Events 

const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

const listDiv = document.querySelector('.list');


// Version 1 - loop through all list items 
/*
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseover', () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });

    listItems[i].addEventListener('mouseout', () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
}
*/

//event.target.tagName

// Version 2 Event Bubbling - when the parent and ancestors also receive the event of a related element.
// For instance, clicking the li, moves up to the ul, then the body, and then the document
 listDiv.addEventListener('mouseover', () => {
        listDiv.textContent = listDiv.textContent.toUpperCase();
    });

    listDiv.addEventListener('mouseout', () => {
        listDiv.textContent = listDiv.textContent.toLowerCase();
    });




// Event object - shows all click events 
//document.addEventListener('click', (event) => {
//    console.log(event.target);
//})


// Using event target
    listDiv.addEventListener('mouseover', (event) => {
        if(event.target.tagName == 'LI'){
            event.target.textContent = event.target.textContent.toUpperCase();
        }
    });

   listDiv.addEventListener('mouseout', (event) => {
        if(event.target.tagName == 'LI'){
            event.target.textContent = event.target.textContent.toLowerCase();
        }
    });
