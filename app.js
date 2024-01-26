// SELECT ALL UI ELEMENTS
const wordCount = document.querySelector(".word-count");
const charCount = document.querySelector(".char-count");
const inputField = document.querySelector(".text-input");
const twitterLimit = document.querySelector(".twitter-count");
const facebookLimit = document.querySelector(".facebook-count");
// HELPER FUNCTIONS
const countChars = function (str) {
  const filteredStr = str.split("").filter((char) => char !== "\n");
  return filteredStr.length;
};

const countWords = function (str) {
  if (str !== "") {
    return str.trim().split(" ").length;
  } else {
    return 0;
  }
};

inputField.addEventListener("keyup", () => {
  charCount.textContent = countChars(inputField.value);
});

inputField.addEventListener("paste", () => {
  charCount.textContent = countChars(inputField.value);

  const chars = countChars(inputField.value);
  twitterLimit.textContent = 280 - chars;
  facebookLimit.textContent = 2200 - chars;
});

inputField.addEventListener("keyup", () => {
  wordCount.textContent = countWords(inputField.value);
});

inputField.addEventListener("keyup", () => {
  const chars = countChars(inputField.value);
  twitterLimit.textContent = 280 - chars;
});
