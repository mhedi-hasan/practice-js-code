const today = new Date();
const date = new Date("2050-10-20");
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());

const saecipicDate = new Date(2091, 0, 26);
console.log(saecipicDate);
saecipicDate.setMonth(10);
console.log(saecipicDate.toLocaleString('en-GB'));


//unix epoc