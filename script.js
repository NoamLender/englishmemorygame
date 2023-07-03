'use strict';
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//starting:
const secondConatiner = document.querySelector('.second_container');
const startPopupWin = document.querySelector('.start');
const startBtn = document.querySelector('.start_btn');
const gridContainer = document.querySelector('.grid_container');
let nameInput = document.getElementById('name');
let fName = document.querySelector('.fname');

gridContainer.classList.add('blur');

startBtn.addEventListener('click', function(){
  if (nameInput.value){
  gridContainer.classList.remove('blur');
  startPopupWin.style.display = 'none';
  secondConatiner.style.display = 'none';
  fName.textContent =`המשחק של ${nameInput.value}`;
  }
});

///////////////////////////////////////////////
////////////////////////////////////////////////
//closing function:
const closePopup = document.querySelector('.end');
const closePopupGreet = document.querySelector('.popup_greet');

let closingGame = function(){

  secondConatiner.style.display = 'grid';
  closePopup.classList.remove('hidden');
  gridContainer.classList.add('blur');
  closePopupGreet.textContent = `כל הכבוד ${nameInput.value}!`;

}

///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//timer:
 var timerElement = document.getElementById('#timer');
const timerText = document.querySelector('.timer_text');

 let startTime;
 let elapesdTime = 0;
 let timeInterval;

 // a func to start the timer:
 let startTimer =  function(){
    startTime = Date.now();
    timeInterval = setInterval(updateTimer, 1000);
 };

 // a func to update the timer display:

 let updateTimer = function(){
  let elapsedMilliseconds = Date.now() - startTime + elapesdTime;
  var seconds = Math.floor((elapsedMilliseconds / 1000) % 60); // Calculate the seconds
  var minutes = Math.floor((elapsedMilliseconds / (1000 * 60)) % 60); // Calculate the minutes
  
  timerText.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

 }

 // a func to stop the timer:
  let stopTimer = function(){
    clearInterval(timeInterval);
    elapesdTime += Date.now() - startTime;
   

  };

///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//all the game implement:


const birdAdio = document.querySelector('#birdAudio');
const catAudio = document.querySelector('#catAudio');
const dogAudio =document.querySelector('#dogAudio');
const elephantAudio = document.querySelector('#elephantAudio');
const chairAudio = document.querySelector('#chairAudio');
const doorAudio = document.querySelector('#doorAudio');
const houseAudio = document.querySelector('#houseAudio');
const tableAudio = document.querySelector('#tableAudio');
const eggAudio = document.querySelector('#eggAudio');
const windowAudio = document.querySelector('#windowAudio');
const treeAudio = document.querySelector('#treeAudio');
const horseAudio = document.querySelector('#horseAudio');
const frogAudio = document.querySelector('#frogAudio');
const strawberryAudio = document.querySelector('#strawberryAudio');
const cakeAudio = document.querySelector('#cakeAudio');
const plateAudio = document.querySelector('#plateAudio');
const bedAudio = document.querySelector('#bedAudio');
const tomatoAudio = document.querySelector('#tomatoAudio');
const cucumberAudio = document.querySelector('#cucumberAudio');
const swingAudio = document.querySelector('#swingAudio');
const slideAudio = document.querySelector('#slideAudio');
const carAudio = document.querySelector('#carAudio');
const moonAudio = document.querySelector('#moonAudio');
const sunAudio = document.querySelector('#sunAudio');
const icecreamAudio = document.querySelector('#icecreamAudio');

class Cards{
    constructor (objectName, image, audioFile){
        this.objectName = objectName;
        this.image = image;
        this.audioFile = audioFile;
    }
};

