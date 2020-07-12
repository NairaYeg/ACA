function odds(numb) {
    let last = numb % 10;
    if (numb < 10 && numb % 2 !== 0) {
      return true;
    }
    if (last % 2 === 0) {
      return false;
    }
    return odds((numb - (numb % 10)) / 10);
  }
  
  console.log(odds(2111330)); //false
  
  console.log(odds(7791)); //true
  
  console.log(odds(5)); //true
  