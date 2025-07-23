// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = ""; //"SALE20" , "SALE50"
// เริ่มเขียนโค้ดตรงนี้

const calculateTotalPrice = (products,promotionCode) => {
  let totelPrice = 0;
  for(let i in products){
    totelPrice += products[i]["price"] * products[i]["quantity"]
  }
  if(promotionCode === "SALE20"){
    return totelPrice * (1-0.2);
  }else if(promotionCode === "SALE50"){
    return totelPrice * (1-0.5);
  }else{
    return totelPrice
  }
}
console.log(calculateTotalPrice(products,promotionCode))