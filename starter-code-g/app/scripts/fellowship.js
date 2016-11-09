console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1
 
 function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body


var middleEarth = document.createElement('section');

for(var i = 0, len = lands.length; i < len; i++){

// adding each land as an article tag

var land = document.createElement('article');

// inside each article tag include an h1 with the name of the land
//creating hd1 
var h1 = document.createElement('h1');
//creating names list texNode
var landNames = document.createTextNode(lands[i]); 
//sorting out the family dynamics
h1.appendChild(landNames);

land.appendChild(h1);

middleEarth.appendChild(land);

}

// append middle-earth to your document body

body.appendChild(middleEarth);

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

  //creating unorderlist 
  var hobbitList = document.createElement('ul');

  var hobbit = document.createElement('li');

  hobbit.classname='hobbit';

  for (var i = 0; i < hobbits.length; i++){

    hobbit.textContent=hobbits[i];
    hobbitList.appendChild(hobbit);
  }
var theShire = body.querySelectorAll('article')[0];
theShire.appendChild(hobbitList);

}
makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

var theRing = document.createElement('div');

theRing.setAttribute('class', 'magicImbuedJewelry');

theRing.addEventListener('click', nazgulScreech);

var frodo = body.querySelectorAll('li')[0];

frodo.appendChild(theRing);

console.log ("okay,okay");

}

keepItSecretKeepItSafe();



// Part 4

var rivendell = body.querySelectorAll('article')[1];
function makeBuddies()
{
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

var buddyBox = document.createElement('aside');

var buddyList = document.createElement('ul');

  for(var i = 0, len = buddies.length; i < len; i++){


  var buddy = document.createElement('li');

  buddy.textContent = buddies[i];

  buddyList.appendChild(buddy);

  }


buddyBox.appendChild(buddyList);

rivendell.appendChild(buddyBox);

}

makeBuddies ();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
var strider = rivendell.querySelectorAll('li')[3];

  strider.textContent= 'Aragorn';

}
beautifulStranger ();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbitList);
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
var fellowshipMembers = rivendell.querySelectorAll('li');

var theFellowship = document.createElement('div');

  for(var i = 0, len = fellowshipMembers.length; i < len; i++){

  theFellowship.appendChild(fellowshipMembers[i]);

  }
}

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}