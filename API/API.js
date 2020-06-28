
let loadImageButton = document.getElementsByClassName("ButtonTitle")[0];
loadImageButton.addEventListener('click',function(){


    fetch("https://pixabay.com/api/?key=17249747-a0b1849993e621cd83b0b32b8&q=yellow+flowers&image_type=photo&pretty=true")
    .then(respones => respones.json())
    .then((LoadImage) => {
        console.log(LoadImage);
        RandomImage(LoadImage.hits[1]);
        
    })
   .catch((error) => console.warn("Error", error));

    const RandomImage = (ImageDetails) => {
        document.querySelector(".ranImage").src = ImageDetails.largeImageURL
        document.querySelector(".Image_Information").innerHTML += '<a href="'+ImageDetails.largeImageURL+'" target="blank" >link</a>'   

      
    };    
});
loadImageButton.style.cursor = "pointer";




    