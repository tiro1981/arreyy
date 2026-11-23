// 1. Eng qimmat mahsulot
function getMostExpensiveProduct() {
  let result = products[0]; // birinchisini "eng qimmat" deb olamiz
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > result.price) {
      result = products[i]; // undan qimmati topilsa, almashtiramiz
    }
  }
  return result;
}
console.log("1.", getMostExpensiveProduct());

// 2. Eng arzon mahsulot
function getCheapestProduct() {
  let result = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price < result.price) {
      result = products[i];
    }
  }
  return result;
}
console.log("2.", getCheapestProduct());

// 3. Mahsulotlar soni
function getProductsCount() {
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    count++;
  }
  return count;
}
console.log("3.", getProductsCount());

// 4. ID bo'yicha qidirish
function getProductById(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i]; // topildi, darhol qaytaramiz
    }
  }
  return "Product not found"; // sikl tugadi, topilmadi
}
console.log("4.", getProductById(3));
console.log("4.", getProductById(99));

// 5. Narxi 10 000 000 dan yuqori mahsulotlar
function getExpensiveProducts() {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > 10000000) {
      result.push(products[i]);
    }
  }
  return result;
}
console.log("5.", getExpensiveProducts());

// 6. Ombordagi mahsulotlar (stock > 0)
function getAvailableProducts() {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock > 0) {
      result.push(products[i]);
    }
  }
  return result;
}
console.log("6.", getAvailableProducts());

// 7. Tugagan mahsulotlar (stock === 0)
function getOutOfStockProducts() {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock === 0) {
      result.push(products[i]);
    }
  }
  return result;
}
console.log("7.", getOutOfStockProducts());

// 8. Kategoriya bo'yicha qidirish
function getProductsByCategory(category) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category) {
      result.push(products[i]);
    }
  }
  return result;
}
console.log("8.", getProductsByCategory("laptop"));

// 9. Narxlar yig'indisi
function getTotalPrice() {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = total + products[i].price;
  }
  return total;
}
console.log("9.", getTotalPrice());

// 10. O'rtacha narx
function getAveragePrice() {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = total + products[i].price;
  }
  return total / products.length;
}
console.log("10.", getAveragePrice());

// 11. Narx oralig'i (min va max ham kiradi)
function getProductsByPrice(min, max) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= min && products[i].price <= max) {
      result.push(products[i]);
    }
  }
  return result;
}
console.log("11.", getProductsByPrice(2000000, 10000000));

// 12. Mahsulot mavjudligini tekshirish
function checkProduct(name) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      return true;
    }
  }
  return false;
}
console.log("12.", checkProduct("iPad Air"));
console.log("12.", checkProduct("Nokia 3310"));

// ---------- Users: takrorlarni olib tashlash ----------
const users = [
  { id: 1, name: "Anvar", age: 25, job: "Dasturchi" },
  { id: 1, name: "Anvar", age: 25, job: "Dasturchi" },
  { id: 2, name: "Zilola", age: 22, job: "Dizayner" },
  { id: 2, name: "Zilola", age: 22, job: "Dizayner" },
  { id: 3, name: "Jasur", age: 30, job: "Menejer" },
  { id: 3, name: "Jasur", age: 30, job: "Menejer" },
  { id: 4, name: "Madina", age: 27, job: "Shifokor" },
  { id: 4, name: "Madina", age: 27, job: "Shifokor" },
];

function removeDuplicates() {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    let exists = false; // hali qo'shilmagan deb olamiz
    for (let j = 0; j < result.length; j++) {
      if (result[j].id === users[i].id) {
        exists = true; // id bor ekan, takror
        break;
      }
    }
    if (exists === false) {
      result.push(users[i]);
    }
  }
  return result;
}
console.log("Users:", removeDuplicates());
