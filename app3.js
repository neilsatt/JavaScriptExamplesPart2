

// Events
       // click, dblclick, mouse up/down, mouseover, mouseover, keyup, keydown, load, etc.
        
        
  
// Function declaration:

    function say(something){
        console.log(something);
    }
    say('hello');
    
    
    function exec(func, arg) {
        func(arg);
    }
    
    
    exec(say, 'hello'); // function, string - both can be passed as arguments
    
    //OR you can do this
    
    exec((something) => {
        console.log(something);
    }, 'Hi, there');
    
    
 //Delaying the executing with setTimeout(), 
 //and callback function, because we want to call it back after time has passed
 
    window.setTimeout((something) => {
        console.log(something);
    }, 3000, 'Hi, there');  // add 2nd milliseconds parameter
        

/* 

First-class citizens - can be stored in variables or passed into functions like other datatypes

Passing function into other function is helpful because:
    it allows you to have more control over when and how a function gets executed
    
*/    
    
    
    
    

