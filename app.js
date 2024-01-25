// SELECT ALL UI ELEMENTS
const wordCount = document.querySelector(".word-count");
const charCount = document.querySelector(".char-count");
const inputField = document.querySelector(".text-input");

// HELPER FUNCTIONS
const countChars = function (str) {
  const filteredStr = str.split("").filter((char) => char !== "\n");
  return filteredStr.length;
};

inputField.addEventListener("keyup", () => {
  charCount.textContent = countChars(inputField.value);
});

inputField.addEventListener("paste", () => {
  charCount.textContent = countChars(inputField.value);
});
