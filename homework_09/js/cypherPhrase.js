function cypherPhrase(charactersMap, str) {
    function transform(ell) {
        for (var prop in charactersMap) {
            if(prop==ell) {
                return charactersMap[prop];
            }
        }
        return ell;
    }
    return getTransformedArray(str, transform).join('');
}

var charactersMap = {a: 'o', c: 'd', t: 'g'}
console.log(cypherPhrase(charactersMap, 'kitty cat' )); // -> “kiggy dog”



    