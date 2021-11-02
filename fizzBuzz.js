const fizzBuzz = (n) => {
  for (let i = 1; i < n; i++) {
    if (n % 3 === 0) {
        return 'fizz';
    }
    else if(n % 5 === 0){
        return 'buzz'
    }
    else if(n % 3 === 0 && n % 5 === 0){
        return 'fizzBuzz'
    }
  }
  return n;
};
