
// // Object Destructuring
// const person = {
//     name: 'Yuta',
//     age: 22,
//     location: {
//         city: 'San Jose',
//         temp: 5
//     }
// }

// const { name: firstName = 'Anonymous', age } = person;

// const { city, temp: temperature } = person.location;

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const { name: publisherName = 'Self-Publisher' } = book.publisher;

// console.log(publisherName);


// Array Destructuring

const address = ['1229 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address // array destructuring
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];

const [itemName, , itemCost] = item;

console.log(`A medium ${itemName} costs ${itemCost}`);