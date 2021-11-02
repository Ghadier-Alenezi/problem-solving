// const fizzBuzz = (n) => {
//   for (let i = 1; i < n; i++) {
//     let x = i;
//     console.log(x);
//     if (x % 3 === 0) {
//         console.log( 'fizz');
//         { continue; }
//     }
//     else if(x % 5 === 0){
//         console.log('buzz');
//         { continue; }
//     }
//     else if(x % 3 === 0 && x % 5 === 0){
//         console.log('fizzBuzz');
//         { continue; }
//     }
//   }
// };
// fizzBuzz(16);

// I think I need to use switch
const fizzBuzz = (n) => {
  for (let i = 1; i < n; i++) {
    let x = i;
    switch (true) {
      case x % 15 === 0:
        console.log("fizzBuzz");
        continue;
      case x % 3 === 0:
        console.log("fizz");
        continue;
      case x % 5 === 0:
        console.log("buzz");
        continue;
    }
    console.log(i);
  }
};
fizzBuzz(16);
