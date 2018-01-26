'use strict';

//array to store all Busmall image instances
Images.allBusMallImages = [];
Images.totalNumberOfClicks = 0;

Images.lastDisplayed = [];

//access the table element from DOM
var tableElement = document.getElementById('order-summary');

//array to store names for our chart labels
var imageNames = [];

//array to store votes per product
var productVotes = [];


//make a constructor function for Images objects
function Images(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  Images.allBusMallImages.push(this);
  imageNames.push(this.name);
}
console.log(Images.allBusMallImages);

//create instances of Busmall Pics
new Images('R2D2 bag', 'img/bag.jpg');
new Images('banana cutter', 'img/banana.jpg');
new Images('bathroom ipad stand', 'img/bathroom.jpg');
new Images('rainboots with holes', 'img/boots.jpg');
new Images('tiny breaky cooker', 'img/breakfast.jpg');
new Images('horrible gum', 'img/bubblegum.jpg');
new Images('rounded chair', 'img/chair.jpg');
new Images('cthulhu monster figure', 'img/cthulhu.jpg');
new Images('duck bill for dogs', 'img/dog-duck.jpg');
new Images('dragon meat', 'img/dragon.jpg');
new Images('silverware pens', 'img/pen.jpg');
new Images('pet foot brooms', 'img/pet-sweep.jpg');
new Images('pizza scissors', 'img/scissors.jpg');
new Images('terrible shark sleeping bag', 'img/shark.jpg');
new Images('babby sweep outfit', 'img/sweep.png');
new Images('tauntaun sleeping bag', 'img/tauntaun.jpg');
new Images('unicorn meat', 'img/unicorn.jpg');
new Images('tentacle usb', 'img/usb.gif');
new Images('looped water can', 'img/water-can.jpg');
new Images('wine glass', 'img/wine-glass.jpg');

//LOCAL STORAGE
var multipleSurveysTotal = [];

if (localStorage.votesInStorage) {
  for (var j = 0; j < productVotes.length; j++) {

    multipleSurveysTotal[j] = productVotes[j] + JSON.parse(localStorage.votesInStorage)[j];
  }
} else {
  multipleSurveysTotal = productVotes;
}
localStorage.votesInStorage = JSON.stringify(multipleSurveysTotal);


//When the user clicks on the button, toggle between hiding and showing the dropdown
function dropdownFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {

    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


//populate top of cart page with ordered item information

//get the locally stored ordered item  and quantity
if(localStorage.orderedItemCart){
  itemCart = JSON.parse(localStorage.getItem('orderedItemCart'));
  quantityCart = JSON.parse(localStorage.getItem('orderedQuantityCart'));
}
else {
  var tableRowElement = document.getElementById('order-summary');
  tableRow.textContent = 'Sorry there is no record of you selecting any items.';

}

//display ordered items and quantity on the page
function renderTable(){

  //establish table content rows and cells (data cells)
  var tableRowElement = document.createElement('tr');
  var tableDataElement = document.createElement('td');

  //create row for each product that has data cells for votes, times shown and % click rate
  for(var i = 0; i < productNames.length; i++){
    tableRowElement = document.createElement('tr');

    tableDataElement = document.createElement('td');
    tableDataElement.textContent = productNames[i];

    tableRowElement.appendChild(tableDataElement);
    productTable.appendChild(tableRowElement);

    tableDataElement = document.createElement('td');
    tableDataElement.textContent = productVotes[i];
    tableRowElement.appendChild(tableDataElement);
    productTable.appendChild(tableRowElement);

    tableDataElement = document.createElement('td');
    tableDataElement.textContent = productShown[i];
    tableRowElement.appendChild(tableDataElement);
    productTable.appendChild(tableRowElement);


for(var i in itemCart){
  liElement.textContent = 'You\'ve selected ' + quantityCart[i] + 'of ' + itemCart +  
}


function makeHeaderRow(){

  //header for table of results about product votes
  var productName = document.createElement ('td');
  var tableRowElement = document.createElement('tr');

  productName.textContent = 'Product';
  tableRowElement.appendChild(productName);

  productTable.appendChild(tableRowElement);

  var timesVoted = document.createElement ('td');
  timesVoted.textContent = '# Votes';
  tableRowElement.appendChild(timesVoted);

  productTable.appendChild(tableRowElement);

  var timesShown = document.createElement ('td');
  timesShown.textContent = '# Times Shown';
  tableRowElement.appendChild(timesShown);

  productTable.appendChild(tableRowElement);

  var preferenceRate = document.createElement ('td');
  preferenceRate.textContent = 'Preference Rate %';
  tableRowElement.appendChild(preferenceRate);

  productTable.appendChild(tableRowElement);
}

//create event listener for clicks on images
sectionElement.addEventListener('click', manageClick);

