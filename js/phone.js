//variable diclaration.............
 const displayBoxData = document.getElementById("DisplayBoxOfData");
 const error = document.getElementById("error");

// Connect search Button
const searchButton =()=>{
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
               <a href="#" class="btn btn-success" onclick="Details('${phone.slug}')">Details</a>
          </div>
        </div>
        </div>`
        displayBoxData.appendChild(div);
    })
};


