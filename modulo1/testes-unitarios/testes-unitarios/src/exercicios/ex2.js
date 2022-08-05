export function checaPalindromo(frase) {
  return frase === frase.split('').reverse().join('');
}

// export function checaPalindromo(frase) {
//   frase = frase
//     .toLowerCase()
//     .replace('-', '')
//     .trim()
//     .replace(/\s+/g, '')
//     .split('')
//     .join('');

//   return frase === frase.split('').reverse().join('');
// }
