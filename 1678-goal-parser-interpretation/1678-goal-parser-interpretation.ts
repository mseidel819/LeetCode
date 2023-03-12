function interpret(command: string): string {
    let ans=[];
    const arr=[...command];

    arr.forEach((letter, i)=>{
        if (letter=== "G"){
            ans.push("G");
        } 
        if(letter==="(" && arr[i+1]===")"){
           ans.push("o"); 
        } 
        if(letter==="(" && arr[i+1]==="a" && arr[i+2]==="l" && arr[i+3]===")") {
            ans.push("al")
        }
    });
    return ans.join('')
};