function getClosestToZero() {
	var curr = arguments[0];
    [...arguments].forEach(function(val) {
    	if (Math.abs(0 - val) < Math.abs(0 - curr)) {
    		curr = val;
    	}
    });
    return curr;
}
console.log(getClosestToZero(42, 21, -10, 5, -3, 10));


