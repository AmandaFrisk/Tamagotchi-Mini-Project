alert("Welcome to your first Pokemon pre-challenge. Click OK to begin your training. ")
const name = prompt("What's your name?"); 
const Professor = "Professor Amanda"
console.log(name);
alert(`It is great to meet you ${name}! I am ${Professor}. Before you're entrusted with a starter Pokemon of your own, you must Pokemon-sit an Eevee. Eevee is playful and rambunctious. If they do not get enough attention they will FAINT from boredom. But also remember that Eevee must eat and sleep as well or they will FAINT. Please take good care of them, you might even get to witness their evolution!  `)

class Pokemon {
    constructor( name, hunger=1, sleepiness=1, boredom=1, Age=1){ //parameter names
        this.name = name
        this.hunger = hunger    
        this.sleepiness = sleepiness  
        this.boredom = boredom
    }
           // methods
    }

let selectedPokemon = new Pokemon("Eevee")
