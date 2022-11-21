

//calculator functions for addition, subtraction, dividing and multiplying
function add(){

    var num1 = Number(document.getElementById("f1").value);
    var num2 = Number(document.getElementById("f2").value);
    var present = Number(document.getElementById("output").value); 
    
    var output = num1 + num2;

    document.getElementById("output").innerHTML = output; 
    
} 

function subtract(){

    var num1 = Number(document.getElementById("f1").value);
    var num2 = Number(document.getElementById("f2").value);
    
    var output = num1 - num2;

    document.getElementById("output").innerHTML = output; 
    
} 

function multiply(){

    var num1 = Number(document.getElementById("f1").value);
    var num2 = Number(document.getElementById("f2").value);
    
    var output = num1 * num2;

    document.getElementById("output").innerHTML = output; 
    
} 

function divide(){

    var num1 = Number(document.getElementById("f1").value);
    var num2 = Number(document.getElementById("f2").value);
    
    var output = num1 / num2;

    document.getElementById("output").innerHTML = output; 
    
} 