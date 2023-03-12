function interpret(command: string): string {
    let ans='';
    const arr=[...command];

    arr.forEach((letter, i)=>{
        if (letter=== "G"){
           ans= ans.concat("G");
        } 
        if(letter==="(" && arr[i+1]===")"){
           ans=ans.concat("o"); 
        } 
        if(letter==="(" && arr[i+1]==="a" && arr[i+2]==="l" && arr[i+3]===")") {
           ans= ans.concat("al")
        }
    });
    return ans
};