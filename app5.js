// Events 

const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');


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
/*
 listDiv.addEventListener('mouseover', () => {
        listDiv.textContent = listDiv.textContent.toUpperCase();
    });

    listDiv.addEventListener('mouseout', () => {
        listDiv.textContent = listDiv.textContent.toLowerCase();
    });
*/



// Event object - shows all click events 
//document.addEventListener('click', (event) => {
//    console.log(event.target);
//})


// Using event target
/*
    listUl.addEventListener('click', (event) => {
        if(event.target.tagName == 'BUTTON'){
          let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
    });
*/

// Second version
   listUl.addEventListener('click', (event) => {
        if(event.target.tagName == 'BUTTON'){
            if (event.target.className == 'remove'){
                let li = event.target.parentNode;
                let ul = li.parentNode;
                ul.removeChild(li);
            }
           if (event.target.className == 'up'){
                    let li = event.target.parentNode;
                    let prevLi = li.previousElementSibling;
                    let ul = li.parentNode;
               if(prevLi){
                  ul.insertBefore(li, prevLi); // only move up if there is a previous sibling
               }                  
            } 
            
            if (event.target.className == 'down'){
                    let li = event.target.parentNode;
                    let nextLi = li.nextElementSibling;
                    let ul = li.parentNode;
               if(nextLi){
                  ul.insertBefore(nextLi, li); // only move down if there is a previous sibling
               }                  
            } 
        }
    });


// 
