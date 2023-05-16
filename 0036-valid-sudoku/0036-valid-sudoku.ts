function isValidSudoku(board: string[][]): boolean {

    
for (let i = 0; i < board.length; i++)  {
   const row= new Set();
   const column = new Set(); 
    const box = new Set();
    
    for (let j = 0; j < board.length; j++){
      let testCol=  board[i][j]
      let testRow=  board[j][i]
      let testBox=board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]

      if(testCol !== "."){
          if (column.has(testCol)){
              return false
          }
         column.add(testCol) 
      }
      if(testRow !== "."){
          if (row.has(testRow)){
              return false
          }
         row.add(testRow) 
      }
        
        if(testBox !== "."){
          if (box.has(testBox)){
              return false
          }
         box.add(testBox) 
      } 
       
    }
}  
    
     return true
    
};