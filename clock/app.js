const secondHand=document.querySelector(".seconds");
const minuteHand=document.querySelector(".minutes");
const hourHand=document.querySelector(".hour");
const hands=document.querySelector(".hands");

function setDate(){
  const now=new Date();
 
  const seconds=now.getSeconds();
  const secondDeg=((seconds/60)*360)+90;
  hands.style.transition="all 0.5s ease;"
  if(seconds==0){
hands.style.removeProperty(transition);
  }
  console.log(seconds);
  secondHand.style.transform="rotate("+secondDeg+"deg)";
 
  const minutes=now.getMinutes();
  const minuteDeg=((minutes/60)*360)+90;
  minuteHand.style.transform="rotate("+minuteDeg+"deg)";
 
  const hour=now.getHours();
  const hourDeg=((hour/12)*360)+90;
  hourHand.style.transform="rotate("+hourDeg+"deg)";
}


setInterval(setDate,1000);