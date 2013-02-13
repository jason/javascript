module.exports = {
  uniq: function (input) {
    unique_array =  [];

    var first = input.shift();


    while(input.length > 0) {

      if (input.indexOf(first) === -1) {
        unique_array.push(first);
        first = input.shift();
      } else {
        first = input.shift();
      }
     }

     return unique_array;
  },

  two_sum: function (input) {
       for (var i in input) {
        if (i !== 0) {
          if ((input.indexOf(-1 * i)) > 0 ) {
            return true;
            } else if (array.count(0) > 1){

              return true ;
            }
          }
        return false;
    }
  }
};
