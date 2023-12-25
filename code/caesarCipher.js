export default function caesarCipher(str, sf) {
  if(typeof str !== 'string')return "Not a String";
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const shiftedAlphabet = alphabet.slice(sf) + alphabet.slice(0, sf);

  return str.split('').map(c => {
    const index = alphabet.indexOf(c.toLowerCase());
    return index !== -1 ? shiftedAlphabet[index] : c; // Preserve non-alphabetic characters
  }).join('');
} 
