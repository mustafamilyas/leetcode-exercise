const firstTwenty = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const tens = [
  "Zero",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

const tensExponent = {
  3: "Thousand",
  6: "Million",
  9: "Billion",
  12: "Trillion",
  15: "Quadrillion",
  18: "Quintillion",
};

function numberToWords(num: number): string {
    if (typeof num !== "number") return "";
    if (num === 0) return firstTwenty[0];
    let result = "";
    while (num > 0) {
        if (num < 20) {
            result += " " + firstTwenty[num];
            num = 0;
        } else if (num < 100) {
            result += " " + tens[Math.floor(num / 10)];
            num = num % 10;
        } else if (num < 1000) {
            result += " " + firstTwenty[Math.floor(num / 100)] + " Hundred";
            num = num % 100;
        } else {
            const highestExponent = Math.floor(Math.log10(num));
            const exponentRemainder = highestExponent % 3;
            const exponentIndex = highestExponent - exponentRemainder;
            const exponentValue = Math.pow(10, exponentIndex);
            const exponentNumber = tensExponent[exponentIndex];
            const remainder = Math.floor(num / exponentValue);
            result += " " + numberToWords(remainder) + " " + exponentNumber;
            num = num % exponentValue;
        }
    }
    return result.trim();
};