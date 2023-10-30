const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal > nilaiAkhir) {
        return console.log("Nilai akhir harus lebih besar dari nilai awal!");
    }
    if (dataArray.length <= 5) {
        return console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    }
    let results = [];
    for (let i = 0; i < dataArray.length; i++) {
        const nilai = dataArray[i];
        if (nilai >= nilaiAwal && nilai <= nilaiAkhir) {
            results = [...results,dataArray[i]];
        }
    }
    if (results.length === 0) {
        return console.log("Nilai tidak ditemukan");
    }
    const selectionSort = (arr) => {
        const len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                const temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
        return arr;
    };
    const sortedResults = selectionSort(results)
    return console.log(sortedResults);
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(4, 17 , [2, 25, 4]);
seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);


// dengan Built-in Function
// const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
//     if (nilaiAwal > nilaiAkhir) {
//         return console.log("Nilai akhir harus lebih besar dari nilai awal!");
//     }

//     if (dataArray.length <= 5) {
//         return console.log("Jumlah angka dalam dataArray harus lebih dari 5");
//     }

//     const hasilSeleksi = [];
//     dataArray.forEach((nilai) => {
//         if (nilai >= nilaiAwal && nilai <= nilaiAkhir) {
//             hasilSeleksi.push(nilai);
//         }
//     });

//     if (hasilSeleksi.length === 0) {
//         return console.log("Nilai tidak ditemukan");
//     }

//     hasilSeleksi.sort((a, b) => a - b);
//     return console.log(hasilSeleksi);
// };

// seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(4, 17, [2, 25, 4]);
// seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);



