/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
   let dict = { "1": { "norm": "I", "big": "X", "small": "V" }, "2": { "norm": "X", "big": "C", "small": "L" }, "3": { "norm": "C", "big": "M", "small": "D" }, "4": { "norm": "M", "big": "", "small": "" } }
   let numString = num.toString()
   let numeral = '';
   let length = numString.length;
   for (let i = 0; i < numString.length; i++) {
      let string = '';
      let num = numString[i];
      if (length == 4) {
         string = dict[length].norm.repeat(num);
      } else {
         if (num == 4) {
            string = dict[length].norm + dict[length].small
         }
         else if (num == 9) {
            string = dict[length].norm + dict[length].big
         }
         else if (num < 5) {
            string = dict[length].norm.repeat(num)
         }
         else if (num >= 5) {
            string = dict[length].small + dict[length].norm.repeat(num % 5)
         }
      }
      numeral += string;
      length--
   }
   return numeral;
};