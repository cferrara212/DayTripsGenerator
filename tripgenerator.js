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

while (isOk === "yes")

{
    
    
        let bookIt = prompt("wonderful, please answer 'yes' to confirm booking! If there has been a mistake please answer'no'")
        if (bookIt === "yes") 
        {
           alert("your travel plans have been booked!")
            isOk="no"   
        }
    
        else
        {
             let areYouSure= prompt("Would you like to change your randomly generated booking? Please answer 'yes' or 'no'")
             if (areYouSure === "yes") 
              {
                isOk="changing booking"
                changeBooking="yes"
              }
             else
             {
                 let completeCancel= prompt("Would you like to cancel your trip completely?")
                 if (completeCancel === "yes")
                 {
                     console.log("Thank you for considering us, please have a wonderful day!");
                     alert("Thank you for considering us, please have a wonderful day!");
                     isOk="complete cancel"
                 }
              
             }
             
              
        }

}


//
// to change booking
//

while (changeBooking === "yes")
  {
         alert("Thank you for your interest in changing your booking!");
       let whatChange= prompt("would you like to change your entire trip, or a part of your trip? Please enter 'entire' or 'part'");

       if (whatChange === "entire")
       {
        let isNewDestinationOk;
        let destination=getRandomFromArray(destinationLocations);
        let resteraunt=getRandomFromArray(resterauntLocations);
        let transportation=getRandomFromArray(transportationModes);
        let entertainment=getRandomFromArray(entertainmentVenues);

        
        alert("Your new trip has been generated!");
        alert("Your destination is " + destination + ", your chosen eatery will be a " + resteraunt + ", your transportation will be by " + transportation + ", and your entertainment venue will be " + entertainment );
        isNewDestinationOk = prompt("Are you happy with your trip? please type 'yes' or 'no'");

                if (isNewDestinationOk === "yes")
                  {
                    let bookNew = prompt("wonderful, please answer 'yes' to confirm booking! If there has been a mistake please answer'no'")
                    if (bookNew === "yes") 
                    {
                       alert("your travel plans have been booked!")
                        changeBooking="plans booked"   
                    }
                
                    else
                    {
                         let areYouSure= prompt("Would you like to change your randomly generated booking? Please answer 'yes' or 'no'")
                         if (areYouSure === "yes") 
                          {
                            isOk="changing booking"
                            changeBooking="yes"
                          }
                         else
                         {
                             let completeCancel= prompt("Would you like to cancel your trip completely?")
                             if (completeCancel === "yes")
                             {
                                 console.log("Thank you for considering us, please have a wonderful day!");
                                 alert("Thank you for considering us, please have a wonderful day!");
                                 isOk="complete cancel"
                                 changeBooking="complete cancel"
                             }
                         }
                    }               
                  }
        
       }

       if (whatChange === "part")
       {
           partOfTripToChange = prompt("What part of your trip would you like to change? Please type 'destination' , 'food' , 'transportation' , or 'entertainment' ")
              
       }

       else
       {

       }

  }

function getRandomFromArray(arrayForRandom)
{
   
     return arrayForRandom [Math.floor(Math.random() * arrayForRandom.length)];
}