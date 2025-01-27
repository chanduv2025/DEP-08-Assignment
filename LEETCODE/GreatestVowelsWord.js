const words = process.argv.slice(2);

function findLongestWord(words) {
    let wordWithMostVowels = '';
    let maxVowelCount = 0;
    words.forEach(word => {
      const vowelCount = countVowels(word);
      if (vowelCount > maxVowelCount) {
        maxVowelCount = vowelCount;
        wordWithMostVowels = word;
      }
    });
    console.log(wordWithMostVowels,maxVowelCount)
}

function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    return Array.from(word).filter(letter => vowels.includes(letter)).length;
}


findLongestWord(words);