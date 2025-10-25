// Spread Operator

// Spread Opertor is nothing but takes a group arguments and try to spread into indivisual

//function defination
function sumOne(a, b) {
    return a + b;
  }
  
  let myarr = [9, 5];
  console.log(sumOne(myarr)); // 9,5undefined
  
  // To deal with such issue
   console.log(sumOne(...myarr)); // 14
  
  /*  Rest Operator    */
  
  // Menas it can takes indivisual value and bunch them together into array
  
  function sumTwo(...args) {
    let sum = 0;
    for (let i of args) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumTwo(1, 2, 3, 3, 5, 6, 7));  //27

  /* ------------------------------------------------------------------------------------------------------------------------- */

/*   what is use of Object.assign  */
// From Object assign we can copy one obj into another object
let obj = {};
console.log(Object.assign(obj, { a: 1, b: 2 }, { c: 1, d: 2 }));
// {a: 1, b: 2, c: 1, d: 2}
  