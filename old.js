var clicked = 0;


function f1f1(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }

  if(clicked!=0)
  {
    clicked-=1;
    clear();
   
   }
   document.getElementById("G1D").classList.remove("info");
   document.getElementById("G1").classList.add("y");


   document.getElementById("G1").classList.add("irl");
   document.getElementById("G1h").classList.add("irl");
   document.getElementById("2G9").classList.add("irl");
   document.getElementById("G6h").classList.add("irl");
   document.getElementById("2G14").classList.add("irl");
   document.getElementById("G19").classList.add("irl");
   document.getElementById("2G15h").classList.add("irl");
   document.getElementById("G8").classList.add("irl");
   document.getElementById("3G8").classList.add("irl");

   clicked+=1;
   

}
function f1f1h(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }

  if(clicked!=0)
  {
    clicked-=1;
    clear();
   
   }
   document.getElementById("G1hD").classList.remove("info");
   document.getElementById("G1h").classList.add("y");
  

   document.getElementById("G1h").classList.add("games");
   document.getElementById("G2h").classList.add("games");
   document.getElementById("2G19").classList.add("games");

   
   document.getElementById("G1").classList.add("irl");
   document.getElementById("G1h").classList.add("irl");
   document.getElementById("2G9").classList.add("irl");
   document.getElementById("G6h").classList.add("irl");
   document.getElementById("2G14").classList.add("irl");
   document.getElementById("G19").classList.add("irl");
   document.getElementById("2G15h").classList.add("irl");
   document.getElementById("G8").classList.add("irl");
   document.getElementById("3G8").classList.add("irl");
  
   clicked+=1;

}
function f1f2(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("G2D").classList.remove("info");
     document.getElementById("G2").classList.add("y");
 
 
     clicked+=1;
  
}
function f1f2h(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("G2hD").classList.remove("info");
     document.getElementById("G2h").classList.add("y");
 

     document.getElementById("G1h").classList.add("games");
   document.getElementById("G2h").classList.add("games");
   document.getElementById("2G19").classList.add("games");

     clicked+=1;
  
}
function f1f3(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("G3D").classList.remove("info");
     document.getElementById("G3").classList.add("y");

     
     document.getElementById("G5").classList.add("squishy");
     document.getElementById("2G18").classList.add("squishy");
     document.getElementById("G3").classList.add("squishy");
     document.getElementById("3G15").classList.add("squishy");
     document.getElementById("2G8").classList.add("squishy");

     clicked+=1;
   
  
}
function f1f4(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("G4D").classList.remove("info");
     document.getElementById("G4").classList.add("y");
     document.getElementById("G9").classList.add("prereq");

     document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");

   

     clicked+=1;
  
}
function f2f1(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("G5D").classList.remove("info");
     document.getElementById("G5").classList.add("y");
     
     document.getElementById("G5").classList.add("squishy");
     document.getElementById("2G18").classList.add("squishy");
     document.getElementById("G3").classList.add("squishy");
     document.getElementById("3G15").classList.add("squishy");
     document.getElementById("2G8").classList.add("squishy");


     clicked+=1;
  
}
function f2f2(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G6D").classList.remove("info");
       document.getElementById("G6").classList.add("y");
   

     document.getElementById("G6").classList.add("rigid");
     document.getElementById("2G2").classList.add("rigid");
     document.getElementById("3G18").classList.add("rigid");
     document.getElementById("2G15").classList.add("rigid");
     document.getElementById("2G15h").classList.add("rigid");
     document.getElementById("3G12").classList.add("rigid");
   
   
       clicked+=1;
    
}
function f2f2h(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G6hD").classList.remove("info");
       document.getElementById("G6h").classList.add("y");
    

     
     document.getElementById("G13").classList.add("cs");
     document.getElementById("2G9").classList.add("cs");
     document.getElementById("3G9").classList.add("cs");
     document.getElementById("G6h").classList.add("cs");
     document.getElementById("2G10").classList.add("cs");
     document.getElementById("2G3").classList.add("cs");
     document.getElementById("3G8").classList.add("cs");

     
   document.getElementById("G1").classList.add("irl");
   document.getElementById("G1h").classList.add("irl");
   document.getElementById("2G9").classList.add("irl");
   document.getElementById("G6h").classList.add("irl");
   document.getElementById("2G14").classList.add("irl");
   document.getElementById("G19").classList.add("irl");
   document.getElementById("2G15h").classList.add("irl");
   document.getElementById("G8").classList.add("irl");
   document.getElementById("3G8").classList.add("irl");

       clicked+=1;
    
}
function f2f3(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G7D").classList.remove("info");
       document.getElementById("G7").classList.add("y");
       document.getElementById("G9").classList.add("prereq");
       document.getElementById("3G14").classList.add("prereq");

       document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");

         document.getElementById("G17").classList.add("number");
     document.getElementById("2G1").classList.add("number");
     document.getElementById("3G9").classList.add("number");
     document.getElementById("3G6").classList.add("number");
     document.getElementById("G7").classList.add("number");
     document.getElementById("G11").classList.add("number");
     document.getElementById("2G3").classList.add("number");
     document.getElementById("3G19").classList.add("number");

       clicked+=1;
    
}
function f2f4(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G8D").classList.remove("info");
       document.getElementById("G8").classList.add("y");

       
   document.getElementById("G1").classList.add("irl");
   document.getElementById("G1h").classList.add("irl");
   document.getElementById("2G9").classList.add("irl");
   document.getElementById("G6h").classList.add("irl");
   document.getElementById("2G14").classList.add("irl");
   document.getElementById("G19").classList.add("irl");
   document.getElementById("2G15h").classList.add("irl");
   document.getElementById("G8").classList.add("irl");
   document.getElementById("3G8").classList.add("irl");

       clicked+=1;
    
}
function f3f1(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
        if(clicked!=0)
        {
          clicked-=1;
          clear();
         
         }
         document.getElementById("G9D").classList.remove("info");
         document.getElementById("G9").classList.add("y");
         document.getElementById("G7").classList.add("prereq");
         document.getElementById("G4").classList.add("prereq");
         document.getElementById("2G11").classList.add("prereq");
         document.getElementById("3G6").classList.add("prereq");
         document.getElementById("2G18").classList.add("prereq");
         document.getElementById("3G4").classList.add("prereq");
         document.getElementById("3G7").classList.add("prereq");
         document.getElementById("G18").classList.add("prereq");

         document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");


    
         clicked+=1;
      
}
function f3f2(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("G10D").classList.remove("info");
           document.getElementById("G10").classList.add("y");
           document.getElementById("2G7").classList.add("prereq");
           document.getElementById("2G17").classList.add("prereq");

           document.getElementById("2G17").classList.add("analysis");
     document.getElementById("G10").classList.add("analysis");
     document.getElementById("2G7").classList.add("analysis");
     document.getElementById("3G10").classList.add("analysis");
     document.getElementById("G15").classList.add("analysis");
     document.getElementById("G16").classList.add("analysis");
     document.getElementById("G16h").classList.add("analysis");
     document.getElementById("2G16").classList.add("analysis");
     document.getElementById("2G20").classList.add("analysis");
     document.getElementById("3G20").classList.add("analysis");
         
           clicked+=1;
        
}
function f3f3(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("G11D").classList.remove("info");
           document.getElementById("G11").classList.add("y");

           document.getElementById("G17").classList.add("number");
     document.getElementById("2G1").classList.add("number");
     document.getElementById("3G9").classList.add("number");
     document.getElementById("3G6").classList.add("number");
     document.getElementById("G7").classList.add("number");
     document.getElementById("G11").classList.add("number");
     document.getElementById("2G3").classList.add("number");
     document.getElementById("3G19").classList.add("number");
          

           clicked+=1;
        
}
function f3f4(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("G12D").classList.remove("info");
           document.getElementById("G12").classList.add("y");


     
     document.getElementById("3G18").classList.add("symmetries");
     document.getElementById("2G11").classList.add("symmetries");
     document.getElementById("2G15h").classList.add("symmetries");
     document.getElementById("3G7").classList.add("symmetries");
     document.getElementById("G12").classList.add("symmetries");
        
           clicked+=1;
        
}
function f3f4h(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("G12hD").classList.remove("info");
           document.getElementById("G12h").classList.add("y");
           document.getElementById("2G6").classList.add("prereq");
      

     
     document.getElementById("3G17").classList.add("graph");
     document.getElementById("2G5").classList.add("graph");
     document.getElementById("2G6").classList.add("graph");
     document.getElementById("3G3").classList.add("graph");
     document.getElementById("G12h").classList.add("graph");
          
           clicked+=1;
        
}
function f4f1(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("G13D").classList.remove("info");
     document.getElementById("G13").classList.add("y");

     document.getElementById("G13").classList.add("cs");
     document.getElementById("2G9").classList.add("cs");
     document.getElementById("3G9").classList.add("cs");
     document.getElementById("G6h").classList.add("cs");
     document.getElementById("2G10").classList.add("cs");
     document.getElementById("2G3").classList.add("cs");
     document.getElementById("3G8").classList.add("cs");

     document.getElementById("G13").classList.add("discrete");
     document.getElementById("2G1").classList.add("discrete");
     document.getElementById("2G5").classList.add("discrete");
     document.getElementById("3G5").classList.add("discrete");
     document.getElementById("3G17").classList.add("discrete");

     document.getElementById("3G17").classList.add("graph");
     document.getElementById("2G5").classList.add("graph");
     document.getElementById("2G6").classList.add("graph");
     document.getElementById("3G3").classList.add("graph");
     document.getElementById("G12h").classList.add("graph");


     clicked+=1;
  
}
function f4f2(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G14D").classList.remove("info");
       document.getElementById("G14").classList.add("y");

       document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");

   
       clicked+=1;
    
}
function f4f3(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G15D").classList.remove("info");
       document.getElementById("G15").classList.add("y");
       document.getElementById("3G13").classList.add("prereq");

       document.getElementById("2G17").classList.add("analysis");
     document.getElementById("G10").classList.add("analysis");
     document.getElementById("2G7").classList.add("analysis");
     document.getElementById("3G10").classList.add("analysis");
     document.getElementById("G15").classList.add("analysis");
     document.getElementById("G16").classList.add("analysis");
     document.getElementById("G16h").classList.add("analysis");
     document.getElementById("2G16").classList.add("analysis");
     document.getElementById("2G20").classList.add("analysis");
     document.getElementById("3G20").classList.add("analysis");
      
       clicked+=1;
    
}
function f4f4(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G16D").classList.remove("info");
       document.getElementById("G16").classList.add("y");
       document.getElementById("G16h").classList.add("prereq");
       document.getElementById("3G13").classList.add("prereq");
 
    
       clicked+=1;
    
}
function f4f4h(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G16hD").classList.remove("info");
       document.getElementById("G16h").classList.add("y");
       document.getElementById("3G13").classList.add("prereq");
       document.getElementById("G16").classList.add("prereq");
       document.getElementById("3G10").classList.add("prereq");


     document.getElementById("2G17").classList.add("analysis");
     document.getElementById("G10").classList.add("analysis");
     document.getElementById("2G7").classList.add("analysis");
     document.getElementById("3G10").classList.add("analysis");
     document.getElementById("G15").classList.add("analysis");
     document.getElementById("G16").classList.add("analysis");
     document.getElementById("G16h").classList.add("analysis");
     document.getElementById("2G16").classList.add("analysis");
     document.getElementById("2G20").classList.add("analysis");
     document.getElementById("3G20").classList.add("analysis");
      
     
       clicked+=1;
    
}
function f5f1(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("G17D").classList.remove("info");
     document.getElementById("G17").classList.add("y");
     document.getElementById("2G3").classList.add("prereq");
     document.getElementById("3G19").classList.add("prereq");
   

     document.getElementById("G17").classList.add("number");
     document.getElementById("2G1").classList.add("number");
     document.getElementById("3G9").classList.add("number");
     document.getElementById("3G6").classList.add("number");
     document.getElementById("G7").classList.add("number");
     document.getElementById("G11").classList.add("number");
     document.getElementById("2G3").classList.add("number");
     document.getElementById("3G19").classList.add("number");
     
    
     clicked+=1;
  
  }
