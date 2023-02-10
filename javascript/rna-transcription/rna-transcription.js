//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let dnaArray = dna.split("");
  let rnaArray = [];
  dnaArray.forEach(element => {
    switch (element) {
      case "G":
        rnaArray.push("C")
        break;
      case "C":
        rnaArray.push("G")
        break;
      case "T":
        rnaArray.push("A")
        break;
      case "A":
        rnaArray.push("U")
        break;
      default:
        break;
    }
  });
  return rnaArray.join("");
};
