// arguments keyword
function sum() {
  let sum = 0;
  Array.from(arguments).forEach(el => {
    sum += el;
  });
  
  return sum;
}

//rest operator
function sum2(...nums) {
  let sum = 0;
  nums.forEach( (el) => {
    sum += el;
  });
  
  return sum;
}

// arguments
Function.prototype.myBind = function(ctx) {
  const other_args = Array.from(arguments).slice(1, arguments.length);
  
  return (...callArgs) => {
    return this.apply(ctx, other_args.concat(callArgs));
  };
};


// rest operator
Function.prototype.myBind = function(ctx, ...other_args) {
  return (...callArgs) => {
    return this.apply(ctx, other_args.concat(callArgs));
  };
};


function curriedSum(numArgs) {
  const numbers = [];
  
  function _curriedSum(num) {
    numbers.push(num);
    
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach( (el) => {
        sum += el;
      });
      
      return sum;
    } else {
      return _curriedSum;
    }
  }
  
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  let args = [];
  const self = this;
  
  function _curry() {
    [...arguments].forEach(el => {
      args.push(el);
    });
    if (args.length === numArgs) {
      // return self(...args);
      return self.apply(self, args);
    } else {
      return _curry;
    }
  }
  
  return _curry;
};

// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// 
// let f1 = sumThree.curry(3);
// console.log(f1 = f1(4));
// console.log(f1 = f1(20));
// console.log(f1 = f1(6));




