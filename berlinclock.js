var convert = function(time) {
	var retVal = [];
	var timeArray = time.split(':');

	// Seconds on or off
	retVal.push(times('Y', parseInt(timeArray[2]) % 2));	

	// Hours
	retVal.push(times('R', Math.floor(parseInt(timeArray[0]) / 5)));
	retVal.push(times('R', Math.floor(parseInt(timeArray[0]) % 5)));

	// Minutes
	retVal.push(times('R', Math.floor(parseInt(timeArray[1]) / 5)));
	retVal.push(times('R', Math.floor(parseInt(timeArray[1]) % 5)));

	return retVal;
};

var times = function(letter, amt) {
	var retVal = [];

	for(var i = 0; i < amt; i++) {
		retVal.push(letter);
	}

	return retVal.join('');
};

var buildTime = function(num) {
	var retVal = '';
	var timeArray = convert(num);

	retVal += timeArray[0] || 'O';
	retVal += '\n';

	retVal += timeArray[1];
	retVal += times('O', 4 - timeArray[1].length);
	retVal += '\n';

	retVal += timeArray[2];
	retVal += times('O', 4 - timeArray[2].length);
	retVal += '\n';

	retVal += timeArray[3];
	retVal += times('O', 11 - timeArray[3].length);
	retVal += '\n';

	retVal += timeArray[4];
	retVal += times('O', 4 - timeArray[4].length);
	retVal += '\n';

	return retVal;
};

console.log(buildTime('13:17:01'));
console.log(buildTime('02:48:02'));