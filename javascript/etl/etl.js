//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  let result = {};
  for (const score in old) {
    console.log(score);
    old[score].forEach(letter => {
      result[letter.toLowerCase()] = Number(score);
    });
  }
  return result;
};
