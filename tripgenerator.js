"use strict"

//
// to randomly generate array indexes
//


let destinationLocations= ["France", "Bali", "Nigeria", "British Columbia"];
let resterauntLocations= ["Bistro", "Sushi Bar", "Grill", "Mediterranian Bar"];
let transportationModes= ["Boat", "Plane", "Train", "Bus", "Cruise", "SubmarinePlane"];
let entertainmentVenues= ["A Play", "A Magic Show", "A Concert", "Sky Diving", "Scuba Diving", "A Lavish Party"];


let destination=getRandomFromArray(destinationLocations);
let resteraunt=getRandomFromArray(resterauntLocations);
let transportation=getRandomFromArray(transportationModes);
let entertainment=getRandomFromArray(entertainmentVenues);



alert("Here is an annoying allert to let you know that your random trip is now being generated!");
alert("Your destination is " + destination + ", your chosen eatery will be a " + resteraunt + ", your transportation will be by " + transportation + ", and your entertainment venue will be " + entertainment );


let isOk;
let changeBooking;
isOk= prompt("Is your randomly generated trip ok? Please answer 'yes' or 'no'");

if (isOk === "no")
{
let rebook=prompt("Would you like to change your randomly generated booking? Please type 'yes or 'no'")
     if (rebook="yes")
     {
         changeBooking="yes";   
     }
     else alert("thank you");
     
}

//
// to confirm booking
//




//
// to change booking
//


function getRandomFromArray(arrayForRandom)
{
   
     return arrayForRandom [Math.floor(Math.random() * arrayForRandom.length)];
}