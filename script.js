let Form=document.getElementById("form")
document.getElementById("btn").addEventListener("click",function(){
    let amt  = document.getElementById("amt").value;
    var totalamt = 0;
    var dis = 0;
    
    if(amt<5000){
         dis = Math.round(amt*2/100);
         totalamt = amt - dis;
    }
    else if(amt<10000)
    {
        dis = Math.round(amt*3/100);
         totalamt = amt - dis;
    }
    else if(amt<15000)
        {
            dis = Math.round(amt*4/100);
             totalamt = amt - dis;
        }
        else if(amt<20000)
            {
                dis = Math.round(amt*4/100);
                 totalamt = amt - dis;
            }
            else if(amt<25000)
                {
                    dis = Math.round(amt*5/100);
                     totalamt = amt - dis;
                }
                else if(amt<30000)
                    {
                        dis = Math.round(amt*6/100);
                         totalamt = amt - dis;
                    }
                    else if(amt<35000)
                        {
                            dis = Math.round(amt*7/100);
                             totalamt = amt - dis;
                        }
                        else if(amt<40000)
                            {
                                dis = Math.round(amt*8/100);
                                 totalamt = amt - dis;
                            }
                            else if(amt<45000)
                                {
                                    dis = Math.round(amt*9/100);
                                     totalamt = amt - dis;
                                }
                                else if(amt<50000)
                                    {
                                        dis = Math.round(amt*10/100);
                                         totalamt = amt - dis;
                                    }
                                    else if(amt>50000)
                                        {
                                            dis = Math.round(amt*15/100);
                                             totalamt = amt - dis;
                                        }
                                        else{
                                            alert("Enter the correct numbers")
                                        }
                                alert("Your total amount after deduction  = "+  totalamt + "\n" + "Your discounted amount =  "+ dis);
                                 
                                }) 
   
    
    
        
//  let val= document.getElementById("text");
//    text.innerHTML = totalamt;


