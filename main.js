var api = {};

function combineIt(words, word){
  return words + word
}

function splitIt(word){
  return word.split('');
}

api.fanOut = function(input, fn) {
  result = []
  for (i in input) {
    result.push(fn(input[i]))
  }
  return result;
};

api.funnel = function(input, fn, startValue){
  // TODO: your implementation here.
  var result = startValue
  for (i of input) {
     result = (fn(result, i))
  }
  return result
};

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

api.numberOfChars = function(input){
  // TODO: your implementation here
  result = api.funnel(input, combineIt, "").length
  return result;
};

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

module.exports = api;
