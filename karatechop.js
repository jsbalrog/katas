assert_equal = function(value, test) {
	var result = value == test ? "pass" : "fail";
	console.log(value + " " + test + ": " + result);
};

// Finds the integer index of the int in the
// array of values, or -1 if not found
function chop(int, ary) {
	var low  = 0, // low is 0
		hi = ary.length-1, // hi is length of array
		mid = 0; // mid is 0
	if(ary.length == 0) {
		return -1
	}
	while(low <= hi) {
		mid = Math.ceil((hi+low)/2); // mid is half of the array
		if(ary[mid] < int) {
			low = mid + 1;
		} else if(ary[mid] > int) {
			hi = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
};

// Test it!
assert_equal(0, chop(3, [3, 4, 5, 6, 7])); 
assert_equal(-1, chop(3, [4, 5, 6, 7]));
assert_equal(1, chop(5, [4, 5, 6, 7])); 
assert_equal(-1, chop(8, [2, 3, 4, 5, 6, 7]));
assert_equal(2, chop(4, [2, 3, 4, 5, 6, 7]));
assert_equal(3, chop(3, [0, 1, 2, 3, 4, 5, 6, 7]));
