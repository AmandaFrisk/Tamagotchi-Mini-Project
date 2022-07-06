alert("Welcome to your first Pokemon pre-challenge. Click OK to begin your training. ")
const playerName = prompt("What's your name?"); 
const Professor = "Professor Amanda"
//console.log(playerName);
alert(`It is great to meet you ${playerName}! I am ${Professor}. Before you're entrusted with a starter Pokemon of your own, you must Pokemon-sit an Eevee. Eevee is playful and rambunctious. If they do not get enough attention they will FAINT from boredom. But also remember that Eevee must eat and sleep as well or they will FAINT.`)

const pokemonName = prompt(" What would you like to call the Eevee as a nick-name?")

alert(`Please take good care of ${pokemonName } , you might even get to witness their evolution! `)
class Pokemon {
    constructor( name, hunger=1, sleepiness=1, boredom=1, Age=1){ //parameter names
        this.name = name
        this.hunger = hunger    
        this.sleepiness = sleepiness  
        this.boredom = boredom
     }
         feedPokemon(){
            console.log("fed pokemon")
            //when feed button is clicked the hunger 
        }
        sleepyPokemon(){
            console.log("pokemon slept")
        }
        Played(){
            console.log("played with pokemon")
        }
}
let selectedPokemon = new Pokemon(`${pokemonName}`)
console.log(selectedPokemon);


//add event listeners for #buttons div
document.getElementById('feed').addEventListener('click', selectedPokemon.feedPokemon) // when #feed btn clicks feedPokemon () - hunger goes down
document.getElementById('lights').addEventListener('click', selectedPokemon.sleepyPokemon) // when #lights btn clicks sleepyPokemon()-sleepiness goes down
document.getElementById('play').addEventListener('click', selectedPokemon.Played) //when #play btn clicks bordom goes down



//Brain Dump
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing. & Your pet should die if Hunger, Boredom, or Sleepiness hits 10.

//How to get hunger, boredom, sleepiness to go on it's own and then keep track in points. 

    // Ideas: When pokemonName alert- have some kind of timer, after x time points increase.
        // Then if they hit the button the the points go down. 
            // If points are =1 message tells them they do not need to click btn atm. 
            //If points = 10 Pokemon faints
// Need to display points 
    //Ideas:

//Increase your pet's age every x minutes
    // If age = x - morph aka evolve 
    //Ideas:  
// Animate your pet across the screen while it's alive.
//Ideas:


