const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let ordinal = "";
  if (number ===1){
    ordinal = "st";
  }else if(number === 2) {
    ordinal = "nd";
  }else if(number === 3) {
    ordinal = "rd";
  }else if(number === 4) {
    ordinal = "th";
  }else if(number === 5){
    ordinal = "th";
  }else if(number === 6){
    ordinal = "th";
  }else if(number === 7){
    ordinal = "th";
  }else if(number === 8){
    ordinal = "th";
  }else if(number === 9){
    ordinal = "th"
  }
  console.log(number,ordinal)
}
