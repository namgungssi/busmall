// variable
surveyImagesArray= [];

//object constructor
function surveyImages(name, filePath){
  this.name= name;
  this.filePath= filePath;
  this.timesClicked= 0;
  this.timesRendered= 0;
  surveyImagesArray.push(this);
}

//generate random numbers
function randomArray (min, max){
  for(var i = 0; i < 3; i++){
    var displayArray= [];
    displayArray.push(Math.floor(Math.random() * (max - min)) + min);
  }
  while (displayArray[0] === displayArray[1] ||
    displayArray[1] === displayArray[2] ||
    displayArray[0] === displayArray[2]){
      displayArray.splice(1,2); //splice = changes content of an array, adding new elements while removing old.
      displayArray.push(Math.floor(Math.random() * (max - min)) + min);
      displayArray.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return displayArray;
  }

  //to clear elements
  function clearBox(elementId){
    document.getElementById(elementId).innerHTML = "";
  }
