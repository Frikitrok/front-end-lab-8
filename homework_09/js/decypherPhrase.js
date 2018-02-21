function decypherPhrase(charactersMap, str) {
    for (var prop in charactersMap) {
        tmp = prop;
        prop = charactersMap[prop];
        charactersMap[prop] = tmp;
    }
    return cypherPhrase(charactersMap, str);
}

var charactersMap = {a: 'o', c: 'd', t: 'g'};
console.log(decypherPhrase(charactersMap, 'kiggy dog')); // -> “kitty cat”


    