let birdCard = new Cards('bird','images/bird.jpeg', birdAdio);
let dogCard = new Cards('dog','images/dog.jpeg', dogAudio);
let elephantCard = new Cards('elphant','images/elephant.jpg', elephantAudio);
let catCard = new Cards('cat','images/cat.jpeg', catAudio)
let chairCard = new Cards('chair','images/chair.jpeg', chairAudio);
let doorCard = new Cards('door','images/door.jpg', doorAudio);
let eggCard = new Cards('egg','images/egg.jpg', eggAudio);
let houseCard = new Cards('house','images/house.jpeg', houseAudio);
let tableCard = new Cards('table','images/table.jpeg', tableAudio);
let windowCard = new Cards('window','images/window.jpeg', windowAudio);
let treeCard = new Cards('tree', 'images/tree.jpg',treeAudio);
let horeseCard = new Cards('horse', 'images/horse.jpeg',horseAudio);
let frogCard = new Cards('frog', 'images/frog.jpeg',frogAudio);
let strawberryCard = new Cards('strawberry', 'images/strawberry.jpeg',strawberryAudio);
let cakeCard = new Cards('cake', 'images/cake.jpeg',cakeAudio);
let plateCard = new Cards('plate', 'images/plate.jpeg',plateAudio);
let bedCard = new Cards('bed', 'images/bed.jpeg',bedAudio);
let tomatoCard = new Cards('tomato', 'images/tomato.jpeg',tomatoAudio);
let cucumCard = new Cards('cucumber', 'images/cucumber.jpg', cucumberAudio);
let icecreamCard = new Cards('icecream', 'images/icecream.jpeg',icecreamAudio);
let swingCard = new Cards('swing', 'images/swing.jpeg',swingAudio);
let slideCard = new Cards('slide', 'images/slide.jpeg',slideAudio);
let carCard = new Cards('car', 'images/car.jpeg',carAudio);
let moonCard = new Cards('moon', 'images/moon.jpeg',moonAudio);
let sunCard = new Cards('sun', 'images/sun.jpeg',sunAudio);




/// creating and suffling an array:

const fullQs = [birdCard,dogCard,catCard, elephantCard, chairCard, doorCard, eggCard, houseCard, tableCard, windowCard, treeCard,horeseCard,frogCard, strawberryCard,cakeCard, plateCard, bedCard, tomatoCard, cucumCard, icecreamCard, swingCard, slideCard, carCard, moonCard, sunCard];
const firstArr =[];
for (let x = 0; x < 10; x++){
  let y = Math.floor(Math.random() * 10);
  firstArr.push(fullQs[y]);
  fullQs.splice(y, 1);
};

console.log(firstArr);

const cardsArr = [...firstArr, ...firstArr];
console.log(cardsArr);
const cardCount= cardsArr.length;
const cardContainer = document.querySelector('.card_grid');

// shuffling the array:
const shuffling = function(arr){
    for (let a = arr.length - 1; a > 0; a--){
        let b = Math.floor(Math.random() * (a + 1));
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
       
    }
    return arr;
}

shuffling(cardsArr);


//consts to keep up with the gane state:
 let revealedMatchingCards = 0;
 let activeCard = null;
 let waitingEndMove = false;
 let firstClick = true;

 // a function to build the cards, and to work the game:

 const creatingTheCards = function(cardItself){

    let element = document.createElement('div');
    element.classList.add('card');
    element.setAttribute('data-name', cardItself.objectName);
    element.setAttribute('data-revealed', 'false');

    element.addEventListener('click', function(i){

      if (firstClick){
        startTimer();
      }

      firstClick = false;
      
      const revealed = element.getAttribute('data-revealed');
      
      if (waitingEndMove || revealed === 'true'|| element === activeCard){
        return
      };

      
      element.style.backgroundImage = `url(${cardItself.image})`;
      element.style.backgroundSize = `cover`;
      cardItself.audioFile.play();

      if (!activeCard){
        activeCard = element;
        return;
        //in here we are saying: if there is no active tile (which the start point,
        // since we declared it as null), the active card will be the first element we clicked.
        // and than added the return so we will exit the function.
      };

      const nameToMatch = activeCard.getAttribute('data-name');

      //this if statment is refering to if there is an active tile, that is the second click
      //on the second tile AND the 2nd tile i clicked on is matching to the active tile.:
      if (nameToMatch === cardItself.objectName){
        waitingEndMove = false;
        activeCard = null;
        revealedMatchingCards +=2;

        if (revealedMatchingCards === cardCount){
            stopTimer();
            closingGame();
        }
        return;
      };

      //if they do not match: everything is cleard (by returning to null)
      // and we are going back to the first state by making:
      //waitingEndMove = false;
      //activeCard = null;


      waitingEndMove = true;

      setTimeout(function(){
        element.style.backgroundImage = null;
        activeCard.style.backgroundImage = null;

        waitingEndMove = false;
        activeCard = null;
      }, 1000);
    });


    return element;

 }
 

 // a loop to build the cards. the function  call will be here:

 for(let i = 0; i < cardCount; i++){
    
   
    const cardItself = cardsArr[i];
    const cardName = cardItself.objectName;
    const cardImage = cardItself.image;
    const cardAudio = cardItself.audioFile;
    const cardFunc = creatingTheCards(cardItself);
    cardContainer.appendChild(cardFunc);

 }

 /////////////////////////////////////////////////////
 ////////////////////////////////////////////////////
 //some more stuff:

 const playAGainBtn = document.querySelectorAll('.again_btn');

 playAGainBtn.forEach(function(b){
  b.addEventListener('click', () =>{ location.reload()});
 })









