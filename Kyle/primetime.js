function enterLowerRange() //This is the function for entering the starting number
{
	var elem = document.getElementById('tdLowerRange');
	promptForInteger(elem, 1);
}

function enterUpperRange() //This is the function for entering the ending number
{
	var elem = document.getElementById('tdUpperRange');
	promptForInteger(elem, 50);
}

function promptForInteger(elem, defaultValue) //This funtion tests to make sure that the number you entered is a positive integer
{
	var currentVal = elem.innerHTML;
	if (!Number.isInteger(currentVal)) {
		currentVal = defaultValue;
	}
	
	var newVal = prompt('Please enter a positive integer', currentVal); //This will prompt the user to enter a poitive integer if it isn't one
	if (newVal != null) {
		elem.innerHTML = newVal;
	}
}

function generatePrimes() //This funtion will generate the primes when the button is clicked.
{
	var sHTML = '';
	var lowerEnd = Number.parseInt(document.getElementById('tdLowerRange').innerHTML);
	var upperEnd = Number.parseInt(document.getElementById('tdUpperRange').innerHTML);
	
	if (validRange(lowerEnd, upperEnd)) { //This conditional is used to determine what to print if there is a valid range.
		sHTML += 'The primes from ' + lowerEnd + ' to ' + upperEnd + ' are: <br>';
		primes = sieve(lowerEnd, upperEnd);
		for (var i = 0; i < primes.length; i++) {
			if (i % 20 == 0 && i != 0) { //We use the mod operator (%) to determine the remainder of i divided by 20
				sHTML = sHTML + '<br>'; //this moves the prime to the next line.
			}
				
			sHTML += primes[i] + ' ';  //This will print out the primes
		}
		
	} else {
		sHTML += 'the given range is not valid'; //If the range isn't valid, then it gives an error.
	}
	
	document.getElementById('divResults').innerHTML = sHTML;
}

function validRange(lowerEnd, upperEnd) //This is the function to test to be sure it's a valid range.
{
	var isValid = false;

	if (Number.isInteger(lowerEnd) && Number.isInteger(upperEnd)) {
		if (lowerEnd > 0 && lowerEnd < 10000) {
			if (lowerEnd < upperEnd) {
				if (upperEnd - lowerEnd < 10000) {
					isValid = true;
				}
			}
		}
	}
	
	return isValid;
}

function sieve(lowerEnd, upperEnd)
{
	var isPrime = [];
	var n = upperEnd + 1;
	
	//assume every number is prime
	for (var i = 0; i <= n; i++) {
		isPrime.push(true);
	}
        
    // loop from 2 to sqrt(n), crossing off all multiples of factor
    for (var i = 2; i*i <= n; i++) {
		if (isPrime[i]) {
			for (var j = i; i*j <= n; j++) {
				isPrime[i*j] = false;
            }
		}
	}
        
    //consolidate primes to a smaller list
	var prime = [];
	for (var i = lowerEnd; i < n; i++) {
		if (isPrime[i]) {
			prime.push(i);
        }
	}
        
    return prime;
}