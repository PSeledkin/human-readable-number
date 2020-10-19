module.exports = function toReadable (number) {
  let readableString = "";
  const basicNumbers = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty ",
    30: "thirty ",
    40: "forty ",
    50: "fifty ",
    60: "sixty ",
    70: "seventy ",
    80: "eighty ",
    90: "ninety ",
  };
  const units = number % 10;
  const decades = Math.floor((number % 100) / 10);
  const hundreds = Math.floor((number % 1000) / 100);
  if (number === 0) {
    readableString += "zero";
  }
  if (hundreds > 0 && hundreds < 10) {
    readableString += basicNumbers[hundreds] + " hundred ";
  }
  if (decades >= 2) {
    readableString += basicNumbers[decades + "0"];
    readableString += basicNumbers[units];
  }
  if (decades === 1) {
    if (decades < 2 && units !== 0) {
      readableString += basicNumbers[decades + "" + units];
    }
    else {
      readableString += basicNumbers[decades + "0"];
    }
  }
  if (decades === 0) {
    readableString += basicNumbers[units];
  }

  return readableString.trim();
}
