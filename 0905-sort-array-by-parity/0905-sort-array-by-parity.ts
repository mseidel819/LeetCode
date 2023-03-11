function sortArrayByParity(nums: number[]): number[] {
const newArr:number[]=[];

nums.forEach(num=>{
    if (num%2===0) newArr.unshift(num);
    if(num%2!==0)newArr.push(num)
})

return newArr
};