function f5f2(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G18D").classList.remove("info");
       document.getElementById("G18").classList.add("y");
       document.getElementById("G9").classList.add("prereq");
       document.getElementById("3G13").classList.add("prereq");

       document.getElementById("3G1").classList.add("algebra");
       document.getElementById("G18").classList.add("algebra");
       document.getElementById("3G2").classList.add("algebra");

       document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");
       
   
 
       clicked+=1;
    
}
function f5f3(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G19D").classList.remove("info");
       document.getElementById("G19").classList.add("y");
       document.getElementById("3G13").classList.add("prereq");
       document.getElementById("2G14").classList.add("prereq");

       
   document.getElementById("G1").classList.add("irl");
   document.getElementById("G1h").classList.add("irl");
   document.getElementById("2G9").classList.add("irl");
   document.getElementById("G6h").classList.add("irl");
   document.getElementById("2G14").classList.add("irl");
   document.getElementById("G19").classList.add("irl");
   document.getElementById("2G15h").classList.add("irl");
   document.getElementById("G8").classList.add("irl");
   document.getElementById("3G8").classList.add("irl");


       clicked+=1;
    
    }
function f5f4(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("G20D").classList.remove("info");
       document.getElementById("G20").classList.add("y");
 
 
       clicked+=1;
    
    }
