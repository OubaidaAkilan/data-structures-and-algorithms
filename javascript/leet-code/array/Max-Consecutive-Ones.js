// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Input: nums = [1,0,1,1,0,1]
// Output: 2


var findMaxConsecutiveOnes = function (nums) {
    if (nums.length === 0) return 0;
    let capacity = 0;
    let dummuyCapacity = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        if (nums[i]) {
            dummuyCapacity++;
            if (dummuyCapacity > capacity) capacity = dummuyCapacity;
        } else {

            dummuyCapacity = 0;
        }
    }

    return capacity;
};