//variable diclaration.............
 const displayBoxData = document.getElementById("DisplayBoxOfData");
 const error = document.getElementById("error");
 const Details=document.getElementById("details");

// Connect search Button
const searchButton =()=>{
    displayBoxData.innerHTML=""
    const searchBox = document.getElementById("SearchBox");
    const searchBoxValue= searchBox.value ;
    if(searchBoxValue==""){
        displayBoxData.innerHTML=""
        error.innerHTML=`
        <h3> Please inter a Phone Name.</h3>
        `
        return
    }
  else{
    error.innerHTML="";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBoxValue}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayData(data.data));
    searchBox.value ="";
  }
};
//display data ...........

const displayData = (info) =>{
    if(info.length <=0){
        error.innerHTML=`
        <h3> Not Found</h3>
        `
        return
    }
    const firstTwenty = info.slice(0,20)
    
    firstTwenty.forEach(phone=>{
        const div = document.createElement("div");
        div.classList.add("col-lg-4","mb-4")
        div.innerHTML=`
        <div class="mx-auto text-center" style="width: 18rem;">
          <img src="${phone.image}" class="card-img-top" alt="...">
           <div class="card-body">
               <h5 class="card-title">${phone.phone_name}</h5>
               <p class="card-text">${phone.brand}</p>
               <div class="buttons d-flex justify-content-around">
               <a href="#" class="btn text-light"  style="background-color: #F06843;" onclick="DisplayDetails('${phone.slug}')">Details</a>
          </div>
        </div>
        </div>`
        displayBoxData.appendChild(div);
    })
};
 // see more option.................

const DisplayDetails=(id)=>{
  const url=`https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(response=>response.json())
  .then(data =>DetailsData(data.data));
}
 const DetailsData =phoneDetails=>{
   console.log(phoneDetails)
   Details.innerHTML=`
   <div class=" transparentBackground w-75 text-center mx-auto mb-5">
   <div class="card-body">
   <img src="${phoneDetails.image}" class="card-img-top w-25" alt="...">
   <h3 class="card-title">Name: ${phoneDetails.name}</h3>
     <h5 class="card-title">Brand: ${phoneDetails.brand}</h5>
     <h4 class="card-title">Chipset: ${phoneDetails.chipSet}</h4>
     <h4 class="card-title">Sensor: ${phoneDetails.mainFeatures.sensors [0]}</h4>
     <h4 class="card-title"> ${phoneDetails.mainFeatures.sensors[1]}</h4>
     <h4 class="card-title"> ${phoneDetails.mainFeatures.sensors[2]}</h4>
     <h4 class="card-title"> ${phoneDetails.mainFeatures.sensors[3]}</h4>
     <h4 class="card-title">Memory: ${phoneDetails.mainFeatures.memory}</h4>
     <h4 class="card-title">Display: ${phoneDetails.mainFeatures.displaySize}</h4>
     <h4 class="card-title">USB: ${phoneDetails.others.USB}</h4>
     <p class="card-text"> ReleaseDate: ${phoneDetails.releaseDate ? phoneDetails.releaseDate:"not founded"}</p>
     
   </div>
 </div>
   `

 }