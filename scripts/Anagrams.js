function areAnagrams(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return "Invalid input";
    }
    const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2));
