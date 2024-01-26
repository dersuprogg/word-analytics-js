// SELECT ALL UI ELEMENTS
const wordCount = document.querySelector(".word-count");
const charCount = document.querySelector(".char-count");
const inputField = document.querySelector(".text-input");

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
});

inputField.addEventListener("keyup", () => {
  wordCount.textContent = countWords(inputField.value);
});
