// Only change code below this line
let shoppingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5],
]);

const arrKey = [];
for (let key of shoppingList.keys()) {
    arrKey.push(key);
    console.log(`groceries: ${key}`);
}

const arrValue = [];
for (let val of shoppingList.values()) {
    arrValue.push(val);
    console.log(`amount: ${val}`);
}

for (let entrie of shoppingList.entries()) {
    console.log(entrie);
}

// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };