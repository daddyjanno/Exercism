//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const convert = (number) => {
//   let result = "";
//   if (!(number%3)) {
//     result += "Pling";
//   }
//   if (!(number%5)) {
//     result += "Plang";
//   }
//   if (!(number%7)) {
//     result += "Plong";
//   }
//   if (number%3 && number%5 && number%7){
//     result += number
//   }
//   return result;
// };

export const convert = (number) => {
  return ((["Pling"][number%3] || "") + (["Plang"][number%5] || "") + (["Plong"][number%7] || "") || number.toString())
}
