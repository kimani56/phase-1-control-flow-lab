function scuberGreetingForFeet(){
  // Write your code here! 
}
  function scuberGreetingForFeet (feet) {
    let priceRange ;
    if(feet <=400){
      priceRange = 'This one is on me!';
    } else if (feet > 2000 && feet <=2500){
      priceRange = 'I will gladly take your thirty bucks.';
    } else if (feet > 2500){
      priceRange = 'No can do.';
    }  return priceRange;
  }
  

  

function ternaryCheckCity(){
  // Write your code here!
}
 function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
 }

function switchOnCharmFromTip(){
  // Write your code here!
}
function switchOnCharmFromTip(tip){
 switch(tip){
  case "generous":
     return "Thank you so much.";
  case "not as generous":
      return "Thank you.";
  default:
       return  "Bye.";
 }
}

  
  