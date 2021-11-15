// In this kata you should simply determine, whether a given year is a 
// leap year or not. In case you don't know the rules, here they are:
// 
// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years


// function isLeapYear(year) {
//   // year 1984 failed & year 2000 failed
//   if(year % 4 == 0 && year % 100 != 0){
//     if(year % 400 ==0){
//       return true;
//     } 
//   }else{
//       return false;
//     }
// }

// function isLeapYear(year) {
//   if(year % 4 == 0  &&  year % 400 !=0 && year % 100 !=0){
//     return true;
//   }else{
//     return false;
//   }
// }
// // this failed year 2000

function isLeapYear(year) {
    //   this take me about 20 mins but finally passed!
      if(year % 400 ==0 && year % 100 != 0){
        return true;
      } else{
        if(year % 4 == 0 && year % 100 != 0){
          return true;
        }
        else{
          if(year % 400 ==0 && year %40 ==0)
            {
              return true
            } else{
              return false;
            }
        }
      }
    }