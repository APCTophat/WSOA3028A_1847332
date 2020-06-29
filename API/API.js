var text1 = "";
var text2 = "";
var text3 = "";

var PhotoCount = 0;

var PhotoCountMax = 0;

let formButton = document.getElementsByClassName("TheButton")[0];
formButton.addEventListener('click', function(){
    var x = document.getElementById("TheForm");
    text1 = x.elements[0].value;
    console.log(text1);
    text2 = x.elements[1].value;
    console.log(text2);
    text3 = x.elements[2].value;
    console.log(text3);
    GetImageFunction(text1, text2, text3, PhotoCount);
    PhotoCount = 0;

});
formButton.style.cursor = "pointer";

let NextButton = document.getElementsByClassName("TheNextButton")[0];
NextButton.addEventListener('click', function(){
    if(PhotoCount < PhotoCountMax-1){
        PhotoCount++;
    }
    
    GetImageFunction(text1, text2, text3, PhotoCount);


});
NextButton.style.cursor = "pointer";

let PreviousButton = document.getElementsByClassName("ThePreviousButton")[0];
PreviousButton.addEventListener('click', function(){
    
    if(PhotoCount >= 1){
        PhotoCount--;
    }
    GetImageFunction(text1, text2, text3, PhotoCount);

});
PreviousButton.style.cursor = "pointer";
function GetImageFunction(text1, text2, text3, PhotoCount){
    var url = new URL("https://pixabay.com/api/?key=17249747-a0b1849993e621cd83b0b32b8&q=" );
    var count = 0;
    if(text1 != ""){
        url += text1;
        count++;
    }
    
    if(text2 != ""){
        if(count !=0){
            url += "+";
        }
        url += text2;
        count++;
    }

    if(text3 != ""){
        if(count !=0){
            url += "+";
        }
        url += text3;
    }

    if(count != 0){

        
        url +=  "&image_type=photo&pretty=true";
        console.log(url);
        /*var url = new URL("https://pixabay.com/api/?key=17249747-a0b1849993e621cd83b0b32b8&q=" + input +"&image_type=photo&pretty=true")*/

        fetch(url)
        .then(respones => respones.json())
        .then((LoadImage) => {
            if(LoadImage.total > 20){
                PhotoCountMax = 20;
            }
            else{
                PhotoCountMax = LoadImage.total;
                
            }
            document.querySelector(".Image_Count").innerHTML = PhotoCount+1 + " / " + PhotoCountMax; 
            console.log(LoadImage.total)
            console.log(LoadImage);
            RandomImage(LoadImage.hits[PhotoCount]);
            
        })
    .catch((error) => console.warn("Error", error));

        const RandomImage = (ImageDetails) => {
            document.querySelector(".ranImage").src = ImageDetails.largeImageURL;
            document.querySelector(".Image_Information").innerHTML = '<a href="'+ImageDetails.pageURL+'" target="blank" >link to the page</a>';
            
        }; 
    }  
    else{
        document.querySelector(".Image_Information").innerHTML = "Please insert a word";
    } 
}
    







    