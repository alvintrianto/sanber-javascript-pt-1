//Define Fungsi
function namaFungsi(){
    console.log("Hello World!");
 }

 //Hello world

 function sayHello(nama){
    console.log("Hello " + nama + "!");
 }
 
 function kali(a, b){
    hasilKali = a * b;
    console.log("Hasil kali a*b = " + hasilKali);
 }
 

module.exports = { namaFungsi, sayHello, kali }