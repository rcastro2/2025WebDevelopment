let data;
async function init(){
  //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000"
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();

  output = document.getElementById("output");
  result = document.getElementById("result");
  let build = "";
  let ct = 0;
  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    build += card(complaint);
    ct++;
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;

  //Filling Dropdown Menus
  let complaint_types = fillDropDown("complaint_type");
  document.getElementById("complaint_types").innerHTML = complaint_types;

  let descriptors = fillDropDown("descriptor");
  document.getElementById("descriptors").innerHTML = descriptors;

  let agencies = fillDropDown("agency_name");
  document.getElementById("agencies").innerHTML = agencies;
  
}

function filterByZipAndAgency(){
  let zip = document.getElementById("zip").value;
  let agency = document.getElementById("agencies").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.incident_zip == zip && complaint.agency_name == agency){
      build += card(complaint);
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function filterByComplaintOrDescriptor(){
  let complaint_type = document.getElementById("complaint_types").value;
  let descriptor = document.getElementById("descriptors").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.complaint_type == complaint_type || complaint.descriptor == descriptor){
      build += card(complaint);
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
  
}

function card( info ){
  let b = "";
  build = `<div class="fitted card">
                    <h3>${info.complaint_type} (${info.bbl})</h3>
                    <hr>
                    <p>${info.borough}</p>
                    <p>${info.incident_zip}</p>
                    <p>${info.descriptor}</p>
                    <hr>
                    <p>${info.created_date}</p>
                    <hr>
                    <p>${info.agency}</p>
                </div>`;
  return build;
}

