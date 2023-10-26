const toLowerCase = (str) => {
    let result = '';
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let charIndex = -1;
        for (let j = 0; j < uppercaseChars.length; j++) {
            if (char === uppercaseChars[j]) {
                charIndex = j;
                break;
            }
        }
        if (charIndex !== -1) {
            char = lowercaseChars[charIndex];
        }
        result += char;
    }
    return result;
}

const manualIncludes = (text, search) => {
    for (let i = 0; i <= text.length - search.length; i++) {
        let found = true;
        for (let j = 0; j < search.length; j++) {
            if (text[i + j] !== search[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}

const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
];

const filterNamesBySearch = (search, limit) => {
    const hasil = [];
    for (let i = 0; i < name.length; i++) {
        let nameLower = toLowerCase(name[i]);
        let searchLower = toLowerCase(search);
        if (manualIncludes(nameLower, searchLower)) {
            hasil[hasil.length] = name[i];
            if (hasil.length >= limit) {
                break;
            }
        }
    }
    return hasil;
}

const searchNames = (search, limit) => {
    const hasil = filterNamesBySearch(search, limit);
    return console.log(hasil)
}

searchNames("an", 3);


// dengan built-in Function
// const name = [
//     'Abigail', 'Alexandra', 'Alison',
//     'Amanda', 'Angela', 'Bella',
//     'Carol', 'Caroline', 'Carolyn',
//     'Deirdre', 'Diana', 'Elizabeth',
//     'Ella', 'Faith', 'Olivia', 'Penelope'];

// const searchName = (search, limit, cb) => {
//     let hasil = name.filter(name => name.toLowerCase().includes(search.toLowerCase())).slice(0,limit)
//     cb(hasil)
// }    

// const hasilSearch = (quote) => {
//     console.log(quote)  
// }

// searchName("an",3,hasilSearch)