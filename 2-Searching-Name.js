// const toLowerCase = (str) => {
//     let result = '';
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         let charIndex = -1;
//         for (let j = 0; j < uppercaseChars.length; j++) {
//             if (char === uppercaseChars[j]) {
//                 charIndex = j;
//                 break;
//             }
//         }
//         if (charIndex !== -1) {
//             char = lowercaseChars[charIndex];
//         }
//         result += char;
//     }
//     return result;
// }

// const manualIncludes = (text, search) => {
//     for (let i = 0; i <= text.length - search.length; i++) {
//         let found = true;
//         for (let j = 0; j < search.length; j++) {
//             if (text[i + j] !== search[j]) {
//                 found = false;
//                 break;
//             }
//         }
//         if (found) {
//             return true;
//         }
//     }
//     return false;
// }

// const name = [
//     'Abigail', 'Alexandra', 'Alison',
//     'Amanda', 'Angela', 'Bella',
//     'Carol', 'Caroline', 'Carolyn',
//     'Deirdre', 'Diana', 'Elizabeth',
//     'Ella', 'Faith', 'Olivia', 'Penelope'
// ];

// const filterNamesBySearch = (search, limit) => {
//     const hasil = [];
//     for (let i = 0; i < name.length; i++) {
//         let nameLower = toLowerCase(name[i]);
//         let searchLower = toLowerCase(search);
//         if (manualIncludes(nameLower, searchLower)) {
//             hasil[hasil.length] = name[i];
//             if (hasil.length >= limit) {
//                 break;
//             }
//         }
//     }
//     return hasil;
// }

// const searchNames = (search, limit, callback) => {
//     const hasil = filterNamesBySearch(search, limit);
//     callback(hasil)
// }

// const show = (results) =>{
//     return console.log(results)
// }

// searchNames("an", 3, show);

// dengan forEach
const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];

const toLowerCase = (search) => {
    const searchLower = search.toLowerCase();
    return searchLower;
};

const searchName = (search, limit, cb) => {
    const searchLower = toLowerCase(search);
    const hasil = [];
    name.forEach(name => {
        if (name.toLowerCase().includes(searchLower)) {
            hasil.push(name);
        }
    });
    cb(hasil, limit);
}

const hasilSearch = (quote, limit) => {
    const result = [];
    quote.forEach((name, index) => {
        if (index < limit) {
            result.push(name);
        }
    });
    console.log(result);
}

searchName("an", 3, hasilSearch);


