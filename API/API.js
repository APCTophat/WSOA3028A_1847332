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
let loadImageButton = document.getElementsByClassName("GetImageButton")[0];
loadImageButton.addEventListener('click',function(){

    fetch("http://www.splashbase.co/api/v1/images/random")
    .then(respones => respones.json())
    .then((LoadImage) => {
        console.log(LoadImage);
        RandomImage(LoadImage);
        
    })
    .catch((error) => console.warn("Error", error));

    const RandomImage = (ImageDetails) => {
        document.querySelector(".ranImage").src = ImageDetails.url
        document.querySelector(".Image_Information").innerText = ImageDetails.url
    };    
});
loadImageButton.style.cursor = "pointer";




    