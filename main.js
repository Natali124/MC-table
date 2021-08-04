var clicked = 0;


function f(x){
  if(document.getElementById(`${x}D`).classList!="info")
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
   document.getElementById(`${x}D`).classList.remove("info");
   document.getElementById(x).classList.add("y");



   clicked+=1;
   

}


function clear () {
  for (let i=1;i<=20;i++) {
    document.getElementById(`G${i}D`).classList.add("info");

    document.getElementById(`G${i}`).classList.remove("y");
  }
  for (let i=1;i<=16;i++) {
    document.getElementById(`2G${i}D`).classList.add("info");

    document.getElementById(`2G${i}`).classList.remove("y");
  }

/////////////////////
  for (let i=1;i<=20;i++) {
    document.getElementById(`G${i}`).classList.remove("y");

  }
  for (let i=1;i<=16;i++) {
    document.getElementById(`2G${i}`).classList.remove("y");
  }
/////////////////////////


}