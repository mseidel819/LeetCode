function shuffle(nums: number[], n: number): number[] {
const ans=[];
   
    for(let i=0; i<n; i++){
       ans.push(nums[i]);
        ans.push(nums[n+i]);
    }

    return ans
};