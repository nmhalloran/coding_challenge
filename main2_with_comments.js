poem = ['Mary', 'had', 'a', 'little', 'laaamb']
simpleNumbers = [1, 2, 3]
oneNumber = [-2]
moreNumbers = [31, -11, 27]

function square(input){
  return input * input;
}

function splitIt(word){
  return word.split('');
}

var api = {};

/*
  PART 1: Implement fanOut.

  fanOut - return a new collection of results after applying the
           input function to each item in the input collection.

  args: input - input collection
        fn - function to apply to each item in the collection

  EX:  - fanOut([1, 2, 3], double) -->  [1, 4, 9];

 function double(n) { return n * n; }

  Restrictions:
    - Do not use make any function calls (other than fn and push)
    - You may not use any external libraries

*/

function combineIt(words, word){
  return words + word
}

api.fanOut = function(input, fn) {
  // TODO: your implementation here.
/* This was my first go, but I figured out how to do it without the .map
function.
  var result = input.map(fn);
  return result;
  */
  result = []
  for (i in input) {
    result.push(fn(input[i]))
  }
  return result;
};
console.log(api.fanOut(moreNumbers, square))

// https://github.com/jortiz31/coding_challenge.git



/*
 PART 2: Implement funnel.

 funnel - return an result after applying an accumulation function to
          each item in the collection. Funneling down to a single result.

 args: input - input collection
       fn - function to apply to each item in the collection with
            args accumulation value and current value
       startValue - start the accumulation with this value

 EX:  - funnel([1, 2, 3], add, 0) -->  6;
      - funnel([1, 2], add, 1) --> 4

      function add(total, n) { return total + n; }

 Restrictions:
   - Do not use make any function calls (other than fn and push)
   - You may not use any external libraries

 */

 /* NICK'S Question: this seems to be the quickest way of doing this.
    I was coding it outside of this structure, and I was able to get the
    same result quickly with the following code:
    for (var i of input) {
       startValue += i
    }
    but I had a lot of trouble fitting that format into this code,
    where you had to call an outside function...SOLVED!
*/
api.funnel = function(input, fn, startValue){
  // TODO: your implementation here.
  var result = startValue
  for (i of input) {
     result = (fn(result, i))
  }
  return result
/*  input.reduce(fn, startValue);
  return result; */
};
console.log(api.funnel(poem, combineIt, ""))



/*
 PART 3: Implement distill.

 distill - return a new collection of results after applying the
 predicate function to each item. Only include the item in the result
 if the predicate returns true.

 args: input - input collection
 fn - predicate function to apply to each item in the collection

 EX:  - distill([1, 2, 3], isEven) -->  [2];
      - distill([1, 2, 3], isOdd) -->  [1, 3];
      - distill([1, 2, 3], isNegative) -->  [];

 Restrictions:
 - Do not use make any function calls (other than fn and push)
 - You may not use any external libraries

 */

 function isEven(num){
   return num % 2 === 0;
 }
api.distill = function(input, fn){
  // TODO: your implementation here.
  new_array = []
  for (i of input) {
    if (fn(i)) {
      new_array.push(i)
    }
  }
  return new_array;
};

console.log(api.distill(simpleNumbers, isEven))


/*
 PART 4: Implement numberOfChars.

 numberOfChars - return the number of characters in the input array of strings

 args: input - input collection of strings (words)

 EX:  - numberOfChars(['the']) -->  3;
 - numberOfChars(['the', 'end']) -->  6;

 Restrictions:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries

 */
api.numberOfChars = function(input){
  // TODO: your implementation here
  result = api.funnel(input, combineIt, "").length
  return 0;
};



/*
 PART 5: Implement numberOfCertainChars.

 numberOfCertainChars - return the number of c characters in the input array of strings

 args: input - input collection of strings (words)
       c - the certain character to count

 EX:  - numberOfCertainChars(['the'], 'e') -->  1;
      - numberOfCertainChars(['the', 'end'], 'e') -->  2;

 Restrictions:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries

 */
api.numberOfCertainChars= function(input, c){
// TODO: your implementation here
  var split_letters = api.fanOut(input, splitIt)
  var new_array = []
  console.log(split_letters[0])
  for (i in split_letters) {
    for (j in split_letters[i]) {
      if (split_letters[i][j] === c) {
        new_array += split_letters[i][j]
      }
    }
  }
  return  new_array.length
};

api.numberOfCertainChars(poem, "l")

module.exports = api;
