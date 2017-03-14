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
  var getThreeIndex = [];
  for (var i = 0; i < 3; i++) {
    getThreeIndex.push(Math.floor(Math.random() * (max - min)) + min);
  }
  while (getThreeIndex[0] === getThreeIndex[1] || getThreeIndex[1] === getThreeIndex[2] || getThreeIndex[0] === getThreeIndex[2]) {
    getThreeIndex.splice(1, 2);
    getThreeIndex.push(Math.floor(Math.random() * (max - min)) + min);
    getThreeIndex.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return getThreeIndex;
}

  //to clear elements
  function clearBox(elementId){
    document.getElementById(elementId).innerHTML = '';
  }

//count clicks
function addClicks(id){
  for(var i = 0; i < surveyImagesArray.length; i++){
    if (surveyImagesArray[i].name == id){
      surveyImagesArray[i].timesClicked ++;
      totalClicks ++;
      console.log('total clicks: ' + totalClicks);
      break;
    }
  }
}

//to render three random images
function renderImages(){
  key= randomNoArray(0, surveyImagesArray.length);
  for(var i = 0; i < 3; i++){
    randomObject= surveyImagesArray[key[i]];
    console.log('randomObject', randomObject);

    elBody= document.getElementById('marketResearch');
    for(var i = 0; i < 3; i++){
      randomObject = surveyImagesArray[getThreeIndex[i]];
    elImg.setAttribute('class', 'survey-display')
    elImg.setAttribute('src', randomObject.filePath);
    elImg.setAttribute('id', randomObject.name);
    elBody.appendChild(elImg);
    randomObject.timesRendered++;
  }
eventListenerClickImage();
}

//event handler
function handleImageClick(event){
  var imgEl= event.target;
  var idEl= imgEl.id;
  addClicks(idEl);
  clearBox('marketResearch');
  if (totalClicks < 15){
  renderImages();
}else{
  createButton('results', 'Click for results!');
  eventListenerResultsButton();
}
}

function eventListenerClickImage(){
  var surveyDisplay= document.getElementByClassName('survey-display');
  for(var i = 0; i < surveyDisplay.length; i++){
    surveyDisplay[i].addEventListener('click', handleImageClick);
  }
}

function eventListenerResultsButton(){
  var button= document.getElementById('results');
  button.addEventListener('click', generateGraph);
}

function BarChartData(){
  this.labels= [];
  this.datasets= [];
}

function BarDataSet(labelName, color){
  this.label= labelName;
  this.fillColor= color;
  this.strokeColor= color;
  this.highlightFill= color;
  this.highlightStroke= color;
  this.data= [];
}

BarDataSet.prototype.setFields= function (inputArray, field){
  for(var i = 0; i < inputArray.length; i++){
    this.data.push(inputArray[i][field]);
  }
};


}

function eventListener(){
  var surveyDisplay= document.getElementByClassName('survey-display');
  for(var i = 0; i < surveyDisplay.length; i++){
    surveyDisplay[i].addEventListener('click', handleImageClick);
  }
}

//render Images & Event Listener function
renderImages();
eventListener();


//survey images (I'm sure I can factor this)
var bagImg = new SurveyImages('bag', 'pic/bag.jpg');
var bananaImg = new SurveyImages('banana', 'pic/banana.jpg');
var bathroomImg = new SurveyImages('bathroom', 'pic/bathroom.jpg');
var bootsImg = new SurveyImages('boots', 'pic/boots.jpg');
var breakfastImg = new SurveyImages('breakfast', 'pic/breakfast.jpg');
var bubblegumImg = new SurveyImages('bubblegum', 'pic/bubblegum.jpg');
var chairImg = new SurveyImages('chair', 'pic/chair.jpg');
var cthulhuImg = new SurveyImages('cthulhu', 'pic/cthulhu.jpg');
var dogduckImg = new SurveyImages('dog-duck', 'pic/dog-duck.jpg');
var dragonImg = new SurveyImages('dragon', 'pic/dragon.jpg');
var penImg = new SurveyImages('pen', 'pic/pen.jpg');
var petsweepImg = new SurveyImages('pet-sweep', 'pic/pet-sweep.jpg');
var scissorsImg = new SurveyImages('scissors', 'pic/scissors.jpg');
var sharkImg = new SurveyImages('shark', 'pic/shark.jpg');
var sweepImg = new SurveyImages('sweep', 'pic/sweep.png');
var tauntaunImg = new SurveyImages('tauntaun', 'pic/tauntaun.jpg');
var unicornImg = new SurveyImages('unicorn', 'pic/unicorn.jpg');
var usbImg = new SurveyImages('usb', 'pic/usb.gif');
var watercanImg = new SurveyImages('water-can', 'pic/water-can.jpg');
var wineglassImg = new SurveyImages('wine-glass', 'pic/wine-glass.jpg');
