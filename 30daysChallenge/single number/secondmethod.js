var singleNumber = function (nums) {

  result = 0;

  for(var i = 0; i<nums.length; i++) {
    
      result ^= nums[i];   
    
    }

      return result;
 
 }