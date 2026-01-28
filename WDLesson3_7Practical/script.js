/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function interest(){
      let p = parseFloat(document.getElementById("p").value);
      let r = parseFloat(document.getElementById("p").value);
      let n = parseFloat(document.getElementById("p").value);
      let t = parseFloat(document.getElementById("p").value);
      let output = document.getElementById("output");

      let a = p * Math.pow(1 + r / n,  n * t);

      output.inneHTML  = "Interest " + a;



}

/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/



