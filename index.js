const CharacterAmountRange = document.getElementById("CharacterAmountRange");
const CharacterAmountNumber = document.getElementById("CharacterAmountNumber");
const form = document.getElementById("PasswordGen");
const passdisplay = document.getElementById("passdisplay");
const IncludeUppercaseElement = document.getElementById("IncludeUppercase");
const IncludeNumbersElement = document.getElementById("IncludeNumbers");
const IncludeSymbolsElement = document.getElementById("IncludeSymbols");
const Uppercase_Char_Codes = arrayFromLowToHigh(65, 90);
const Lowercase_Char_Codes = arrayFromLowToHigh(97, 122);
const Number_Char_Codes = arrayFromLowToHigh(48, 57);
const Symbol_Char_Codes = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

CharacterAmountNumber.addEventListener("input", syncCharacterAmount);
CharacterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", e => {
  e.preventDefault();
  const charAmount = CharacterAmountNumber.value;
  const IncludeUppercase = IncludeUppercaseElement.checked;
  const IncludeNumbers = IncludeNumbersElement.checked;
  const IncludeSymbols = IncludeSymbolsElement.checked;
  const password = genpassword(
    charAmount,
    IncludeUppercase,
    IncludeNumbers,
    IncludeSymbols
  );
  passdisplay.innerText = password;
});

function genpassword(
  charAmount,
  IncludeUppercase,
  IncludeNumbers,
  IncludeSymbols
) {
  let charCodes = Lowercase_Char_Codes;
  if (IncludeUppercase) charCodes = charCodes.concat(Uppercase_Char_Codes);
  if (IncludeNumbers) charCodes = charCodes.concat(Number_Char_Codes);
  if (IncludeSymbols) charCodes = charCodes.concat(Symbol_Char_Codes);
  const passchar = [];
  for (let i = 0; i <= charAmount; i++) {
    const charcode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passchar.push(String.fromCharCode(charcode));
  }
  return passchar.join("");
}
function arrayFromLowToHigh(Low, High) {
  const Array = [];
  for (let i = Low; i <= High; i++) {
    Array.push(i);
  }
  return Array;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  CharacterAmountNumber.value = value;
  CharacterAmountRange.value = value;
}
