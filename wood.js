
// 1 ta kaj er jonno koto pes wood lagbe ta ber kroa holo.
// chair ---->5
// table ---->10
// bed ------>50

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    perChairWood = 5;
    perTableWood = 10;
    perBedWood = 50;

  const chariTotalWood = perChairWood * chairQuantity;
  const tableTotalWood = perTableWood * tableQuantity;
  const bedTotalWood = perBedWood * bedQuantity;

    const totalWood = chariTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const total = woodQuantity(1, 1, 2);
console.log("Total wood :", total, "pes");
// -------------------------------------

// ami shopping e ja kichu kinechi tar total price ber kroa holo.
// shirt price --->500
// pant price --->700
// shoe price --->1000

function allCloths(shirtQuantity, pantQuantity, shoeQuantity) {
    perShirt = 500;
    perPant = 700;
    perShoe = 1000;

  const shirtTotalPrice = perShirt * shirtQuantity;
  const pantTotalPrice = perPant * pantQuantity;
  const shoeTotalPrice = perShoe * shoeQuantity;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shirtTotalPrice;
    return totalPrice;
}
const totals = allCloths(2, 1, 1);
console.log("Total cloths price:", totals, "Taka");
