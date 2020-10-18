window.onload = populateImageArray;

var imageArray = new Array();
var index = 0;

function ImageExist(url) 
{
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = url;
        img.onload = function(){
            console.log(url + " exists");
            resolve();
        };
        img.onerror = function(){
            console.log(url + " missing");
            reject();
        };
    })
    
}

function populateImageArray(){
    console.log('Checking: ./images/' + index + ".jpg");
    ImageExist('./images/' + index + ".jpg").then(function(result) {
        // It worked, use the result
        imageArray.push('./images/' + index + ".jpg");
        index++;
        populateImageArray();
   })
   .catch(function(error) {
        console.log(imageArray);
        
        var randomNum = Math.floor(Math.random() * imageArray.length);
        document.getElementById("myPicture").src = imageArray[randomNum];
    });
}