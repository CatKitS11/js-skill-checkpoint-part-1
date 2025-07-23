// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let lowProduct = "";
let lowQuantity = Infinity;
for(let i in inventory){
  if (lowQuantity > inventory[i]["quantity"]) {
    lowQuantity = inventory[i]["quantity"];
    lowProduct = inventory[i]["name"];
  }
}

console.log("สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " +lowProduct+ " ซึ่งมี " +lowQuantity+ " ชิ้น");