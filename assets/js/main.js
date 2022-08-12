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
            console.log('val', val.toUpperCase());
            console.log('key', key);
            console.log('arr', arr);
        });
console.log(newGetraenke);

let ArrNewGetraenke = getraenke.map(
    ArrMyFn = (val, key, arr) => {
        console.log('val', val.toUpperCase());
        console.log('key', key);
        console.log('arr', arr);
    });
console.log(ArrNewGetraenke);

