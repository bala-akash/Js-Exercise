// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] === true) {
//       count++;
//       //   console.log(count);
//     }
//   }
//   console.log(count);
// }
// let count = 0;
// let arrayOfSheep = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];
// countSheeps(arrayOfSheep);

function countSheep(sheepArray) {
  return sheepArray.filter(Boolean).length;
}
const sheepArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

const sheepCount = countSheep(sheepArray);
console.log("Number of sheep present:", sheepCount);

function simpleMultiplication(number) {
  if (number % 2) {
    return number * 9;
  } else {
    return number * 8;
  }
}
console.log(simpleMultiplication(3));

const a = 5;

const b = a % 2;
console.log(b);
