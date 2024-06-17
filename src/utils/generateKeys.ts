export const generateRandomKeys = (lenght = 6) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const randomLetters = [];
  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    randomLetters.push(letters[randomIndex]);
  }
  return randomLetters;
}