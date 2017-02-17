//const myHeading = document.getElementById('myHeading');
//const myButton = document.getElementById('myButton');
//const myInput = document.getElementById('myInput');
//const myHeadingTag = document.getElementsByTagName('h1')[0];

/*
myHeading.addEventListener('click', () => {
    myHeading.style.color = 'teal';
});

myButton.addEventListener('click', () => {
    myHeading.style.color = 'teal';
});

myButton.addEventListener('click', () => {
    myHeading.style.color = myInput.value;
});


myButton.addEventListener('click', () => {
    myHeadingTag.style.color = myInput.value;
});



const myList = document.getElementsByTagName('li');
for (let i = 0; i < myList.length; i++){
    myList[i].style.color = 'purple';
}

const notPurple = document.getElementsByClassName('not-purple');
for (let i = 0; i < notPurple.length; i++){
    notPurple[i].style.color = 'teal';
}
*/

//  returns the first element within the document that matches the specified group of selectors, or null if no matches are found.
//document.querySelector();

// returns a list of the elements that match the specified group of selectors. The object returned is a NodeList.
//document.querySelectorAll('li');

// Element.textContent - read & set text
const myInput = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

button.addEventListener('click', () => {
    alert('why');
    p.textContent = myInput.value + ':';
})


