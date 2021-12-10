const maxBigInt = {
  maximum : Number.MAX_SAFE_INTEGER,
  max : function() {
    const array = [];
    let bigest = 0;
    for( value of arguments){
      if(value > this.maximum || value === "")
        return "Big Error"
    }
    if (arguments.length !== 0) {
        for (let i = 0; i < arguments.length; i++) {
            if(typeof arguments[i] === 'string'){
              array[i] = Number(arguments[i])
            }
          else{array[i] = arguments[i]}
          if (parseInt(array[i]) == array[i]) {
              if (typeof array[i] !== BigInt) {
                array[i] = BigInt(array[i]);
              }
            }else {
              throw err;
            }
          } 
          //the bigest
          array.map((el) => (el > bigest ? (bigest = el) : 0)); 
          if (bigest > this.maximum){
            throw err
          }
            return BigInt(bigest)
    }else {
      return null;
    }
  } 
  };
  
  try {
    console.log(maxBigInt.max(1n, 10n, 5n)); //➞ 10n
    console.log(maxBigInt.max("10", 5n, 1)); //➞ 10n
    console.log(maxBigInt.max()); //➞ null
    console.log(maxBigInt.max(2 ** 53 - 1)); //➞ 9007199254740991n
    console.log(maxBigInt.max(2 ** 53)); // ➞ "Big Error"
    console.log(maxBigInt.max("10" / 2)); //➞ 5n
    console.log(maxBigInt.max(10 - 12, 10 - 10, 10 - 11)); //➞ 0n
    console.log(maxBigInt.max(0n)); //➞ 0n
    console.log(maxBigInt.max("")); //➞ "Big Error"
    console.log(maxBigInt.max("10" / 3)); //➞ "Big Error"
  } catch (err) {
    console.log("Big Error");
  }
  