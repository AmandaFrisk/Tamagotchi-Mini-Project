//Intro
alert("Welcome to Pokemon Daycare. We're so happy to have you volunteering with us today! Click OK to continue.")
const playerName = prompt("What's your name?"); 
const Professor = "Professor Amanda"
//console.log(playerName);
alert(`It is great to meet you ${playerName}! I am ${Professor}. Before you're entrusted with a starter Pokemon of your own, you must show that you can care for someone else's. Perfect timing! Trainer Red just dropped off his Charmander! You will be assigned to care for this Charmander while he's away.Charmander is playful and rambunctious. If they do not get enough attention they will FAINT from boredom. Remember that Charmander must eat and sleep as well or they will FAINT.`)

const pokemonName = prompt(" Oh dear, Red didn't leave the name of this Charmander. What would you like to call it as a nick-name?")

alert(`Please take good care of ${pokemonName } , you might even get to witness their evolution! Press the START button to begin. `)

//TIME INTERVALS
//Need On click- add Start Btn
//setTimeInterval()- 3-5 sec intervals- ( doesn't go below 0)----hunger, sleepiness and boredom


//setTimeOut() -pass a function - Increase Pet Age x minutes ----- results in evolution aka image morphs to new image
///////////////////
//DOM SELECTIONS

let hungerScore= document.querySelector('.hungerScore')
let sleepinessScore = document.querySelector('.sleepinessScore')
let boredomScore = document.querySelector('.boredomScore')
let ageTracking = document.querySelector('#Age')
let grabButtons = document.querySelector('#buttons')
let grabFoodImage = document.querySelector('#Food-Image')
let grabBackgroundImage = document.body.style.backgroundImage
class Pokemon {
    constructor( name, hunger, sleepiness, boredom, age){ 
        this.name = name                
        this.hunger = hunger  
        this.sleepiness = sleepiness  
        this.boredom = boredom
        this.age = age
     }
     ////??? Needs to stop fainting
     Start(){
     let startVar = setInterval(() => {
            
           if(this.hunger >= 1 && this.sleepiness >= 1 && this.boredom >= 1 ){
            this.hunger --
            hungerScore.innerHTML = this.hunger
            console.log(hungerScore)
            this.sleepiness --
            sleepinessScore.innerText = this.sleepiness
            console.log(sleepinessScore)
            this.boredom --
            boredomScore.innerText = this.sleepiness
            console.log(boredomScore)
            }
            else if(this.hunger <= 0 || this.sleepiness <= 0 || this.boredom <= 0 ){
                alert("Oh dear, the Pokemon has fainted!")
                clearInterval(startVar)
               document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
               document.querySelector('picSwap').src='../images/Game-Over.gif'
               
               grabButtons.remove()//????? NEEDS  TO STOP setTimeOut? // Visual for fainting?
            } else {
                console.log("conditionals not working")
            }
            
        }, 3000)
       
    }
           // setTimeout()
        
         feedPokemon(){
            console.log("fed pokemon")
             this.hunger++ 
            hungerScore.innerHTML = this.hunger 
         //console.log(hungerScore)
           function addFoodPic(){
            console.log("inside addFoodPic")
            let berryDiv = document.createElement('div')
            berryDiv.setAttribute('id', 'berryDiv')
             grabFoodImage.appendChild(berryDiv)
            let berryImageTag =document.createElement('img')
            berryImageTag.setAttribute('id',"berryImage") 
            berryDiv.appendChild(berryImageTag)
            berryImageTag.src= '../images/Purple-Berry.png'
            //some kind of visual or sound needs to happen when fed 
            
            }
            setTimeout(addFoodPic, 1000) //????Isn't working
          }
                                                                               
        
        sleepyPokemon(){
            console.log("pokemon slept")
            this.sleepiness++
            sleepinessScore.innerText = this.sleepiness
            console.log(sleepinessScore)
           
        }
        
        Played(){
            console.log("played with pokemon")
            this.boredom++
            console.log(this.boredom)
            boredomScore.innerText= this.boredom
            console.log(boredomScore)
            // some kind of visual or sound needs to happen when played
        }

        lightsOff(){
            console.log("lightsOff")
         
        document.body.style.backgroundImage="url('../images/DarkForest.jpeg')"
        // ZZZ image change too?
        function lightsOn(){
         document.body.style.backgroundImage="url('../images/LightForest.jpeg')" 
      }
      setTimeout(lightsOn, 1000)
        
    }
    
       ageUp(){
            console.log("aged")

            let ageTimer = setInterval( ()=>{
                console.log("inside age interval")
                this.age++
                //ageTracking.innerHTML = this.age
                if (this.age === 3){
                    console.log("Charmander")
            document.querySelector('#picSwap').src="../images/Char1.png"
                }
                if (this.age === 5){
                    console.log("Charmeleon")
            document.querySelector('#picSwap').src='../images/Charmeleon1.png'
                }
                if (this.age === 7){
                    console.log("Charzard")
                   document.querySelector('#picSwap').src='../images/Charzard1.png'
             //Age =3 change to Charzard Pic
             clearInterval(ageTimer) 
                }
             if(this.hunger <= 0 || this.sleepiness <= 0 || this.boredom <= 0 ){
             clearInterval(ageTimer) 
             }
               
             } , 3000) } 
}

//new instance
let selectedPokemon = new Pokemon(`${pokemonName}`, 10, 12, 13, 0)
console.log(selectedPokemon);



//EVENT LISTENERS
document.getElementById('start').addEventListener('click',(e)=>{ selectedPokemon.ageUp(),selectedPokemon.Start()}) 
document.getElementById('feed').addEventListener('click', (e)=>{selectedPokemon.feedPokemon()}) // when #feed btn clicks feedPokemon () - hunger goes down
document.getElementById('lights').addEventListener('click',(e)=>{ selectedPokemon.sleepyPokemon()}) // when #lights btn clicks sleepyPokemon()-sleepiness goes down
document.getElementById('play').addEventListener('click', (e)=>{selectedPokemon.Played()}) //when #play btn clicks bordom goes down
document.getElementById('lights').addEventListener('click',(e)=>{ selectedPokemon.lightsOff()}) //when #lights btn clicked lightsOff()- darkened image change

//Brain Dump
// Start in an egg?
// Need to tell player that if levels get to 10 they faint
// Pet should die if Hunger, Boredom, or Sleepiness hits 10.




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
