let iterator = 0;
let timeoutId;

function increaseIteratorBy1() {
 iterator++;
 printIteratorValue();
}

function printIteratorValue() {
 console.log('Iterator value ', iterator);
}

function debounce(func, pause) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(func, pause);
}

debounce(increaseIteratorBy1, 1000);
debounce(increaseIteratorBy1, 1000);
debounce(increaseIteratorBy1, 1000);
