function maxArea(height: number[]): number {
     let maxArea = -1;
    
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const lVal = height[left];
        const rVal = height[right];
        
        const h = Math.min(lVal, rVal);
        const w = right - left;
        
        maxArea = Math.max((h * w), maxArea);
        
        if (lVal > rVal) right--;
        else left++;
    }
    
    return maxArea
};