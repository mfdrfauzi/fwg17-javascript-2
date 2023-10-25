//1.Filter
// filter()
// metode filter digunakan untuk membuat array baru yang isinya adalah elemen-elemen yang lolos uji didalam fungsi filter.
// Contoh kasus
console.log("Contoh Kasus Filter")
const num1 = [1,2,3,4,5,6];
const ganjil = num1.filter(num1 => num1 % 2 === 0);
console.log(ganjil);

//2. forEach
// forEach()
// metode forEach digunakan untuk menjalankan fungsi pada setiap elemen / isi dalam array. metode ini tidak membuat array atau memperbarui array baru. namun hanya untuk iterasi saja atau perulangan pada setiap elemen array, dan menjalankan fungsi atau kondisi hanya pada masing-masing array.

//contoh penulisan
// array.forEach(function(nilai, index, array) {
    // Code to be executed for each element
//});

// disini nilai sebagai elemen dalam iterasi(loop)
// index sebagai indexnya
// array sebagai array yang diiterasi

//Contoh kasus
console.log("Contoh Kasus forEach()")
const num2 = [1, 2, 3, 4, 5];

num2.forEach(function(num2, index) {
    console.log(`Element ${index}: ${num2}`);
});

// hasilnya mencetak index dan elemen array nya

//3. find
// find()
// metode find digunakan saat mencari elemen yang memenuhi kondisi yang ditentukan, dimulai dari index pertama

//contoh kasus
console.log("Contoh Kasus find()")
const umur = [25, 30, 18, 12, 40];
const adultAge = umur.find(umur => umur >= 18);
console.log(adultAge)
// adultAge akan berisi 25 (elemen pertama yang memenuhi syarat)

//4. reduce
// reduce()
// metode ini digunakan untuk menggabungkan seluruh elemen dalam array menjadi satu nilai tunggal dengan menerapkann fungsi pada setiap elemen array. 
// format penulisan reduce()
/* array.reduce(function(accumulator, currentValue) {
    // code
    return accumulator;
}, initialValue); */
// accumuator untuk menyimpan hasil sementara dari pengurangan
// currentValue untuk elemen dalam iterasi
// initialValue untuk nilai awal akumulator (opsional)

//contoh kasus
console.log("Contoh Kasus reduce()")
const num3 = [1, 2, 3, 4, 5];

const sum = num3.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output akan 15 karena menjumlahkan semua isi/elemen pada array num3 dengan nilai awal / nilai sementara 0

//5. indexOf
// indexOf()
// indexOf digunakan untuk mencari elemen pertama dari index yang ditentukan.
// syntax indexOf()
// array.indexOf(searchElement, fromIndex);

// contoh kasus
console.log("Contoh kasus indexOf()")
const buah = ["apple", "banana", "cherry", "apple"];
const index1 = buah.indexOf("cherry");
const index2 = buah.indexOf("orange");

console.log(index1); 
console.log(index2); 

//6. every
// every()
// every() digunakan untuk mengecek apakah isi dari array sesuai dengan kondisi yang ditentukan pada saat fungsi dijalankan.
// syntax every()
// array.every(function() {
    // Kondisi yang harus dipenuhi
   // return kondisi;
// });
// output akan bernilai true atau false

//contoh kasus
console.log("Contoh kasus every()")
const num4 = [2, 4, 6, 8, 10];
const genap = num4.every(function(kondisi) {
    return kondisi % 2 === 0;
});

console.log(genap); 

//7. slice
// slice()
// slice digunakan untuk membuat array baru atau salinan array dari sebagian atau semua elemen dari array tanpa mengubah elemen dari array aslinya.
// syntax slice()
// array.slice(start, end);
// start sebagai batas index awal, dan end sebagai batas index akhir

//contoh kasus
console.log("Contoh kasus slice()")
const fruits1 = ["apple", "banana", "cherry", "pineapple", "mango"];
const slicedFruits = fruits1.slice(1, 4);

console.log(slicedFruits); // Output akan menjadi ["banana", "cherry", "date"]

//8. shift
// shift()
// shift digunakan untuk mengahapus elemen pertama dalam array dan menyimpan elemen tersebut pada variable. jadi array sebelumnya berisi elemen elemen tanpa elemen yang sudah di shift

//contoh kasus
console.log("Contoh kasus shift()")
const fruits2 = ["apple", "banana", "cherry"];
const removedFruit = fruits2.shift();

console.log(removedFruit); 
console.log(fruits2); 

//9. eval
// eval()
// eval digunakan untuk menjalankan string sebagai fungsi atau kode dalam java script.
// contoh kasus
console.log("Contoh kasus ebal()")
const x = 10;
const y = 20;
const operation = "x + y";

const result = eval(operation);
console.log(result); 

//10. concat
// concat()
// concat digunakan pada saat ingin menggabungkan 2 array atau lebih. yang nantinya array yang baru akan berisi elemen-elemen dari array sumber yang ditentukan sesuai dengan kondisi
//contoh kasus
console.log("Contoh kasus concat()")
const array1 = ["A", "B", "C"];
const array2 = [1, 2, 3];
const concatArray = array1.concat(array2);

console.log(concatArray);
