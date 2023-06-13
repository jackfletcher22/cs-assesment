function checkSumToZero(numbers) {
    let seen = new Set();

    for (let num of numbers) {
        if(seen.has(-num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

let numbers = [1, 2, -3, 4, -1];
let result = checkSumToZero(numbers);

function hasUniqueCharacters(word) {
    let charSet = new Set();
    
    for (let char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    
    return true;
}
let word = "hello";
let answer = hasUniqueCharacters(word);

function isPangram(sentence) {
    let alphabetSet = new Set();
  
    for (let char of sentence) {
      if (/[a-z]/i.test(char)) {
        alphabetSet.add(char.toLowerCase());
      }
    }
  
    return alphabetSet.size === 26;
  }
let sentence = "The quick brown fox jumps over the lazy dog.";
let conclusion = isPangram(sentence);


function findLongestWord(words) {
  let longestLength = 0;

  for (let word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }

  return longestLength;
}

let wordList = ["apple", "banana", "kiwi", "watermelon"];
let longestLength = findLongestWord(wordList);
console.log(longestLength); 

wordList = ["cat", "dog", "elephant", "giraffe"];
longestLength = findLongestWord(wordList);

console.log(longestLength);
console.log(result);
console.log(answer);
console.log(conclusion);