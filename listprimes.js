
var primes = function(num) {
	var retVal = []
	for(var i = 2; i <= num; i++) {
		while(num % i === 0) {
			retVal.push(i);
			num = num / i;
		}
	}
	return retVal;
};

console.log(primes(1025));