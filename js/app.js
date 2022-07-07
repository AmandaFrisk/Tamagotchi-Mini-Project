//Intro
alert("Welcome to Pokemon Daycare. We're so happy to have you volunteering with us today! Click OK to continue.")
const playerName = prompt("What's your name?"); 
const Professor = "Professor Amanda"
//console.log(playerName);
alert(`It is great to meet you ${playerName}! I am ${Professor}. Before you're entrusted with a starter Pokemon of your own, you must show that you can care for someone else's. Perfect timing! Trainer Red just dropped off his Charmander! You will be assigned to care for this Charmander while he's away.Charmander is playful and rambunctious. If they do not get enough attention they will FAINT from boredom. Remember that Charmander must eat and sleep as well or they will FAINT.`)

const pokemonName = prompt(" Oh dear, Red didn't leave the name of this Charmander. What would you like to call it as a nick-name?")

alert(`Please take good care of ${pokemonName } , you might even get to witness their evolution! `)

//TIME INTERVALS
//setTimeInterval()- 3-5 sec intervals- ( doesn't go below 0)----hunger, sleepiness and boredom
//setTimeOut() -pass a function - Increase Pet Age x minutes ----- results in evolution aka image morphs to new image
///////////////////
//DOM SELECTIONS
//let hungerScore= document.querySelector('.hungerScore').////innerHTML(${hunger})
//Class
class Pokemon {
    constructor( name, hunger, sleepiness, boredom, Age){ 
        this.name = name                
        this.hunger = hunger  
        this.sleepiness = sleepiness  
        this.boredom = boredom
     }
         feedPokemon(){
            console.log("fed pokemon")
             this.hunger++ 
            hungerScore = this.hunger
            console.log(hungerScore)
             }
                                                                                                                                                                                                                
        
        sleepyPokemon(){
            console.log("pokemon slept")
        }
        Played(){
            console.log("played with pokemon")
        }
}
let selectedPokemon = new Pokemon(`${pokemonName}`, 3, 4, 5, 0)
console.log(selectedPokemon);

let hungerScore= document.querySelector('.hungerScore').innerHTML = 3
//add event listeners for #buttons div
document.getElementById('feed').addEventListener('click', selectedPokemon.feedPokemon) // when #feed btn clicks feedPokemon () - hunger goes down
document.getElementById('lights').addEventListener('click', selectedPokemon.sleepyPokemon) // when #lights btn clicks sleepyPokemon()-sleepiness goes down
document.getElementById('play').addEventListener('click', selectedPokemon.Played) //when #play btn clicks bordom goes down



//Brain Dump
// Start in an egg?
// Need to tell player that if levels get to 10 they faint
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing. & Your pet should die if Hunger, Boredom, or Sleepiness hits 10.

//How to get hunger, boredom, sleepiness to go on it's own and then keep track in points. 

    // Ideas: When pokemonName alert- have some kind of timer, after x time points increase.
        // Then if they hit the button the points go down. 
            // If points are =1 message tells them they do not need to click btn atm. 
            //If points = 10 Pokemon faints - if Pokemon faints something needs to happen visually
// Need to display points 
    //Ideas:

//Increase your pet's age every x minutes set 
    // If age = x - morph aka evolve - change image to evolution 
    //Ideas:  
    // Use :
    //setTimeout(function, milliseconds)    60000 milliseconds = 1 min
    //Executes a function, after waiting a specified number of milliseconds.
    // OR 
    //setInterval(function, milliseconds)
    //Same as setTimeout(), but repeats the execution of the function continuously.

// Animate your pet across the screen while it's alive.
//Ideas:

// How does player win - Tomigatchi doesn't have winning. Its more so about keeping it alive.
