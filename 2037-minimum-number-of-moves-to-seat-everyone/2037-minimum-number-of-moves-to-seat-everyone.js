/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let counter=0;
    
    const sortSeat=seats.sort((a,b)=>{
        return a-b
    });
    
     const sortStudents=students.sort((a,b)=>{
        return a-b
    });
   
    for (let i=0; i<seats.length; i++){
         let miniCount=0;
            if(sortSeat[i]>sortStudents[i]){
               
           while (sortSeat[i]> sortStudents[i]){     
                miniCount+=1;
                sortSeat[i]-=1;
           } 
            }
        
             if(sortSeat[i]<sortStudents[i]){
               
                  while (sortSeat[i]< sortStudents[i]){     
                miniCount+=1;
                sortSeat[i]+=1;
           } 
                
            
        }
        counter=counter+miniCount;
    }
    
    
    return counter;
};