function f6f1(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }

  if(clicked!=0)
  {
    clicked-=1;
    clear();
   
   }
   document.getElementById("2G1D").classList.remove("info");
   document.getElementById("2G1").classList.add("y");

   
   document.getElementById("G13").classList.add("discrete");
   document.getElementById("2G1").classList.add("discrete");
   document.getElementById("2G5").classList.add("discrete");
   document.getElementById("3G5").classList.add("discrete");
   document.getElementById("3G17").classList.add("discrete");

   document.getElementById("G17").classList.add("number");
     document.getElementById("2G1").classList.add("number");
     document.getElementById("3G9").classList.add("number");
     document.getElementById("3G6").classList.add("number");
     document.getElementById("G7").classList.add("number");
     document.getElementById("G11").classList.add("number");
     document.getElementById("2G3").classList.add("number");
     document.getElementById("3G19").classList.add("number");

   clicked+=1;

}
function f6f2(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("2G2D").classList.remove("info");
     document.getElementById("2G2").classList.add("y");

     
     document.getElementById("G6").classList.add("rigid");
     document.getElementById("2G2").classList.add("rigid");
     document.getElementById("3G18").classList.add("rigid");
     document.getElementById("2G15").classList.add("rigid");
     document.getElementById("2G15h").classList.add("rigid");
     document.getElementById("3G12").classList.add("rigid");
    
     clicked+=1;
  
}
function f6f3(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("2G3D").classList.remove("info");
     document.getElementById("2G3").classList.add("y");
     document.getElementById("G17").classList.add("prereq");

     
     document.getElementById("G13").classList.add("cs");
     document.getElementById("2G9").classList.add("cs");
     document.getElementById("3G9").classList.add("cs");
     document.getElementById("G6h").classList.add("cs");
     document.getElementById("2G10").classList.add("cs");
     document.getElementById("2G3").classList.add("cs");
     document.getElementById("3G8").classList.add("cs");

     document.getElementById("G17").classList.add("number");
     document.getElementById("2G1").classList.add("number");
     document.getElementById("3G9").classList.add("number");
     document.getElementById("3G6").classList.add("number");
     document.getElementById("G7").classList.add("number");
     document.getElementById("G11").classList.add("number");
     document.getElementById("2G3").classList.add("number");
     document.getElementById("3G19").classList.add("number");
     clicked+=1;
  
}
function f6f4(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("2G4D").classList.remove("info");
     document.getElementById("2G4").classList.add("y");
     document.getElementById("2G6").classList.add("prereq");
     clicked+=1;
  
}
function f7f1(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("2G5D").classList.remove("info");
     document.getElementById("2G5").classList.add("y");

     
     document.getElementById("G13").classList.add("discrete");
     document.getElementById("2G1").classList.add("discrete");
     document.getElementById("2G5").classList.add("discrete");
     document.getElementById("3G5").classList.add("discrete");
     document.getElementById("3G17").classList.add("discrete");

     
     document.getElementById("3G17").classList.add("graph");
     document.getElementById("2G5").classList.add("graph");
     document.getElementById("2G6").classList.add("graph");
     document.getElementById("3G3").classList.add("graph");
     document.getElementById("G12h").classList.add("graph");
     clicked+=1;
  
}
function f7f2(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G6D").classList.remove("info");
       document.getElementById("2G6").classList.add("y");
       document.getElementById("2G4").classList.add("prereq");
       document.getElementById("3G3").classList.add("prereq");
       document.getElementById("G12h").classList.add("prereq");

       
     document.getElementById("3G17").classList.add("graph");
     document.getElementById("2G5").classList.add("graph");
     document.getElementById("2G6").classList.add("graph");
     document.getElementById("3G3").classList.add("graph");
     document.getElementById("G12h").classList.add("graph");
       
       clicked+=1;
    
}
function f7f3(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G7D").classList.remove("info");
       document.getElementById("2G7").classList.add("y");
       document.getElementById("2G17").classList.add("prereq");
       document.getElementById("G10").classList.add("prereq");

       document.getElementById("2G17").classList.add("analysis");
       document.getElementById("G10").classList.add("analysis");
       document.getElementById("2G7").classList.add("analysis");
       document.getElementById("3G10").classList.add("analysis");
       document.getElementById("G15").classList.add("analysis");
       document.getElementById("G16").classList.add("analysis");
       document.getElementById("G16h").classList.add("analysis");
       document.getElementById("2G16").classList.add("analysis");
       document.getElementById("2G20").classList.add("analysis");
       document.getElementById("3G20").classList.add("analysis");

       clicked+=1;
    
}
function f7f4(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G8D").classList.remove("info");
       document.getElementById("2G8").classList.add("y");

       
     document.getElementById("G5").classList.add("squishy");
     document.getElementById("2G18").classList.add("squishy");
     document.getElementById("G3").classList.add("squishy");
     document.getElementById("3G15").classList.add("squishy");
     document.getElementById("2G8").classList.add("squishy");

       clicked+=1;
    
}
function f8f1(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
        if(clicked!=0)
        {
          clicked-=1;
          clear();
         
         }
         document.getElementById("2G9D").classList.remove("info");
         document.getElementById("2G9").classList.add("y");

         document.getElementById("G13").classList.add("cs");
         document.getElementById("2G9").classList.add("cs");
         document.getElementById("3G9").classList.add("cs");
         document.getElementById("G6h").classList.add("cs");
         document.getElementById("2G10").classList.add("cs");
         document.getElementById("2G3").classList.add("cs");
         document.getElementById("3G8").classList.add("cs");

         
   document.getElementById("G1").classList.add("irl");
   document.getElementById("G1h").classList.add("irl");
   document.getElementById("2G9").classList.add("irl");
   document.getElementById("G6h").classList.add("irl");
   document.getElementById("2G14").classList.add("irl");
   document.getElementById("G19").classList.add("irl");
   document.getElementById("2G15h").classList.add("irl");
   document.getElementById("G8").classList.add("irl");
   document.getElementById("3G8").classList.add("irl");

         clicked+=1;
      
}
function f8f2(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("2G10D").classList.remove("info");
           document.getElementById("2G10").classList.add("y");

           
     document.getElementById("G13").classList.add("cs");
     document.getElementById("2G9").classList.add("cs");
     document.getElementById("3G9").classList.add("cs");
     document.getElementById("G6h").classList.add("cs");
     document.getElementById("2G10").classList.add("cs");
     document.getElementById("2G3").classList.add("cs");
     document.getElementById("3G8").classList.add("cs");
           clicked+=1;
        
}
function f8f3(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("2G11D").classList.remove("info");
           document.getElementById("2G11").classList.add("y");
           document.getElementById("G9").classList.add("prereq");

           document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");

         
         document.getElementById("3G18").classList.add("symmetries");
         document.getElementById("2G11").classList.add("symmetries");
         document.getElementById("2G15h").classList.add("symmetries");
         document.getElementById("3G7").classList.add("symmetries");
         document.getElementById("G12").classList.add("symmetries");

        

           clicked+=1;
        
}
function f8f4(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("2G12D").classList.remove("info");
           document.getElementById("2G12").classList.add("y");

           document.getElementById("G9").classList.add("structures");
           document.getElementById("3G13").classList.add("structures");
           document.getElementById("G14").classList.add("structures");
           document.getElementById("G18").classList.add("structures");
           document.getElementById("3G14").classList.add("structures");
           document.getElementById("G7").classList.add("structures");
           document.getElementById("2G11").classList.add("structures");
           document.getElementById("2G19").classList.add("structures");
           document.getElementById("3G11").classList.add("structures");
           document.getElementById("3G16").classList.add("structures");
           document.getElementById("G4").classList.add("structures");
           document.getElementById("2G12").classList.add("structures");

           clicked+=1;
        
}
function f9f1(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("2G13D").classList.remove("info");
     document.getElementById("2G13").classList.add("y");

     clicked+=1;
  
}
function f9f2(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G14D").classList.remove("info");
       document.getElementById("2G14").classList.add("y");
       document.getElementById("G19").classList.add("prereq");

       
   document.getElementById("G1").classList.add("irl");
   document.getElementById("G1h").classList.add("irl");
   document.getElementById("2G9").classList.add("irl");
   document.getElementById("G6h").classList.add("irl");
   document.getElementById("2G14").classList.add("irl");
   document.getElementById("G19").classList.add("irl");
   document.getElementById("2G15h").classList.add("irl");
   document.getElementById("G8").classList.add("irl");
   document.getElementById("3G8").classList.add("irl");
       clicked+=1;
    
}
function f9f3(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G15D").classList.remove("info");
       document.getElementById("2G15").classList.add("y");

       
     document.getElementById("G6").classList.add("rigid");
     document.getElementById("2G2").classList.add("rigid");
     document.getElementById("3G18").classList.add("rigid");
     document.getElementById("2G15").classList.add("rigid");
     document.getElementById("2G15h").classList.add("rigid");
     document.getElementById("3G12").classList.add("rigid");
       clicked+=1;
    
}
function f9f3h(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G15hD").classList.remove("info");
       document.getElementById("2G15h").classList.add("y");

       
     document.getElementById("G6").classList.add("rigid");
     document.getElementById("2G2").classList.add("rigid");
     document.getElementById("3G18").classList.add("rigid");
     document.getElementById("2G15").classList.add("rigid");
     document.getElementById("2G15h").classList.add("rigid");
     document.getElementById("3G12").classList.add("rigid");

       
   document.getElementById("G1").classList.add("irl");
   document.getElementById("G1h").classList.add("irl");
   document.getElementById("2G9").classList.add("irl");
   document.getElementById("G6h").classList.add("irl");
   document.getElementById("2G14").classList.add("irl");
   document.getElementById("G19").classList.add("irl");
   document.getElementById("2G15h").classList.add("irl");
   document.getElementById("G8").classList.add("irl");
   document.getElementById("3G8").classList.add("irl");

   
   document.getElementById("3G18").classList.add("symmetries");
   document.getElementById("2G11").classList.add("symmetries");
   document.getElementById("2G15h").classList.add("symmetries");
   document.getElementById("3G7").classList.add("symmetries");
   document.getElementById("G12").classList.add("symmetries");
       clicked+=1;
    
}
function f9f4(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G16D").classList.remove("info");
       document.getElementById("2G16").classList.add("y");
       document.getElementById("3G10").classList.add("prereq");

       document.getElementById("2G17").classList.add("analysis");
     document.getElementById("G10").classList.add("analysis");
     document.getElementById("2G7").classList.add("analysis");
     document.getElementById("3G10").classList.add("analysis");
     document.getElementById("G15").classList.add("analysis");
     document.getElementById("G16").classList.add("analysis");
     document.getElementById("G16h").classList.add("analysis");
     document.getElementById("2G16").classList.add("analysis");
     document.getElementById("2G20").classList.add("analysis");
     document.getElementById("3G20").classList.add("analysis");
       clicked+=1;
    
}
function f10f1(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
    if(clicked!=0)
    {
      clicked-=1;
      clear();
     
     }
     document.getElementById("2G17D").classList.remove("info");
     document.getElementById("2G17").classList.add("y");
     document.getElementById("G10").classList.add("prereq");
     document.getElementById("3G20").classList.add("prereq");
     document.getElementById("2G7").classList.add("prereq");

     
     document.getElementById("2G17").classList.add("analysis");
     document.getElementById("G10").classList.add("analysis");
     document.getElementById("2G7").classList.add("analysis");
     document.getElementById("3G10").classList.add("analysis");
     document.getElementById("G15").classList.add("analysis");
     document.getElementById("G16").classList.add("analysis");
     document.getElementById("G16h").classList.add("analysis");
     document.getElementById("2G16").classList.add("analysis");
     document.getElementById("2G20").classList.add("analysis");
     document.getElementById("3G20").classList.add("analysis");


     clicked+=1;
  
  }
