export function toRna(dna_string: string): string {
  const DNA: string[] = ["G", "C", "T", "A"];
  const RNA: string[] = ["C", "G", "A", "U"];
  let dna_list: string[] = dna_string.split("");
  let rna_list: string[] = [];

  for (const letter of dna_list) {
    if (DNA.includes(letter)) {
      rna_list.push(RNA[DNA.indexOf(letter)]);
    } else {
      throw "Invalid input DNA.";
    }
  }
  return rna_list.join("");
}
