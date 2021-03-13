module.exports = function check(str, bracketsConfig) {
    let newBracketsConfig = [];
    let arrStr = '';
    let matchFound = 0;
    for (let i = 0; i < bracketsConfig.length; i++) {
        arrStr = '';
        for (let j = 0; j < bracketsConfig[i].length; j++) {
            arrStr += bracketsConfig[i][j];
        }
        newBracketsConfig.push(arrStr);
    }
    do {
        matchFound = 0;
        newBracketsConfig.forEach(function(element) {
            if (str.includes(element)) {
                matchFound++;
                str = str.replace(element, '')
            }
        });
    } while (matchFound && str.length);
    if (str !== '') {
        return false;
    } else {
        return true;
    }
}