function f10f2(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G18D").classList.remove("info");
       document.getElementById("2G18").classList.add("y");
       document.getElementById("G9").classList.add("prereq");

       
     document.getElementById("G5").classList.add("squishy");
     document.getElementById("2G18").classList.add("squishy");
     document.getElementById("G3").classList.add("squishy");
     document.getElementById("3G15").classList.add("squishy");
     document.getElementById("2G8").classList.add("squishy");

       clicked+=1;
    
}
function f10f2h(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G18hD").classList.remove("info");
       document.getElementById("2G18h").classList.add("y");
       clicked+=1;
    
}
function f10f3(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G19D").classList.remove("info");
       document.getElementById("2G19").classList.add("y");
       document.getElementById("G9").classList.add("prereq");

       document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");

         document.getElementById("G1h").classList.add("games");
   document.getElementById("G2h").classList.add("games");
   document.getElementById("2G19").classList.add("games");


       clicked+=1;
    
    }
function f10f4(x){
  if(document.getElementById(x).classList!="info")
  {
    clear();
    clicked=0;
    return;
  }
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("2G20D").classList.remove("info");
       document.getElementById("2G20").classList.add("y");
       document.getElementById("3G13").classList.add("prereq");
      

     document.getElementById("2G17").classList.add("analysis");
     document.getElementById("G10").classList.add("analysis");
     document.getElementById("2G7").classList.add("analysis");
     document.getElementById("3G10").classList.add("analysis");
     document.getElementById("G15").classList.add("analysis");
     document.getElementById("G16").classList.add("analysis");
     document.getElementById("G16h").classList.add("analysis");
     document.getElementById("2G16").classList.add("analysis");
     document.getElementById("2G20").classList.add("analysis");
     document.getElementById("3G20").classList.add("analysis");
       clicked+=1;
    
    }
    function f11f1(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
    
      if(clicked!=0)
      {
        clicked-=1;
        clear();
       
       }
       document.getElementById("3G1D").classList.remove("info");
       document.getElementById("3G1").classList.add("y");

       document.getElementById("3G1").classList.add("algebra");
       document.getElementById("G18").classList.add("algebra");
       document.getElementById("3G2").classList.add("algebra");


       
       clicked+=1;
       
    
    }
    
    function f11f2(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
        if(clicked!=0)
        {
          clicked-=1;
          clear();
         
         }
         document.getElementById("3G2D").classList.remove("info");
         document.getElementById("3G2").classList.add("y");

         document.getElementById("3G1").classList.add("algebra");
       document.getElementById("G18").classList.add("algebra");
       document.getElementById("3G2").classList.add("algebra");
     
         clicked+=1;
      
    }
    function f11f3(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
        if(clicked!=0)
        {
          clicked-=1;
          clear();
         
         }
         document.getElementById("3G3D").classList.remove("info");
         document.getElementById("3G3").classList.add("y");
         document.getElementById("2G6").classList.add("prereq");

         
     document.getElementById("3G17").classList.add("graph");
     document.getElementById("2G5").classList.add("graph");
     document.getElementById("2G6").classList.add("graph");
     document.getElementById("3G3").classList.add("graph");
     document.getElementById("G12h").classList.add("graph");

        

         clicked+=1;
       
      
    }
    function f11f4(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
        if(clicked!=0)
        {
          clicked-=1;
          clear();
         
         }
         document.getElementById("3G4D").classList.remove("info");
         document.getElementById("3G4").classList.add("y");
         document.getElementById("G9").classList.add("prereq");
         document.getElementById("3G13").classList.add("prereq");
    
         clicked+=1;
      
    }
    function f12f1(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
        if(clicked!=0)
        {
          clicked-=1;
          clear();
         
         }
         document.getElementById("3G5D").classList.remove("info");
         document.getElementById("3G5").classList.add("y");

         
     document.getElementById("G13").classList.add("discrete");
     document.getElementById("2G1").classList.add("discrete");
     document.getElementById("2G5").classList.add("discrete");
     document.getElementById("3G5").classList.add("discrete");
     document.getElementById("3G17").classList.add("discrete");
    
         clicked+=1;
      
    }
    function f12f2(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("3G6D").classList.remove("info");
           document.getElementById("3G6").classList.add("y");
           document.getElementById("G9").classList.add("prereq");

           document.getElementById("G17").classList.add("number");
     document.getElementById("2G1").classList.add("number");
     document.getElementById("3G9").classList.add("number");
     document.getElementById("3G6").classList.add("number");
     document.getElementById("G7").classList.add("number");
     document.getElementById("G11").classList.add("number");
     document.getElementById("2G3").classList.add("number");
     document.getElementById("3G19").classList.add("number");
       
           clicked+=1;
        
    }
  
   
    function f12f3(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("3G7D").classList.remove("info");
           document.getElementById("3G7").classList.add("y");
           document.getElementById("G9").classList.add("prereq");

           
           document.getElementById("3G18").classList.add("symmetries");
           document.getElementById("2G11").classList.add("symmetries");
           document.getElementById("2G15h").classList.add("symmetries");
           document.getElementById("3G7").classList.add("symmetries");
           document.getElementById("G12").classList.add("symmetries");
    
           clicked+=1;
        
    }
    function f12f4(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("3G8D").classList.remove("info");
           document.getElementById("3G8").classList.add("y");
           
     document.getElementById("G13").classList.add("cs");
     document.getElementById("2G9").classList.add("cs");
     document.getElementById("3G9").classList.add("cs");
     document.getElementById("G6h").classList.add("cs");
     document.getElementById("2G10").classList.add("cs");
     document.getElementById("2G3").classList.add("cs");
     document.getElementById("3G8").classList.add("cs");

     
   document.getElementById("G1").classList.add("irl");
   document.getElementById("G1h").classList.add("irl");
   document.getElementById("2G9").classList.add("irl");
   document.getElementById("G6h").classList.add("irl");
   document.getElementById("2G14").classList.add("irl");
   document.getElementById("G19").classList.add("irl");
   document.getElementById("2G15h").classList.add("irl");
   document.getElementById("G8").classList.add("irl");
   document.getElementById("3G8").classList.add("irl");
    
           clicked+=1;
        
    }
    function f13f1(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
            if(clicked!=0)
            {
              clicked-=1;
              clear();
             
             }
             document.getElementById("3G9D").classList.remove("info");
             document.getElementById("3G9").classList.add("y");

             
     document.getElementById("G13").classList.add("cs");
     document.getElementById("2G9").classList.add("cs");
     document.getElementById("3G9").classList.add("cs");
     document.getElementById("G6h").classList.add("cs");
     document.getElementById("2G10").classList.add("cs");
     document.getElementById("2G3").classList.add("cs");
     document.getElementById("3G8").classList.add("cs");

     document.getElementById("G17").classList.add("number");
     document.getElementById("2G1").classList.add("number");
     document.getElementById("3G9").classList.add("number");
     document.getElementById("3G6").classList.add("number");
     document.getElementById("G7").classList.add("number");
     document.getElementById("G11").classList.add("number");
     document.getElementById("2G3").classList.add("number");
     document.getElementById("3G19").classList.add("number");
            
             clicked+=1;
          
    }
    function f13f2(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
              if(clicked!=0)
              {
                clicked-=1;
                clear();
               
               }
               document.getElementById("3G10D").classList.remove("info");
               document.getElementById("3G10").classList.add("y");
               document.getElementById("G16h").classList.add("prereq");
               document.getElementById("2G16").classList.add("prereq");

               document.getElementById("2G17").classList.add("analysis");
     document.getElementById("G10").classList.add("analysis");
     document.getElementById("2G7").classList.add("analysis");
     document.getElementById("3G10").classList.add("analysis");
     document.getElementById("G15").classList.add("analysis");
     document.getElementById("G16").classList.add("analysis");
     document.getElementById("G16h").classList.add("analysis");
     document.getElementById("2G16").classList.add("analysis");
     document.getElementById("2G20").classList.add("analysis");
     document.getElementById("3G20").classList.add("analysis");
             
               clicked+=1;
            
    }
    function f13f3(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
        
              if(clicked!=0)
              {
                clicked-=1;
                clear();
               
               }
               document.getElementById("3G11D").classList.remove("info");
               document.getElementById("3G11").classList.add("y");
               document.getElementById("3G16").classList.add("prereq");
               document.getElementById("3G14").classList.add("prereq");

               document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");
              
    
               clicked+=1;
            
    }
    function f13f4(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
              if(clicked!=0)
              {
                clicked-=1;
                clear();
               
               }
               document.getElementById("3G12D").classList.remove("info");
               document.getElementById("3G12").classList.add("y");

               
     document.getElementById("G6").classList.add("rigid");
     document.getElementById("2G2").classList.add("rigid");
     document.getElementById("3G18").classList.add("rigid");
     document.getElementById("2G15").classList.add("rigid");
     document.getElementById("2G15h").classList.add("rigid");
     document.getElementById("3G12").classList.add("rigid");
            
               clicked+=1;
            
    }
   
    function f14f1(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
        if(clicked!=0)
        {
          clicked-=1;
          clear();
         
         }
         document.getElementById("3G13D").classList.remove("info");
         document.getElementById("3G13").classList.add("y");
         document.getElementById("G18").classList.add("prereq");
         document.getElementById("3G4").classList.add("prereq");
         document.getElementById("G16").classList.add("prereq");
         document.getElementById("G16h").classList.add("prereq");
         document.getElementById("G15").classList.add("prereq");
         document.getElementById("2G20").classList.add("prereq");
         document.getElementById("G19").classList.add("prereq");

         document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");
    
        
    
         clicked+=1;
      
    }
    function f14f2(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("3G14D").classList.remove("info");
           document.getElementById("3G14").classList.add("y");
           document.getElementById("3G11").classList.add("prereq");
           document.getElementById("G7").classList.add("prereq");
           document.getElementById("3G16").classList.add("prereq");

           document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");

          
       
           clicked+=1;
        
    }
    function f14f3(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("3G15D").classList.remove("info");
           document.getElementById("3G15").classList.add("y");

           
     document.getElementById("G5").classList.add("squishy");
     document.getElementById("2G18").classList.add("squishy");
     document.getElementById("G3").classList.add("squishy");
     document.getElementById("3G15").classList.add("squishy");
     document.getElementById("2G8").classList.add("squishy");

          
           clicked+=1;
        
    }
    function f14f4(x){ 
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("3G16D").classList.remove("info");
           document.getElementById("3G16").classList.add("y");
           document.getElementById("3G14").classList.add("prereq");
           document.getElementById("3G11").classList.add("prereq");
           document.getElementById("3G14").classList.add("prereq");

           document.getElementById("G9").classList.add("structures");
         document.getElementById("3G13").classList.add("structures");
         document.getElementById("G14").classList.add("structures");
         document.getElementById("G18").classList.add("structures");
         document.getElementById("3G14").classList.add("structures");
         document.getElementById("G7").classList.add("structures");
         document.getElementById("2G11").classList.add("structures");
         document.getElementById("2G19").classList.add("structures");
         document.getElementById("3G11").classList.add("structures");
         document.getElementById("3G16").classList.add("structures");
         document.getElementById("G4").classList.add("structures");
         document.getElementById("2G12").classList.add("structures");

           
        
           clicked+=1;
        
    }
    
    function f15f1(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
        if(clicked!=0)
        {
          clicked-=1;
          clear();
         
         }
         document.getElementById("3G17D").classList.remove("info");
         document.getElementById("3G17").classList.add("y");

         
     document.getElementById("G13").classList.add("discrete");
     document.getElementById("2G1").classList.add("discrete");
     document.getElementById("2G5").classList.add("discrete");
     document.getElementById("3G5").classList.add("discrete");
     document.getElementById("3G17").classList.add("discrete");
         
        
         clicked+=1;
      
      }
    function f15f2(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("3G18D").classList.remove("info");
           document.getElementById("3G18").classList.add("y");

           document.getElementById("3G18").classList.add("symmetries");
           document.getElementById("2G11").classList.add("symmetries");
           document.getElementById("2G15h").classList.add("symmetries");
           document.getElementById("3G7").classList.add("symmetries");
           document.getElementById("G12").classList.add("symmetries");


           
     document.getElementById("G6").classList.add("rigid");
     document.getElementById("2G2").classList.add("rigid");
     document.getElementById("3G18").classList.add("rigid");
     document.getElementById("2G15").classList.add("rigid");
     document.getElementById("2G15h").classList.add("rigid");
     document.getElementById("3G12").classList.add("rigid");
     
           clicked+=1;
        
    }
    function f15f3(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("3G19D").classList.remove("info");
           document.getElementById("3G19").classList.add("y");
           document.getElementById("G17").classList.add("prereq");

           document.getElementById("G17").classList.add("number");
     document.getElementById("2G1").classList.add("number");
     document.getElementById("3G9").classList.add("number");
     document.getElementById("3G6").classList.add("number");
     document.getElementById("G7").classList.add("number");
     document.getElementById("G11").classList.add("number");
     document.getElementById("2G3").classList.add("number");
     document.getElementById("3G19").classList.add("number");
    
           clicked+=1;
        
        }
    function f15f4(x){
      if(document.getElementById(x).classList!="info")
      {
        clear();
        clicked=0;
        return;
      }
          if(clicked!=0)
          {
            clicked-=1;
            clear();
           
           }
           document.getElementById("3G20D").classList.remove("info");
           document.getElementById("3G20").classList.add("y");
           document.getElementById("2G17").classList.add("prereq");

           document.getElementById("2G17").classList.add("analysis");
     document.getElementById("G10").classList.add("analysis");
     document.getElementById("2G7").classList.add("analysis");
     document.getElementById("3G10").classList.add("analysis");
     document.getElementById("G15").classList.add("analysis");
     document.getElementById("G16").classList.add("analysis");
     document.getElementById("G16h").classList.add("analysis");
     document.getElementById("2G16").classList.add("analysis");
     document.getElementById("2G20").classList.add("analysis");
     document.getElementById("3G20").classList.add("analysis");
     
           clicked+=1;
        
        }    

