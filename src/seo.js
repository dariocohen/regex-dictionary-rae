const pages = {
  "double-vowel-words": {
    title: "Double vowel words",
    regex: "[aeiou][aeiou]",
  },
  "q-in-a-word": {
    title: "Scrabble Words Containing Q",
    regex: "q",
  },
  // "5-letter-words-with-4-consonants": {
  //   title: "5 Letter Words With 4 Consonants",
  //   regex: "",
  // },
  "words-with-4-consonants-in-a-row": {
    title: "Words With 4 Consonants In A Row",
    regex: "[^aeiou]{4}",
  },
  // "5 letter words with an apostrophe": {
  //   title: "5 letter words with an apostrophe",
  //   regex: "",
  // },
  // "5-letter-words-with-b-e-a-d": {
  //   title: "5 Letter Words With b e a d",
  //   regex: "[bead]",
  // },
  // "9 letter words with no repeating letters": {
  //   title: "9 letter words with no repeating letters",
  //   regex: "",
  // },
  "words-with-double-consonants": {
    title: "Words With Double Consonants",
    regex: "([^aeiou])\\1",
  },
  "5-letter-words": { title: "5 Letter Words", regex: "^.{5}$" },
  "7-letter-words": { title: "7 Letter Words", regex: "^.{7}$" },
  "words-ending-in-gry": { title: "Words Ending In gry", regex: "gry$" },
  "words-ending-in-t-o": { title: "Words Ending In t o", regex: "to$" },
  "words-ending-in-o-u-t-h": {
    title: "Words Ending In o u t h",
    regex: "outh$",
  },
  "5-letter-words-ending-in-o-u-r": {
    title: "5 Letter Words Ending In o u r",
    regex: "^..our$",
  },
  "5-letter-word-starting-with-bea": {
    title: "5 Letter Words Starting With b e a",
    regex: "^bea..$",
  },
  "words-beginning-in-str": { title: "Words Beginning in str", regex: "^str" },
  "words-that-start-with-cod": {
    title: "Words That Start With cod",
    regex: "^cod",
  },
  "words-that-start-with-x": {
    title: "Words That Start With x",
    regex: "^x",
  },
  "5-letter-words-beginning-cat": {
    title: "5 Letter Words Beginning cat",
    regex: "^cat..$",
  },
  "words-that-start-with-ion": {
    title: "Words That Start With ion",
    regex: "^ion",
  },
  "5-letter-words-ending-in-e": {
    title: "5 Letter Words Ending In e",
    regex: "^.{4}e$",
  },
  "words-that-start-with-r-h": {
    title: "Words That Start With r h",
    regex: "^rh",
  },
  "5-letter-word-starts-with-c-a": {
    title: "5 Letter Word Starts With c a",
    regex: "^ca...$",
  },
  "words-with-all-vowels-in-order": {
    title: "Words With All Vowels In Order",
    regex: "a.*e.*i.*o.*u",
  },
};

// "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ")

export default pages;
