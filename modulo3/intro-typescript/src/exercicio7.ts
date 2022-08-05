function dnaToRna(dna: string):string {
  const rna: string = dna.split("").map((char: string) => {
    if (char === 'A') return "U";
    if (char === 'T') return "A";
    if (char === 'G') return "C";
    if (char === 'C') return "G";
}).join().replace(/,/g, "");
 return rna;
}