function clear () {
  for (let i=1;i<=20;i++) {
    document.getElementById(`G${i}D`).classList.add("info");

    if (i===1||i===2||i===6||i===12||i===16){
      document.getElementById(`G${i}hD`).classList.add("info");
    }
  }
  for (let i=1;i<=20;i++) {
    document.getElementById(`2G${i}D`).classList.add("info");
    if (i===15){
      document.getElementById(`2G${i}hD`).classList.add("info");
    }
  }
  for (let i=1;i<=20;i++) {
    document.getElementById(`3G${i}D`).classList.add("info");
  }

/////////////////////
  for (let i=1;i<=20;i++) {
    document.getElementById(`G${i}`).classList.remove("y");

    if (i===1||i===2||i===6||i===12||i===16){
      document.getElementById(`G${i}h`).classList.remove("y");
    }
  }
  for (let i=1;i<=20;i++) {
    document.getElementById(`2G${i}`).classList.remove("y");
    if (i===15){
      document.getElementById(`2G${i}h`).classList.remove("y");
    }
  }
  for (let i=1;i<=20;i++) {
    document.getElementById(`3G${i}`).classList.remove("y");
  }
/////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("prereq");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("prereq");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("prereq");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("prereq");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("prereq");
}
  ////////////////////////////
 
  ///////////////////////////// 
  for (let i=1;i<=20;i++) {
    document.getElementById(`G${i}`).classList.remove("algebra");

    if (i===1||i===2||i===6||i===12||i===16){
      document.getElementById(`G${i}h`).classList.remove("algebra");
    }
  }
  for (let i=1;i<=20;i++) {
    document.getElementById(`2G${i}`).classList.remove("algebra");
    if (i===15){
      document.getElementById(`2G${i}h`).classList.remove("algebra");
    }
  }
  for (let i=1;i<=20;i++) {
    document.getElementById(`3G${i}`).classList.remove("algebra");
  }
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("structures");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("structures");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("structures");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("structures");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("structures");
}
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("analysis");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("analysis");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("analysis");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("analysis");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("analysis");
}
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("cs");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("cs");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("cs");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("cs");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("cs");
}
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("discrete");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("discrete");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("discrete");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("discrete");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("discrete");
}
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("games");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("games");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("games");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("games");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("games");
}
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("graph");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("graph");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("graph");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("graph");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("graph");
}
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("irl");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("irl");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("irl");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("irl");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("irl");
}
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("number");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("number");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("number");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("number");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("number");
}
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("rigid");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("rigid");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("rigid");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("rigid");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("rigid");
}
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("squishy");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("squishy");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("squishy");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("squishy");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("squishy");
}
////////////////////////////////////////////
for (let i=1;i<=20;i++) {
  document.getElementById(`G${i}`).classList.remove("symmetries");

  if (i===1||i===2||i===6||i===12||i===16){
    document.getElementById(`G${i}h`).classList.remove("symmetries");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`2G${i}`).classList.remove("symmetries");
  if (i===15){
    document.getElementById(`2G${i}h`).classList.remove("symmetries");
  }
}
for (let i=1;i<=20;i++) {
  document.getElementById(`3G${i}`).classList.remove("symmetries");
}
////////////////////////////////////////////



}