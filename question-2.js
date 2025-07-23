// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

inventory[0]["quantity"] = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 })
let totelPrice = 0;
for (let i in inventory){
  totelPrice += inventory[i]["price"] * inventory[i]["quantity"]
}

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totelPrice} บาท`);