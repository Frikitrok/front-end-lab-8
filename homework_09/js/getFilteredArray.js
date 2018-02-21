
function getFilteredArray(arr, func) {
    var temp = [];
    forEach(arr, push);
    function push(num) {
        if(func(num)) {
            temp.push(num);
        }
    }
   return temp;
}

function predicateFunction(num) { 
    return num > 3;
} // returns boolean value
console.log(getFilteredArray([1, 3, 4, 7, 20], predicateFunction)); 
    