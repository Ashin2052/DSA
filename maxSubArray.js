/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    
    
    
    let maxSum = -Infinity
   let currentSum = 0
   // iterate through the nums, store sub-problems result
   for(let i = 0; i < nums.length; i++){ 
       //cumulating answers to the top
       
       //compare currentSum add current number 
       //with current number and store the maximum value
       currentSum = Math.max(nums[i], currentSum + nums[i])
       console.log(currentSum,"currentsynm")

       //compare maxSum with currentSum and store the greater value
       maxSum = Math.max(currentSum, maxSum)

       console.log(maxSum,"maxSum")

       
   }
   return maxSum
   
   
   
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])