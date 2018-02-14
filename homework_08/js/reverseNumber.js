function reverseNumber(a) {
	b = Math.abs(a).toString();
	b = b.split("").reverse().join("");
	return parseInt(b) * Math.sign(a);
}
console.log(reverseNumber(-52345));


