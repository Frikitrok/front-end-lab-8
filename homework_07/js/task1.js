var num1 = parseFloat(prompt('Rows number 0-20'));


  var n = parseInt(num1, 10);
  if(num1!== n || num1 < 0 || num1 > 20) {
    console.error('Incrorrect');
  } else {
    var itemAmount = 1;
    var spacing = num1 - 1;
    for (var i = num1; i > 0; i--) {
      var row = ""
      for (var k = 0; k < spacing; k++) {
        row += "   ";
      }
      for (var k = 0; k < itemAmount; k++) {
        row += "[~]";
      }
      console.log(row);
      spacing -= 1;
      itemAmount += 2;
    }
  }


  



