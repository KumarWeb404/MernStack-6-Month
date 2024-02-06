'use strict';
let locations = ['Amritsar', 'Delhi', 'Mumbai', 'Bangalore', 'Agra'];

console.log('locations =' + locations);
console.log('1.', typeof locations, locations.length);

console.log('2.', locations[2]);

console.log('3.', locations.push('Rajasthan', 'Kashmir', 'Bhutan'), locations);

console.log('4.', locations.pop(), locations);

for (let i = 0; i < locations.length; i++) {
  console.log(locations[i]);
}

let friends = ['Ajay', 'Gaurav', 'Rithik', 'Tanveer', 'Rahul'];
console.log('1.', friends, friends.length);

friends.unshift('Harman', 'Sukhpal');
console.log('2.', friends);

friends.pop();
console.log('3.', friends);

friends[3] = 'Bill Gates';
console.log('4.', friends);

for (let index in friends) {
  console.log(friends[index]);
}

let dishList = [
  'Teriyaki Salmon',
  'Quinoa Bowl',
  'Shrimp Scampi',
  'Caprese Salad',
  'Beef Tacos',
  'Pasta Primavera',
  'Tuna Melt',
  'Caesar Salad',
  'Veggie Wrap',
  'Chicken Stir-Fry',
];

console.log(dishList);
console.log('1.', dishList[0], dishList[4], dishList[dishList.length - 1]);

for (let value of dishList) {
  console.log(value);
}
console.log(dishList.length);
