/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values={
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M": 1000
    }
    
    let total=0;
    
    for (let i=0; i<s.length; i++){
        let number=values[s.charAt(i)];
        let nextNumber=values[s.charAt(i+1)];
       
        
      if (number== 1 && nextNumber== 5 || number== 1 && nextNumber==10){
         total-=1;
         
      }
      else if (number== 10 && nextNumber== 50 || number== 10 && nextNumber==100){
            total -=10;
           
      }
     else if (number== 100 && nextNumber== 500 || number== 100 && nextNumber==1000){
           total -=100;
          console.log(total)
      }
      
        else{
            total+= number; 
        }
     
    }
    
    return total
};