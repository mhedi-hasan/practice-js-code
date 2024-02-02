//--------- slice use kore output ber kora holo ------------
// slice er mane holo kono 1 ta bodo word ba line er modde jodi niddisto (fixed) kono ba kichu value ke dekhano lage tahole oi value er index number use kore slice er maddome ber kora hoy.

const address = "Bangladesh";
console.log(address.length);
const part = address.slice(0, 6);
console.log(part);
console.log(part.length);

//------- split er use dekhano holo --------------
// split er mane holo kono 1 ta variable ke jodi kono jay alada alada vabe coma(,) ba kono okkhor er samne break korar dorkar pore tahole split use kora hoy.
const country = "Our country name is Bangladesh. It is a very nice country.";
console.log(country.split("a"));
// -------------------------------------------
const fullName = "hasan,rokib,mehedi,jihad,shohan,raihan";
const fullSeme = fullName.split(",");
console.log(fullSeme);
// ---------------------------------------------
// join er use dekhano holo
// 1 ta variable ke onek vabe join kora jay ta niche deowa holo

const realName = ["hasan", "rokib", "mehedi", "jihad", "shohan", "raihan"];
console.log(realName.join());
console.log(realName.join('_'));
console.log(realName.join('-'));
console.log(realName.join('|'));
console.log(realName.join(' | '));
console.log(realName.join('  '));
