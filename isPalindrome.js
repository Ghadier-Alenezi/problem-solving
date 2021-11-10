function isPalindrome(x) {
  // your code here
  // const str = x.toLowerCase()
  // let length = str.length -1
//   for (i = 0; i < str.length; i++) {
//     if (str[i] !== str[length - i]) {
//       return false;
//     }
//   }
// return true
// }
const reverse = x.split("").reverse().join("").toLowerCase()
return x.toLowerCase() === reverse? true : false
}
