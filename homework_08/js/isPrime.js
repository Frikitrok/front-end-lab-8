function isPrime(a) {
	for(var i = 2; i < a; i++) {
        if(a % i === 0) {
            return false;
        }
    }
    return a > 1;
}
console.log(isPrime(4));


