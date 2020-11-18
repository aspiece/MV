function isPrime(value) {
for(var i = 2; i < value; i++) {
    if(value % i === 0) {
    return false;
    }
}
return value > 1;
}
//declare min and max here
var min = 2;
var max = 20;
message.alert("Your min is: " + min + " and your max is " + max)

//check to see if min and max are integers
if((Number.isInteger(min) == false) || (Number.isInteger(max) == false)){
    message.alert("Error: You values contain a decimal, thus we can't continued...")
}
//check to see if min and max are positive
else if((min < 0 )|| (max < 0)){
    message.alert("Error: Your value is negative! Try positive integer...")
}
else{
    //announce range values of prime number between the min and max.
    for(var value = min; value <= max; value++){
        if(!(isPrime(value) === false)){
        message.alert(isPrime(value) + " " + value);
        }
    }
}