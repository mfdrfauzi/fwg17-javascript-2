const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];

const searchName = (search, limit, cb) => {
    let hasil = name.filter(name => name.toLowerCase().includes(search.toLowerCase())).slice(0,limit)
    cb(hasil)
}    

const hasilSearch = (hasil) => {
    console.log(hasil)  
}

searchName("an",3,hasilSearch)