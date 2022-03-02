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
        console.log(phone);
    })
};


