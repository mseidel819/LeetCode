/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    const swap=(i,j)=>{
    [nums[i], nums[j]]=[nums[j], nums[i]];
};

const nextLarge=(index)=>{
    for (let i=nums.length-1;i>index; i--){
        if(nums[i]>nums[index]) return i;
    }
}

const reverse=(index)=>{
    let start=index;
    let end=nums.length-1;
    
    while(start<end){
        swap(start,end);
        start++
        end--
    }
}
    
    
    for(let i=nums.length-1;i>=0; i--){
        if(nums[i]<nums[i+1]){
            const large=nextLarge(i);
            swap(i, large)
            reverse(i+1)
            return
        }
    }
    nums.reverse()
};



