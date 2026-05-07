function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = `
      <div class="card">
            <h2> ${ school.name } </h2>
            <img src="${school.image}">
            <p>${school.address}</p>
      </div>
  `
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    "name":"Carlos Vives",
    "image":"https://www.billboard.com/wp-content/uploads/2023/08/players-carlos-vives-billboard-2023-bb11-1-del-vecchio-1260.jpg?w=1260&h=840&crop=1",
    "album":"https://upload.wikimedia.org/wikipedia/en/2/28/La_Tierra_del_Olvido_-_Carlos_Vives.jpg",
    "url":"https://en.wikipedia.org/wiki/Carlos_Vives_discography"
  }
  let output = document.getElementById("output");
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.

}


