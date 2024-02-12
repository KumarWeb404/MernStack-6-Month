// Assignment 2 of JavaScript
// 1. Create an array named i_am_array of 20 elements,
// a) Print i_am_array
// b) Print each element of i_am_array
// c) Create a new array named teen_guna which stores each element of i_am_array multiplied
// by 3
// d) Print teen_guna array
// e) Print the total length of teen_guna array
// f) Print the type of teen_guna array as well as i_am_array
// e.g. (teen_guna type is: _________) Print in this way

// 2. Create an array of 40 elements named as array_forty
// a) Print array_forty with its length
// b) Create a new array named as chotu_array which stores only the element of array_forty
// which are divisible by 3
// c) Print chotu_array and its length
// Can you see the difference between teen_guna and chotu_array, we have used two different
// methods
// Please write down at your notebook which method you have used to solve question 1 and
// question 2

// 3. Create an array of 20 elements named as array_twenty
// a) Print array_twenty and its length
// b) Print each element of array_twenty multiplied by three (use foreach method)
// You will observe:
// Filter-&gt; creates array of data which is belonged together,
// Map-&gt; Creates array of each individual element,
// Foreach-&gt;does not creates array

// 4. Create an object named food and add two keys veg and non-veg in it,
// Veg key further contains two keys – vegetarian and vegan,
// Vegetarian contains key- value – r for rice , m for milk, h for honey
// Vegan contains – s for spinach, p for peas
// Non- veg key contains two keys- non-vegetarian and eggetarian
// Non-vegetarian contains key-value- ck for chicken kabab and bck for butter chicken
// While eggetarian contain – ec for egg curry and be for boiled eggs
// Print each value that is output should be
// Rice
// Milk
// Honey
// Spinach
// Peas
// Chicken kabab
// Butter chicken

const createArr = function (length) {
  return Array.from({ length: length }, (_, i) => i + 1);
};

////////////START OF 1
const createString = function (name, type) {
  return `${name} type is: ${type}`;
};
const i_am_array = createArr(20);
const teen_guna = i_am_array.map((element) => element * 3);

console.log(i_am_array);
i_am_array.forEach((element) => console.log(element));
console.log(teen_guna);
console.log(teen_guna.length);
console.log(createString('i_am_array', typeof i_am_array));
console.log(createString('teen_guna', typeof teen_guna));
////////////END OF 1

////////////START OF 2
const createString2 = function (arrayName, array) {
  return `${arrayName}= [${array}] has length= ${array.length}`;
};
const arrayForty = createArr(40);
const chotuArray = arrayForty.filter((element) => element % 3 === 0);

console.log(createString2('arrayForty', arrayForty));
console.log(createString2('chotuArray', chotuArray));
////////////END OF 2

////////////START OF 3
const array_twenty = createArr(20);
console.log(createString2('array_twenty', array_twenty));
array_twenty.forEach((element) => console.log(element * 3));
////////////END OF 3

////////////START OF 4
const food = {
  veg: {
    vegetarian: {
      r: 'Rice',
      m: 'Milk',
      h: 'Honey',
    },
    vegan: {
      s: 'Spinach',
      p: 'Peas',
    },
  },

  nonVeg: {
    nonVegetarian: {
      ck: 'Chicken kabab',
      bck: 'Butter chicken',
    },
    eggetarian: {
      ec: 'Egg cury',
      be: 'Boiled eggs',
    },
  },
};

const {
  veg: {
    vegetarian: { r: rice, m: milk, h: honey },
    vegan: { s: spinach, p: peas },
  },

  nonVeg: {
    nonVegetarian: { ck: chickenK, bck: chickenB },
  },
} = food;

console.log(rice, milk, honey, spinach, peas, chickenK, chickenB);
////////////END OF 4
