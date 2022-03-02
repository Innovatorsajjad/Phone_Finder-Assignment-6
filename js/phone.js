//variable diclaration.............
 const displayBoxData = document.getElementById("DisplayBoxOfData");

// Connect search Button
const searchButton =()=>{
    const searchBox = document.getElementById("SearchBox");
    const searchBoxValue= searchBox.value ;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBoxValue}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayData(data.data));
};
//display data ...........
const displayData = (info) =>{
    info.forEach(phone=>{
        const div = document.createElement("div");
        div.classList.add("col-lg-4","mb-4")
        div.innerHTML=`
        <div class="card mx-auto text-center" style="width: 18rem;">
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


