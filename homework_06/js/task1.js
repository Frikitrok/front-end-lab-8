var num1 = parseFloat(prompt('Side 1'));
var num2 = parseFloat(prompt('Side 2'));
var num3 = parseFloat(prompt('Side 3'));

function checkInput(num1, num2, num3) {
  if(num1 <= 0 || num2 <= 0 || num3 <= 0) {
    return false;
  }
  else if(isNaN(num1) || isNaN(num2)|| isNaN(num3)){
    return false;
  }
  else {
    return true;
  }
}

function findType(num1, num2, num3) {
	if(num1 == Math.sqrt(Math.pow(num2, 2) + Math.pow(num3, 2)) || num2 == Math.sqrt(Math.pow(num1, 2) + Math.pow(num3, 2)) || num3 == Math.sqrt(Math.pow(num2, 2) + Math.pow(num1, 2))){
    	return "right triangle";
 	}
	else if(num1 == num2 && num1 == num3 && num2 == num3){
		return "equilateral";
	}
	else if(num1 != num2 && num1 != num3 && num2 != num3){
		return "scalene";
	}
	else {
		return "isosceles";
	}
}

function findSquare(num1, num2, num3) {
  var p = (num1 + num2 + num3)/2;
  p = Math.sqrt(p * (p - num1) * (p - num2) * (p - num3))
  return p.toFixed(2);
}

(function showResult(num1, num2, num3) {
	if (checkInput(num1, num2, num3)) {
		if (findSquare(num1, num2, num3) == 0 || isNaN(findSquare(num1, num2, num3)) ){
	     	console.log("Incorrect data");
	    } else{
	    	console.log("Type of triangle is" + findType(num1, num2, num3) + " and square is " + findSquare(num1, num2, num3));
	    }
  	}
  	else{
    	console.log("Incorrect data");
  	}
})(num1, num2, num3);


