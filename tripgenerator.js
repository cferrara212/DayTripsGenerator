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
     if (rebook==="yes")
     {
         changeBooking="yes";   
     }
     else
     { 
       changeBooking="canceled"
       isOk="caneled"
       alert("thank you");
    }
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
        
                  // 
                  //change part of trip
                  //
       }

       if (whatChange === "part")
       {
           let partOfTripToChange="waiting";
           partOfTripToChange = prompt("What part of your trip would you like to change? Please type 'destination' , 'food' , 'transportation' , or 'entertainment' ")
                 

            //
            // destination
            //
      
            while(partOfTripToChange=== "destination")
            {
              destination=getRandomFromArray(destinationLocations);
              alert("Wonderful, your new trip details have been generated!");
              alert("Your destination is " + destination + ", your chosen eatery will be a " + resteraunt + ", your transportation will be by " + transportation + ", and your entertainment venue will be " + entertainment );
              let isDestinationOk= prompt("Do you like your new destination? Please answer 'yes' or 'no'")
                  if (isDestinationOk=== "yes")
                  {
                      partOfTripToChange = prompt("Would you like to change another part of your trip, or proceed to booking? You may also cancel your trip if you are unsatisfied. Please type 'change' , 'book', or 'cancel'");
                       if (partOfTripToChange=== "book")
                       {
                         partOfTripToChange="plans booked";
                         whatChange="plans booked";
                         changeBooking="plans booked"
                         alert("Your travel plans have been booked!");
                         
                       }
                       else if (partOfTripToChange === "cancel")
                       {
                        partOfTripToChange="plans booked";
                        whatChange="plans booked";
                        changeBooking="plans booked"
                        alert("Your plans have been canceled, thank you.");
                       }
                       else 
                       {
                        partOfTripToChange = prompt("What part of your trip would you like to change? Please type 'food' , 'transportation' , or 'entertainment' ")
                           
                       }
                  }
                  else
                  {
                      
                  }
                
            }
        
           // restearaunt
           
           while(partOfTripToChange=== "food")
           {
             resteraunt=getRandomFromArray(resterauntLocations);
             alert("Wonderful, your new trip details have been generated!");
             alert("Your destination is " + destination + ", your chosen eatery will be a " + resteraunt + ", your transportation will be by " + transportation + ", and your entertainment venue will be " + entertainment );
             let isResterauntOk= prompt("Do you like your new resteraunt? Please answer 'yes' or 'no'")
                 if (isResterauntOk=== "yes")
                 {
                  partOfTripToChange = prompt("Would you like to change another part of your trip, or proceed to booking? You may also cancel your trip if you are unsatisfied. Please type 'change' , 'book', or 'cancel'");                      if (partOfTripToChange=== "book")
                      {
                        partOfTripToChange="plans booked";
                        whatChange="plans booked";
                        changeBooking="plans booked"
                        alert("Your travel plans have been booked!");
                        
                      }
                      else if (partOfTripToChange === "cancel")
                      {
                       partOfTripToChange="plans booked";
                       whatChange="plans booked";
                       changeBooking="plans booked"
                       alert("Your plans have been canceled, thank you.");
                      }
                      else 
                      {
                       partOfTripToChange = prompt("What part of your trip would you like to change? Please type 'destination' , 'transportation' , or 'entertainment' ")
                          
                      }
                 }
                 else
                 {
                     
                 }
               
           }

           // 
           // transportation
           //

           while(partOfTripToChange=== "transportation")
            {
              transportation=getRandomFromArray(transportationModes);
              alert("Wonderful, your new trip details have been generated!");
              alert("Your destination is " + destination + ", your chosen eatery will be a " + resteraunt + ", your transportation will be by " + transportation + ", and your entertainment venue will be " + entertainment );
              let isTransportationOk= prompt("Do you like your new mode of transportation? Please answer 'yes' or 'no'")
                  if (isTransportationOk=== "yes")
                  {
                    partOfTripToChange = prompt("Would you like to change another part of your trip, or proceed to booking? You may also cancel your trip if you are unsatisfied. Please type 'change' , 'book', or 'cancel'");                       if (partOfTripToChange=== "book")
                       {
                         partOfTripToChange="plans booked";
                         whatChange="plans booked";
                         changeBooking="plans booked"
                         alert("Your travel plans have been booked!");
                         
                       }
                       else if (partOfTripToChange === "cancel")
                       {
                        partOfTripToChange="plans booked";
                        whatChange="plans booked";
                        changeBooking="plans booked"
                        alert("Your plans have been canceled, thank you.");
                       }
                       else 
                       {
                        partOfTripToChange = prompt("What part of your trip would you like to change? Please type 'food' , 'destination' or 'entertainment' ")
                           
                       }
                  }
                  else
                  {
                      
                  }
                
            }
            //
            // entertainment
            //
            while(partOfTripToChange=== "entertainment")
            {
              entertainment=getRandomFromArray(entertainmentVenues);
              alert("Wonderful, your new trip details have been generated!");
              alert("Your destination is " + destination + ", your chosen eatery will be a " + resteraunt + ", your transportation will be by " + transportation + ", and your entertainment venue will be " + entertainment );
              let isEntertainmentOk= prompt("Do you like your new entertainment venue? Please answer 'yes' or 'no'")
                  if (isEntertainmentOk=== "yes")
                  {
                    partOfTripToChange = prompt("Would you like to change another part of your trip, or proceed to booking? You may also cancel your trip if you are unsatisfied. Please type 'change' , 'book', or 'cancel'");                       if (partOfTripToChange=== "book")
                       {
                         partOfTripToChange="plans booked";
                         whatChange="plans booked";
                         changeBooking="plans booked"
                         alert("Your travel plans have been booked!");
                         
                       }
                       else if (partOfTripToChange === "cancel")
                       {
                        partOfTripToChange="plans booked";
                        whatChange="plans booked";
                        changeBooking="plans booked"
                        alert("Your plans have been canceled, thank you.");
                       }
                       else 
                       {
                        partOfTripToChange = prompt("What part of your trip would you like to change? Please type 'food' , 'transportation' , or 'destination' ")
                           
                       }
                  }
                  else
                  {
                      
                  }
                
            }
           
       }



  }




//
// Functions
//

function getRandomFromArray(arrayForRandom)
{
   
     return arrayForRandom [Math.floor(Math.random() * arrayForRandom.length)];
}