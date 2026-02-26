/* Note: There are three potential errors in the below code that can be addressed in either the HTML or the JS                    
            1) Check the id of the text inputs and the div container (Runtime)
            2) Incorrect reference to event handler (Runtime)
            3) Insufficient text inputs for calculating the average of three numbers (Logical / Runtime)
*/
function avg(){
  let g1 = parseInt(document.getElementById("g1").value);
  let g2 = parseInt(document.getElementById("g2").value);
  let output = document.getElementById("results");

  let a = (g1 + g2) / 2;

  output.innerHTML = "Average is" + a;
}
/* Note: There are three errors in the above code that can only be handled in JS.
             1) Missing .value attribute in order to retrieve the information from the text inputs (Runtime)
             2) Incorrect function reference to get an element by its id (Syntax)
             3) Incorrect calculation of the average of three grades (Logical)
             4) Incorrect symbol used for string interpolation (Logical)

*/