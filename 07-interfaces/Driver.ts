import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach(); 

//declare an array for coach (init empty)

let theCoachs: Coach [] = []; 

//add coaches to array 
theCoachs.push(myCricketCoach);
theCoachs.push(myGolfCoach);

for (let tempCoach of theCoachs){
    console.log(tempCoach.getDailyWorkout());
}