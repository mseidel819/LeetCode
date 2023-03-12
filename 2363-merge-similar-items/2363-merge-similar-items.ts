function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
const valueArr=[];
  
    [...items1, ...items2].forEach(item=>{
        if (valueArr.includes(item[0])) return;
        valueArr.push(item[0]);
    })
    
    const answer=[]
    valueArr.forEach(value=>{
       const miniArr=[value, 0];
        [...items1, ...items2].forEach(item=>{
            if(value===item[0]){
                miniArr[1]+=item[1];
            }
        });
        answer.push(miniArr)
        
    })
   return answer.sort((a,b)=>{
       return a[0]-b[0]
   })
};