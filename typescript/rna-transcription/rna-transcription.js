export function toRna(dna_string) {
    const DNA = ["G", "C", "T", "A"];
    const RNA = ["C", "G", "A", "U"];
    let dna_list = dna_string.split("");
    let rna_list = [];
    for (const letter of dna_list) {
        if (DNA.includes(letter)) {
            rna_list.push(RNA[DNA.indexOf(letter)]);
        }
        else {
            throw "Invalid input DNA.";
        }
    }
    return rna_list.join("");
}
