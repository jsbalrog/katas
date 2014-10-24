var convert = function(num) {
	var retVal = [];

	retVal.push(times('M', Math.floor(num / 1000)));
	retVal.push(times('D', Math.floor(num % 1000 / 500)));
	retVal.push(times('C', Math.floor(num % 500 / 100)));
	retVal.push(times('L', Math.floor(num % 100 / 50)));
	retVal.push(times('X', Math.floor(num % 50 / 10)));
	retVal.push(times('V', Math.floor(num % 10 / 5)));
	retVal.push(times('I', Math.ceil(num % 5 / 1)));

	return retVal.join('');
};

var times = function(letter, amt) {
	var retVal = [];

	for(var i = 0; i < amt; i++) {
		retVal.push(letter);
	}

	return retVal.join('');
};

console.log(convert(155));