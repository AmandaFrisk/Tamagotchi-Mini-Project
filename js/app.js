//INTRO
alert("Welcome to Pokemon Daycare. We're so happy to have you volunteering with us today! Click OK to continue.")
const playerName = prompt("What's your name?"); 
const Professor = "Professor Amanda"
//console.log(playerName);
alert(`It is great to meet you ${playerName}! I am ${Professor}. Before you're entrusted with a starter Pokemon of your own, you must show that you can care for someone else's. Perfect timing! Trainer Red just dropped off an egg that is about to hatch!  You will be assigned to care for the pokemon that hatches while he's away. Pokemon are playful and rambunctious. If they do not get enough attention they will FAINT from boredom. Remember that the Pokemon must eat and sleep as well or they will FAINT.`)

const pokemonName = prompt(" Oh dear, Red didn't leave a name for this Pokemon. What would you like to call it as a nick-name?")

alert(`Please take good care of ${pokemonName } , you might even get to witness their evolution! Press OK and then press the red START button to begin. `)
//DOM 
let hungerScore= document.querySelector('.hungerScore')
let sleepinessScore = document.querySelector('.sleepinessScore')
let boredomScore = document.querySelector('.boredomScore')
let ageTracking = document.querySelector('#Age')
let grabButtons = document.querySelector('#buttons')
let grabFoodImage = document.querySelector('#Food-Image')
let grabBackgroundImage = document.body.style.backgroundImage
//CLASS STARTS
class Pokemon {
    constructor( name, hunger, sleepiness, boredom, age){ 
        this.name = name                
        this.hunger = hunger  
        this.sleepiness = sleepiness  
        this.boredom = boredom
        this.age = age
     }
    
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
                clearInterval(startVar)
               document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
               document.querySelector('#picSwap').src='../images/Game-Over.gif'
               document.querySelector('#start-button').remove()
               document.querySelector('#buttons').remove()
               alert("Oh my, the Pokemon has fainted!")
            } else {
                console.log("conditionals not working")
            }
            
        }, 2100)
       
    }
           
        
         feedPokemon(){
            console.log("fed pokemon")
             this.hunger++ 
            hungerScore.innerHTML = this.hunger 
         //console.log(hungerScore)
           
            console.log("inside addFoodPic")
            let berryDiv = document.createElement('div')
            berryDiv.setAttribute('id', 'berryDiv')
             grabFoodImage.appendChild(berryDiv)
            let berryImageTag =document.createElement('img')
            berryImageTag.setAttribute('id',"berryImage") 
            berryDiv.appendChild(berryImageTag)
            berryImageTag.src= '../images/Purple-Berry.png'
            
            setTimeout((()=> {berryImageTag.remove()}), 1500) 
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
            
            let ballDiv = document.createElement('div')
            ballDiv.setAttribute('id', 'ballDiv')
             grabFoodImage.appendChild(ballDiv)
            let ballImageTag =document.createElement('img')
            ballImageTag.setAttribute('id',"ballImage") 
            ballDiv.appendChild(ballImageTag)
            ballImageTag.src= '../images/pokeball-image.png'
            
            setTimeout((()=> {ballImageTag.remove()}), 1500) 
          }
        

        lightsOff(){
            console.log("lightsOff")
         
        document.body.style.backgroundImage="url('../images/DarkForest.jpeg')"
        // ZZZ image add?
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
                
                if (this.age === 1){
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
             
             clearInterval(ageTimer) 
                }
             if(this.hunger <= 0 || this.sleepiness <= 0 || this.boredom <= 0 ){
             clearInterval(ageTimer) 
             }
               
             } , 3000) }
    }

//new instance
let selectedPokemon = new Pokemon(`${pokemonName}`, 5, 7, 9, 0)
console.log(selectedPokemon);



//EVENT LISTENERS
document.getElementById('start').addEventListener('click',(e)=>{ selectedPokemon.ageUp(),selectedPokemon.Start()}) 
document.getElementById('feed').addEventListener('click', (e)=>{selectedPokemon.feedPokemon()}) 
document.getElementById('lights').addEventListener('click',(e)=>{ selectedPokemon.sleepyPokemon()}) 
document.getElementById('play').addEventListener('click', (e)=>{selectedPokemon.Played()}) 
document.getElementById('lights').addEventListener('click',(e)=>{ selectedPokemon.lightsOff()}) 


//Rename 


