/* Create a function bridge that,
1) Changes the background color of the element with an id of "box" to blue
2) Change the HTML inside of the element with an id of "title" to Brooklyn Bridge
3) Change the source of the element with an id of "landmark" to bridge.jpg
*/


function bridge(){
  document.getElementById("title").innerHTML = "Brooklyn Bridge";
  document.getElementById("landmark").src="bridge.jpg";

}
function park(){
  document.getElementById("title").innerHTML = "Central Park";
}
function square(){
  document.getElementById("title").innerHTML = "Times Square";
}