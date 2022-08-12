let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

let newGetraenke =
    getraenke.map(
        function myFn(val, key, arr) {
            console.log('val: ', val.toUpperCase());
            console.log('key: ', key);
            console.log('arr: ', arr);
        });
console.log('newGetraenke: ', newGetraenke);

let ArrNewGetraenke = getraenke.map(
    ArrMyFn = (val, key, arr) => {
        console.log('val: ', val.toUpperCase());
        console.log('key: ', key);
        console.log('arr: ', arr);
    });
console.log('ArrNewGetraenke: ', ArrNewGetraenke);


console.log("----------------------------------------");

let upperDrinks = getraenke.map((item) => {
    console.log(item);
    return item.toUpperCase()
});

console.log('upperDrinks: ', upperDrinks);

