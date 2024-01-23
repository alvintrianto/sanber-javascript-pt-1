//import fungsi dari file lain
const { namaFungsi, sayHello, kali } = require("./fungsi");
const { car } = require("./property");



    //panggil fungsinya
    namaFungsi()
    sayHello("Ujang")
    kali(1,2)

    //Import Object & Access Object
    console.log(car.type)
    car.stop("Veloz")
    car.stop(car.type)
    car.start()
