// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function area(){
   let l = "..."
   let w = "..."
   let output = "..."
   let msg = "";
   let a = l * w;
   if( l <= 0 || w <= 0){
    msg = "Inappropriate measurement";
   }else{
    
    msg = `Area is ${a}`;
   }
   output.innerHTML = msg;


}
function pet(){
  let animal = document.getElementById("animal").value;
  let feeling = document.getElementById("emotion").value;
  let output = document.getElementById("output");
  let picture = "";

  if( animal =="Bear" && feeling == "Sad"){
      picture = "sadBear.jpg";
  }
  if( animal =="Bear" && feeling == "Funny"){
      picture = "funnyBear.jpg";
  }

  output.innerHTML = `<img src='${picture}'>`

}