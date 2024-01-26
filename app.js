// SELECT ALL UI ELEMENTS
const wordCount = document.querySelector(".word-count");
const charCount = document.querySelector(".char-count");
const inputField = document.querySelector(".text-input");
const twitterLimit = document.querySelector(".twitter-count");
const facebookLimit = document.querySelector(".facebook-count");

inputField.addEventListener("input", () => {
  // find the number of chars in the textarea
  const chars = inputField.value.length;
  const twitterCharsLeft = 280 - chars;
  const facebookCharsLeft = 2200 - chars;

  charCount.textContent = chars;
  twitterLimit.textContent = twitterCharsLeft;
  facebookLimit.textContent = facebookCharsLeft;
});

inputField.addEventListener("input", () => {
  wordCount.textContent = countWords(inputField.value);
});
