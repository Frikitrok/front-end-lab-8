
function getTransformedArray(arr, func) {
    var temp = [];
    forEach(arr, push);
    function push(num) {
        temp.push(func(num));
    }
   return temp;
}
  
function increment(num) { 
    return num + 1;
} // just returns incremented number
console.log(getTransformedArray([1, 7, 20], increment)); 
    