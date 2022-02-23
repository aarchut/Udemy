let sportsOne: string[] = ["golf", "cricket", "tennis", "swimming"];


//Let's use the simplified for loop

for(let tempSport of sportsOne){

    if(tempSport== "cricket"){
        console.log(tempSport + " << My Favorite!");
    }
    else{
        console.log(tempSport);
    }
    
}