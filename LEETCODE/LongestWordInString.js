const words = process.argv.slice(2);

function findLongestWord(words) {
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  console.log("Longest word:", longestWord);
}

findLongestWord(words);