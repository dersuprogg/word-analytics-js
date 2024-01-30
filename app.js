// SELECT ALL UI ELEMENTS
const wordCount = document.querySelector(".word-count");
const charCount = document.querySelector(".char-count");
const inputField = document.querySelector(".text-input");
const twitterLimit = document.querySelector(".twitter-count");
const facebookLimit = document.querySelector(".facebook-count");

inputField.addEventListener("input", () => {
  let wordsArray = inputField.value.trim().split(" ");
  let words = wordsArray.filter((word) => word !== "").length;

  if (inputField.value.length === 0) {
    words = 0;
  }
  const chars = inputField.value.length;
  const twitterCharsLeft = 280 - chars;
  const facebookCharsLeft = 2200 - chars;

  if (twitterCharsLeft < 0) {
    twitterLimit.classList.add("limit-exceed");
  } else {
    twitterLimit.classList.remove("limit-exceed");
  }

  if (facebookCharsLeft < 0) {
    facebookLimit.classList.add("limit-exceed");
  } else {
    facebookLimit.classList.remove("limit-exceed");
  }

  charCount.textContent = chars;
  twitterLimit.textContent = twitterCharsLeft;
  facebookLimit.textContent = facebookCharsLeft;
  wordCount.textContent = words;
});
