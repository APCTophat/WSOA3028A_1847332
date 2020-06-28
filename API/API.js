/*
fetch("https://api.chucknorris.io/jokes/random")
.then((r) => r.json())
.then((chuck) => {
    console.log(chuck);
    console.log('Chuck Reveived');
    handleChuck(chuck);
})
.catch((error) => console.warn("Our Warning", error));

const handleChuck = (chuckDetails) => {
    document.querySelector("p").innerText = chuckDetails.value;
    document.querySelector("img").src = chuckDetails.icon_url;
    console.log("Thanks Lucky");
};

console.log('Should be first');
*/
let loadImageButton = document.getElementsByClassName("ButtonTitle")[0];
loadImageButton.addEventListener('click',function(){

    /*http://www.splashbase.co/api/v1/images/search?query=>Dog */
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



/*
    fetch("http://www.splashbase.co/api/v1/images/random")
    .then(respones => respones.json())
    .then((LoadImage) => {
        console.log(LoadImage);
        RandomImage(LoadImage);
        
    })
    .catch((error) => console.warn("Error", error));

    const RandomImage = (ImageDetails) => {
        document.querySelector(".ranImage").src = ImageDetails.url
        document.querySelector(".Image_Information").innerText = 'Image Link' + '' 

        /*var a = document.createElement('a');
        a.setAttribute('href',ImageDetails.url);
        a.innerHTML = ImageDetails.url; 
        document.querySelector(".Image_Information").appendChild(a);*/

      /*  document.querySelector(".Image_Information").innerHTML += '<a href="'+ImageDetails.url+'" target="blank" >link</a>' */

       /* document.querySelector(".Image_Information").innerHTML += 'Link'.link(ImageDetails.url); */  /*
    }; 
    */  
});
loadImageButton.style.cursor = "pointer";




    