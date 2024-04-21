//TODO__ Day 39 , Question  no# 115.
//? Use a switch statement to log the days of the week based on a number (1 - 7)

function logDaysOfWeeks (dayNumber : number){
    switch (dayNumber) {
        case 1 :  
        console.log("Sunday");
         break
           
         case 2 : 
         console.log("Monday");
          break
          case 3 : 
          console.log("Tuesday")
          break
          case 4 : 
          console.log("Wednsday ")
          break
          case 5 : 
          console.log("Thursday")
          break
          case 6 : 
          console.log("Friday")
          break
          case 7 : 
          console.log("Saturday")
          break
          default :
          console.log("Invalid day number")

    }
}

logDaysOfWeeks(6)//*Logs the swithc statement according to the nummber, so we will get our desired day by day number


//TODO__ Day 39 , Question  no# 116.
//?Create a switch case that matches several cases to the same code bok  represnting seasons.


function weatherMonths (months : number) {
    switch (months) {
        case 12 :
        case 1 :
        case 2 : 
        console.log("Winter")
         break
         case 3 :
            console.log("Autumn")
            break
         case 4 :  
         case 5 :
         case 6 :
         case 7 :
         case 8 : 
            console.log("Summer")
            break
        case 9:
        case 10:
        case 11:
            console.log("Spring")
      default : console.log("Plese enter a valid month number")
    }
}

weatherMonths(3);


//TODO__ Day 39 , Question  no# 117.
//? Implement switch statement, that evalutes an expression and uses the defualt case if none of the cases mathch.
function spechCheckmachine (speed : number){
    switch (speed){
        case 200 :
            console.log("you are driving too Fast! Please drive slow to avoide excedents 'Speed limmit is 120 kmph'.")
            break
        case 150 :
            console.log("You are driving Fast! Please decrease your speed. 'Speed Limit is 120 kmph'.")
            break
            break
        case 120 :
            console.log("Excellent! You are driving perfectlly. 'Wish you happy journey'.")
            break
            break
        case 60 :
            console.log("You are driving  in Fast line but your speed is not enought to drive is fast line. Please increase your speed. 'Min Speed Limit is 80 kmph'.")
            break
            default : console.log("Please check speed from '60, 120, 150 or 200'.")
    }
    
} 

spechCheckmachine(50)