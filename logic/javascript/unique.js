var angka = ["5", "1", "2", "2", "2", "2"];
var unique = angka.filter((item, i, arr) => arr.indexOf(item) === i);
console.log(unique);