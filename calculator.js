const display=document.getElementById("display");
console.log(display);

function numberDisplay(x){
    display.value=display.value+x;
}

function clearDisplay(){
    display.value=""
}

function calculate(){
    // eval function evaluate the display values(operation) and returns the result of operation
    try {
        display.value=eval(display.value);
    } catch (error) {
        console.log(error);
        display.value="Error"
        
    }
}

function remove(){
     display.value = display.value.slice(0, -1);
}