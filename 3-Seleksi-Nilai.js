const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal > nilaiAkhir) {
        return console.log("Nilai akhir harus lebih besar dari nilai awal!");
    }
    if (dataArray.length <= 5) {
        return console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    }
    const hasilSeleksi = [];
    for (let i = 0; i < dataArray.length; i++) {
        const nilai = dataArray[i];
        if (nilai >= nilaiAwal && nilai <= nilaiAkhir) {
            hasilSeleksi[hasilSeleksi.length] = nilai;
        }
    }
    if (hasilSeleksi.length === 0) {
        return console.log("Nilai tidak ditemukan");
    }
    for (let i = 0; i < hasilSeleksi.length - 1; i++) {
        for (let j = i + 1; j < hasilSeleksi.length; j++) {
            if (hasilSeleksi[i] > hasilSeleksi[j]) {
                const temp = hasilSeleksi[i];
                hasilSeleksi[i] = hasilSeleksi[j];
                hasilSeleksi[j] = temp;
            }
        }
    }
    return console.log(hasilSeleksi);
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(4, 17 , [2, 25, 4]);
seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);


// dengan Built-in Function
// const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) =>{
//     if (nilaiAwal > nilaiAkhir){
//         return console.log("Nilai akhir harus lebih besar dari nilai awal!")
//     }

//     if (dataArray.length <= 5){
//         return console.log("Jumlah angka dalam dataArray harus lebih dari 5")
//     }

//     const hasilSeleksi = dataArray.filter((nilai) => nilai >= nilaiAwal && nilai <= nilaiAkhir)

//     if (hasilSeleksi.length === 0){
//         return console.log("Nilai tidak ditemukan")
//     }

//     return console.log(hasilSeleksi.sort())
// }

// seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
// seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
// seleksiNilai(4, 17 , [2, 25, 4])
// seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
