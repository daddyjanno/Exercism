//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, arrayOfWords) => {
  let result = [];
  let wordLetters = word.toLowerCase().split("");

  for (const element of arrayOfWords) {

    let elementLetters = element.toLowerCase().split("");

    if (wordLetters.sort().join("") === elementLetters.sort().join("") && word.toLowerCase() !== element.toLowerCase()) {
      result.push(element)
    }
  }
  return result;

};
