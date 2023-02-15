//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  let output = []
  let result = new Array(input[0].length);

  for (let i = 0; i < input.length; i++) {
  result[i] = new Array(input.length)
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = input[j][i];
      output.push(result[i][j])
    }
  }
  return output
};
