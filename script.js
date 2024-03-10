






   

   function  calculateAverage(){
         

    var grade1=Number(document.getElementById('score1').value);
    var grade2=Number(document.getElementById('score2').value);
    var grade3=Number(document.getElementById('score3').value);
    var grade4=Number(document.getElementById('score4').value);
    var grade5=Number(document.getElementById('score5').value);
     
    var score1Value=document.getElementById('grade1.value').value;
    var score2Value=document.getElementById('grade2.value').value;
    var score3Value=document.getElementById('grade3.value').value;
    var score4Value=document.getElementById('grade4.value').value;
    var score5Value=document.getElementById('grade5.value').value;
    
    //  var gradeValue=(grade1 + grade2 + grade3 + grade4 + grade5)/5;
      
        if(grade1==''){
            document.getElementById('grade1.value').value='';
        }
        else if(grade1 < 40){
            document.getElementById('grade1.value').value='F';
        }else if(grade1 < 45){
            document.getElementById('grade1.value').value='E';
        }else if(grade1 < 50){
            document.getElementById('grade1.value').value='D';
        }else if(grade1 < 60){
            document.getElementById('grade1.value').value='C';
        }else if(grade1 <= 69){
            document.getElementById('grade1.value').value='B';
        }else{
            document.getElementById('grade1.value').value='A';
        }
  

  
         

  
      
        if(grade2==''){
            document.getElementById('grade2.value').value='';
        }
        else if(grade2 < 40){
            document.getElementById('grade2.value').value='F';
        }else if(grade2 < 45){
            document.getElementById('grade2.value').value='E';
        }else if(grade2 < 50){
            document.getElementById('grade2.value').value='D';
        }else if(grade2 < 60){
            document.getElementById('grade2.value').value='C';
        }else if(grade2 <= 69){
            document.getElementById('grade2.value').value='B';
        }else{
            document.getElementById('grade2.value').value='A';
        }
 
         

   
      
        if(grade3==''){
            document.getElementById('grade3.value').value='';
        }
        else if(grade3 < 40){
            document.getElementById('grade3.value').value='F';
        }else if(grade3 < 45){
            document.getElementById('grade3.value').value='E';
        }else if(grade3 < 50){
            document.getElementById('grade3.value').value='D';
        }else if(grade3 < 60){
            document.getElementById('grade3.value').value='C';
        }else if(grade3 <= 69){
            document.getElementById('grade3.value').value='B';
        }else{
            document.getElementById('grade3.value').value='A';
        }
 


         

    
        if(grade4==''){
            document.getElementById('grade4.value').value='';
        }
        else if(grade4 < 40){
            document.getElementById('grade4.value').value='F';
        }else if(grade4 < 45){
            document.getElementById('grade4.value').value='E';
        }else if(grade4 < 50){
            document.getElementById('grade4.value').value='D';
        }else if(grade4 < 60){
            document.getElementById('grade4.value').value='C';
        }else if(grade4 <= 69){
            document.getElementById('grade4.value').value='B';
        }else{
            document.getElementById('grade4.value').value='A';
        }
  
    

   
         

    
        if(grade5==''){
            document.getElementById('grade5.value').value='';
        }
        else if(grade5 < 40){
            document.getElementById('grade5.value').value='F';
        }else if(grade5 < 45){
            document.getElementById('grade5.value').value='E';
        }else if(grade5 < 50){
            document.getElementById('grade5.value').value='D';
        }else if(grade5 < 60){
            document.getElementById('grade5.value').value='C';
        }else if(grade5 <= 69){
            document.getElementById('grade5.value').value='B';
        }else{
            document.getElementById('grade5.value').value='A';
        }
   }


    function totalScore() {

        var grade1=Number(document.getElementById('score1').value);
        var grade2=Number(document.getElementById('score2').value);
        var grade3=Number(document.getElementById('score3').value);
        var grade4=Number(document.getElementById('score4').value);
        var grade5=Number(document.getElementById('score5').value);
         
        var score1Value=document.getElementById('grade1.value').value;
        var score2Value=document.getElementById('grade2.value').value;
        var score3Value=document.getElementById('grade3.value').value;
        var score4Value=document.getElementById('grade4.value').value;
        var score5Value=document.getElementById('grade5.value').value;
         
        var total=Number(grade1 + grade2 + grade3 + grade4 + grade5);
        
            document.getElementById('total').innerHTML=total
            if(total=''){
                document.getElementById('total').innerHTML=''
            }
    
 
} 


function averageScore() {

    var grade1=Number(document.getElementById('score1').value);
    var grade2=Number(document.getElementById('score2').value);
    var grade3=Number(document.getElementById('score3').value);
    var grade4=Number(document.getElementById('score4').value);
    var grade5=Number(document.getElementById('score5').value);
     
    var score1Value=document.getElementById('grade1.value').value;
    var score2Value=document.getElementById('grade2.value').value;
    var score3Value=document.getElementById('grade3.value').value;
    var score4Value=document.getElementById('grade4.value').value;
    var score5Value=document.getElementById('grade5.value').value;
     
    var average=Number(grade1 + grade2 + grade3 + grade4 + grade5)/5;
    
        document.getElementById('average').innerHTML=average
        if(average==''){
            document.getElementById('average').innerHTML=''
        }
        if(average > 50){
            
            document.getElementById('remark').innerHTML='Proud of you!'
        }else if(average ==''){
            document.getElementById('remark').innerHTML=''
        }else{
            document.getElementById('remark').innerHTML='You disappointed your teacher!'
        }
}


    
   

    
