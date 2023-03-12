function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
const ans= new Map();
    
    for (let [value, weight] of [...items1, ...items2]){
        if (!ans.has(value)){
            ans.set(value,weight)
        } else {
            ans.set(value, ans.get(value)+weight)
        }
         
    }
    return Array.from(ans.entries()).sort((a,b)=>{
        return a[0]- b[0]
    });
};