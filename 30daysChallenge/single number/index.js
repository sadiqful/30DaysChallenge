var singleNumber = function(nums) {
  
  var result = nums[0]

  var memory1 = {};

  var memory2 = {};

  for(var i=0; i<nums.length; i++) {
    
    if(memory1[nums[0]]) {

      // This number is seen

      delete memory1[nums[i]]

      memory2[nums[i]] = 1;
    }

  }
}