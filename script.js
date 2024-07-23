// if you read this dont judge my code, idk JS

class Enemy {
    constructor(name, race, tier, damageType, damageBurn, precisionSpot, origin) {
        this.name = name;
        this.race = race;
        this.tier = tier;
        this.damageType = damageType;
        this.damageBurn = damageBurn;
        this.precisionSpot = precisionSpot;
        this.origin = origin
    }
}

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hive
const Thrall = new Enemy(["Thrall"], ["Hive"], [1], ["Melee"], ["Arc"], ["Head"], [1]);
const CursedThrall = new Enemy(["Cursed Thrall"], ["Hive"], [1], ["Short"], ["Arc"], ["Head"], [1]);
const Acolyte = new Enemy(["Acolyte"], ["Hive"], [2], ["Medium", "Long"], ["Solar", "Void"], ["Head"], [1]);
const Knight = new Enemy(["Knight"], ["Hive"], [3], ["Melee", "Long"], ["Arc", "Solar", "Kinetic"], ["Head"], [1]);
const Wizard = new Enemy(["Wizard"], ["Hive"], [3], ["Long"], ["Arc"], ["Head"], [1]);
const Shrieker = new Enemy(["Shrieker"], ["Hive"], [4], ["Long"], ["Void"], ["Head"], [1]);
const Ogre = new Enemy(["Ogre"], ["Hive"], [4], ["Melee", "Long"], ["Void", "Kinetic"], ["Head"], [1]);

// Cabal
const WarBeast = new Enemy(["War Beast"], ["Cabal"], [1], ["Melee"], ["Kinetic"], ["Head"], [2]);
const Psion = new Enemy(["Psion"], ["Cabal"], [1], [ "Medium", "Long"], ["Solar", "Void"], ["Head", "Back"], [1]);
const Scorpius = new Enemy(["Scorpius"], ["Cabal"], [1], ["Medium"], ["Solar"], ["Head"], [2]);
const Incendior = new Enemy(["Incendior"], ["Cabal"], [2], ["Medium"], ["Solar"], ["Head", "Back"], [2]);
const Legionary = new Enemy(["Legionary"], ["Cabal"], [2], ["Medium"], ["Arc", "Solar"], ["Head", "Back"], [1]);
const Phalanx = new Enemy(["Phalanx"], ["Cabal"], [2], ["Melee", "Medium"], ["Solar", "Kinetic"], ["Head", "Back"], [1]);
const Centurion = new Enemy(["Centurion"], ["Cabal"], [3], ["Long"], ["Solar", "Void"], ["Head", "Back"], [1]);
const Gladiator = new Enemy(["Gladiator"], ["Cabal"], [3], ["Melee"], ["Solar"], ["Head", "Back"], [2]);
const Colossus = new Enemy(["Colossus"], ["Cabal"], [4], ["Long"], ["Arc", "Solar"], ["Head", "Back"], [1]);

// Fallen

const ExploderShank = new Enemy(["Exploder Shank"], ["Fallen"], [1], ["Short"], ["Solar"], ["Head"], [1]);
const Dreg = new Enemy(["Dreg"], ["Fallen"], [1], ["Melee", "Short"], ["Arc"], ["Head"], [1]);
const Shank = new Enemy(["Shank"], ["Fallen"], [1], ["Short"], ["Arc"], ["None"], [1]);
const TracerShank = new Enemy(["Tracer Shank"], ["Fallen"], [1], ["Long"], ["Arc"], ["None"], [1]);
const Marauder = new Enemy(["Marauder"], ["Fallen"], [2], ["Melee", "Medium"], ["Arc", "Solar"], ["Head"], [1]);
const Vandal = new Enemy(["Vandal"], ["Fallen"], [2], ["Medium", "Long"], ["Arc"], ["Head"], [1]);
const Captain = new Enemy(["Captain"], ["Fallen"], [3], ["Melee", "Medium"], ["Arc", "Solar"], ["Head"], [1]);
const Brig = new Enemy(["Brig"], ["Fallen"], [4], ["Short", "Medium", "Long"], ["Arc", "Solar", "Void"], ["Chest"], [2]);
const HeavyShank = new Enemy(["Heavy Shank"], ["Fallen"], [4], ["Medium"], ["Void"], ["Head"], [1]);
const Servitor = new Enemy(["Servitor"], ["Fallen"], [4], ["Medium", "Long"], ["Void"], ["Head"], [1]);

// Scorn

const Screeb = new Enemy(["Screeb"], ["Scorn"], [1], ["Short"], ["Arc"], ["Back"], [2])
const Stalker = new Enemy(["Stalker"], ["Scron"], [1], ["Medium"], ["Void"], ["Head"], [2])
const Ravager = new Enemy(["Ravager"], ["Scorn"], [1], ["Melee", "Short"], ["Solar", "Stasis"], ["Torch"], [2])
const Lurker = new Enemy(["Lurker"], ["Scorn"], [2], ["Short"], ["Solar"], ["Head"], [2])
const Raider = new Enemy(["Raider"], ["Scorn"], [2], ["Medium", "Long"], ["Void"], ["Head"], [2])
const Chieftain = new Enemy(["Chieftain"], ["Scorn"], [3], ["Medium"], ["Solar", "Void"], ["Head"], [2])
const Wraith = new Enemy(["Wraith"], ["Scorn"], [3], ["Melee"], ["Solar"], ["Head"], [2])
const Abomination = new Enemy(["Abomination"], ["Scorn"], [4], ["Melee", "Long"], ["Arc"], ["Head"], [2])

// Vex

const Fanatic = new Enemy(["Fanatic"], ["Vex"], [1], ["Short"], ["Solar", "Arc"], ["Chest"], [1])
const Harpy = new Enemy(["Harpy"], ["Vex"], [2], ["Medium"], ["Solar", "Void"], ["Head"], [1])
const Hobgoblin = new Enemy(["Hobgoblin"], ["Vex"], [2], ["Long"], ["Solar", "Void"], ["Chest"], [1])
const Goblin = new Enemy(["Goblin"], ["Vex"], [2], ["Long"], ["Solar"], ["Chest"], [1])
const Minotaur = new Enemy(["Minotaur"], ["Vex"], [3], ["Medium", "Long"], ["Void"], ["Chest"], [1])
const Cyclops = new Enemy(["Cyclops"], ["Vex"], [4], ["Long"], ["Void"], ["Head"], [1])
const Hydra = new Enemy(["Hydra"], ["Vex"], [4], ["Medium"], ["Void"], ["Head"], [1])
const Wyvern = new Enemy(["Wyvern"], ["Vex"], [4], ["Melee", "Medium"], ["Arc", "Void"], ["Head", "Back"], [2])

// Taken

const TakenThrall = new Enemy(["Taken Thrall"], ["Taken", "Hive"], [1], ["Melee"], ["Solar"], ["Head"], [1])
const TakenAcolyte = new Enemy(["Taken Acolyte"], ["Taken", 'Hive'], [2], ["Medium"], ["Arc"], ["Head"], [1])
const TakenGoblin = new Enemy(["Taken Goblin"], ["Taken", "Vex"], [2], ["Long"], ["Void"], ["Head"], [1])
const TakenHobgoblin = new Enemy(["Taken Hobgoblin"], ["Taken", "Vex"], [2], ["Long"], ["Void"], ["Head"], [1])
const TakenPhalanx = new Enemy(["Taken Phalanx"], ["Taken", "Cabal"], [2], ["Medium"], ["Arc"], ["Head"], [1])
const TakenVandal = new Enemy(["Taken Vandal"], ["Taken", "Fallen"], [2], ["Long"], ["Solar"], ["Head"], [1])
const TakenCaptain = new Enemy(["Taken Captain"], ["Taken", "Fallen"], [3], ["Melee", "Medium"], ["Arc"], ["Head"], [1])
const TakenCenturion = new Enemy(["Taken Centurion"], ["Taken", "Cabal"], [3], ["Long"], ["Void"], ["Head"], [1])
const TakenKnight = new Enemy(["Taken Knight"], ["Taken", "Hive"], [3], ["Long"], ["Void"], ["Head"], [1])
const TakenMinotaur = new Enemy(["Taken Minotaur"], ["Taken", "Vex"], [3], ["Long"], ["Solar"], ["Head"], [1])
const TakenWizard = new Enemy(["Taken Wizard"], ["Taken", "Hive"], [3], ["Short"], ["Solar"], ["Head"], [1])
const TakenOgre = new Enemy(["Taken Ogre"], ["Taken", "Hive"], [4], ["Melee", "Long"], ["Arc", "Kinetic"] ["Head"], [1])

// Dread

const Grim = new Enemy(["Grim"], ["Dread"], [1], ["Medium"], ["Solar"], ["Head"], [2])
const Husk = new Enemy(["Husk"], ["Dread"], [1], ["Melee"], ["Solar"], ["Head", "Chest"], [2])
const Attendant = new Enemy(["Attendant"], ["Dread"], [2], ["Long"], ["Solar", "Stasis"], ["Head"], [2])
const Weaver = new Enemy(["Weaver"], ["Dread"], [2], ["Long"], ["Solar", "Strand"], ["Head"], [2])
const Omen = new Enemy(["Omen"], ["Dread"], [3], ["Medium"], ["Stasis"], ["Head"], [2])
const Harbinger = new Enemy(["Harbinger"], ["Dread"], [3], ["Medium"], ["Strand"], ["Head"], [2])
const Tormenter = new Enemy(["Tormentor"], ["Dread"], [4], ["Melee", "Short", "Medium"], ["Void"], ["Shoulder", "Chest"], [2])


const enemies = [
    Thrall, Acolyte, CursedThrall, Knight, Wizard, Shrieker, Ogre,
    WarBeast, Psion, Scorpius, Incendior, Legionary, Phalanx, Centurion, Gladiator, Colossus,
    ExploderShank, Dreg, Shank, TracerShank, Marauder, Vandal, Captain, Brig, HeavyShank, Servitor,
    Screeb, Stalker, Ravager, Lurker, Raider, Chieftain, Wraith, Abomination,
    Fanatic, Harpy, Hobgoblin, Goblin, Minotaur, Cyclops, Hydra, Wyvern,
    TakenThrall, TakenAcolyte, TakenGoblin, TakenHobgoblin, TakenPhalanx, TakenVandal, TakenCaptain, TakenCenturion, TakenKnight, TakenMinotaur, TakenWizard, TakenOgre,
    Grim, Husk, Attendant, Weaver, Omen, Harbinger, Tormenter

];
let validGuesses = [];
let currentGuesses = "";
let currentGuessArray = []
let currentWin = false;
let currentGame = document.getElementById("currentGame");

for (let i = 0; i < enemies.length; i++) {
    validGuesses.push(enemies[i].name[0].toLowerCase())
}

// could add check for champion variant if its too difficult
const order = ["name", "race", "damageType", "damageBurn", "precisionSpot", "tier", "origin"];


let answer = enemies[randInt(0, order.length-1)];
let guess = "invalid"
let wins = 0
let guesses = 0
let currentStreak = 0
let bestStreak = 0


if (localStorage.getItem("wins")){
    wins = parseInt(localStorage.getItem("wins"))
} else {
    localStorage.setItem("wins", "0")
}


if (localStorage.getItem("guesses")){
    guesses = parseInt(localStorage.getItem("guesses"))
} else {
    localStorage.setItem("guesses", "0")
}

if (localStorage.getItem("currentStreak")){
    currentStreak = parseInt(localStorage.getItem("currentStreak"))
} else {
    localStorage.setItem("currentStreak", "0")
}

if (localStorage.getItem("bestStreak")){
    bestStreak = parseInt(localStorage.getItem("bestStreak"))
} else {
    localStorage.setItem("bestStreak", "0")
}

if (localStorage.getItem("currentGuesses")){
    currentGuesses = localStorage.getItem("currentGuesses")
    currentGuessArray = currentGuesses.split(';')
} else {
    localStorage.setItem("currentGuesses", "")
}

if (localStorage.getItem("currentWin")){
    currentWin = localStorage.getItem("currentWin").toLowerCase() == 'true'   
} else {
    localStorage.setItem("currentWin", "false")
}



function updateStatsText() {
    let totalWinsText = document.getElementById("totalWins")
    let averageGuessesText = document.getElementById("averageGuesses")
    let streakText = document.getElementById("streak")
    let bestStreakText = document.getElementById("bestStreak")

    totalWinsText.innerHTML = wins
    averageGuessesText.innerHTML = Math.round((guesses/wins)*10)/10
    streakText.innerHTML = currentStreak
    bestStreakText.innerHTML = bestStreak
}


function compareToAnswer(mob) {
    let similar = [];
    let result = [0, 0, 0, 0, 0, 0]; // 0 = red, 1 = orange, 2 = green

    for (let v = 0; v < order.length; v++) {
        for (let i of mob[order[v]]) {
            for (let ii of answer[order[v]]) {
                if (i === ii) {
                    similar.push(i);
                }
            }
        }

        if(order[v]==="tier"){
            if (similar.length === answer[order[v]].length) {
                result[v] = 2;
            } else if(mob[order[v]] - answer[order[v]] < 0) {
                result[v] = 1; // if mob.tier - answer.tier is negative, it means you have to go up
            } else {
                result[v] = 0;
            }
        } else {
            if (similar.length === answer[order[v]].length && similar.length === mob[order[v]].length) {
                result[v] = 2;
            } else if (similar.length > 0) {
                result[v] = 1;
            } else {
                result[v] = 0;
            }
        }



        similar = [];
    }
    for(let i=0; i<result.length; i++){
        if (result[i] != 2) {
            return result
        }
    }
    if(currentWin === false){
        currentWin = true
        wins += 1
        currentStreak += 1
        localStorage.setItem("wins", wins.toString())
        localStorage.setItem("currentStreak", currentStreak.toString())
        localStorage.setItem("currentWin", "true")
        if(bestStreak < currentStreak) {
            bestStreak = currentStreak
            localStorage.setItem("bestStreak", bestStreak.toString())
        }
    }
   
    openStats()
    return result;
}

function enemyClassFromName(enemyName) {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].name[0].toLowerCase() === enemyName.toLowerCase()){
            return enemies[i]
        }
    }
    return "Not Found"
}

var enemiesList = document.getElementById('enemyList');
var enemyGuess = document.getElementById('enemyguess');
var guessTable = document.getElementById('guessTable');
var enemyGuessSubmit = document.getElementById('enemyguesssubmit');

function createNewTable(enemyName){
    let classGuess = enemyClassFromName(enemyName)
            
    let comparison = compareToAnswer(classGuess)
    
    let newRow = guessTable.insertRow()
    let dataString = ""
    for(var i = 0; i < order.length; i++){
        let newData = newRow.insertCell()
        for(var v = 0; v < classGuess[order[i]].length; v++){
            if(v === 0){
                dataString += classGuess[order[i]][v]
            } else {
                dataString += ", " + classGuess[order[i]][v]
            }
        }

        if (order[i]==="tier" || order[i]==="origin") {
            if(comparison[i] === 2){
                newData.setAttribute('id','green')
                currentGame.innerHTML += "🟩"
            } else if(comparison[i] === 1){
                newData.setAttribute('id', 'up')
                newData.style.backgroundImage = 'url(images/arrow-up.svg'
                newData.style.backgroundSize = 'contain'
                newData.style.backgroundRepeat = 'no-repeat'
                newData.style.backgroundPosition = 'center'
                currentGame.innerHTML += "⬆️"
            } else {
                newData.setAttribute('id', 'down')
                newData.style.backgroundImage = 'url(images/arrow-down.svg'
                newData.style.backgroundSize = 'contain'
                newData.style.backgroundRepeat = 'no-repeat'
                newData.style.backgroundPosition = 'center'
                currentGame.innerHTML += "⬇️"
            }
        } else if (order[i]==="name") {

            if(order[i]==="name"){
                newData.style.background = 'white'
                imgstr = classGuess.name[0].replace(/\s+/g, '');
                newData.style.backgroundImage = 'url(images/enemies/' + imgstr +'.jpg'
                newData.style.backgroundSize = 'auto 90%'
                newData.style.backgroundRepeat = 'no-repeat'
                newData.style.backgroundPosition = 'center'
                dataString = ""
            }


        } else {
            if(comparison[i] === 2){
                newData.setAttribute('id','green')
                currentGame.innerHTML += "🟩"
            } else if(comparison[i] === 1){
                newData.setAttribute('id', 'orange')
                currentGame.innerHTML += "🟧"
            } else {
                newData.setAttribute('id', 'red')
                currentGame.innerHTML += "🟥"
            }
        }



        newData.innerText = dataString
        newData.classList.add("fade-in");
        setTimeout(function(){newData.classList.remove("fade-in");}, 200);
        dataString = ""
    }
    currentGame.appendChild(document.createElement("br"))
}

if (currentGuessArray.length > 1){
    for(let i = 0; i < currentGuessArray.length - 1; i++){
        createNewTable(currentGuessArray[i])
    }
}


for(var i = 0; i < enemies.length; i++) {
    var option = document.createElement('option');
    option.value = enemies[i].name[0];
    enemiesList.appendChild(option);
};

enemyGuessSubmit.onclick = function(){
    if (validGuesses.includes(enemyGuess.value.toLowerCase()) && currentWin != true) {
        currentGuesses += enemyGuess.value + ";"
        localStorage.setItem("currentGuesses", currentGuesses)
        guesses += 1
        localStorage.setItem("guesses", guesses.toString())
        createNewTable(enemyGuess.value)
    }
}

enemyGuess.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && currentWin != true) {
        if (validGuesses.includes(enemyGuess.value.toLowerCase())) {
            currentGuesses += enemyGuess.value + ";"
            localStorage.setItem("currentGuesses", currentGuesses)
            guesses += 1
            localStorage.setItem("guesses", guesses.toString())
            createNewTable(enemyGuess.value)
        }
    }

});




function openNav() {
    document.getElementById("helpOverlay").style.display = "block";
    document.getElementById("helpOverlay").classList.add("fade-in")
    setTimeout(function(){document.getElementById("helpOverlay").classList.remove("fade-in");}, 200);
}
  
function closeNav() {
    document.getElementById("helpOverlay").classList.add("fade-out")
    setTimeout(function(){document.getElementById("helpOverlay").classList.remove("fade-out"); document.getElementById("helpOverlay").style.display = "none";}, 200);
}


function openStats() {
    updateStatsText()
    document.getElementById("statsOverlay").style.display = "block";
    document.getElementById("statsOverlay").classList.add("fade-in")
    setTimeout(function(){document.getElementById("statsOverlay").classList.remove("fade-in");}, 200);
}
  
function closeStats() {
    document.getElementById("statsOverlay").classList.add("fade-out")
    setTimeout(function(){document.getElementById("statsOverlay").classList.remove("fade-out"); document.getElementById("statsOverlay").style.display = "none";}, 200);
}

function openReset() {
    updateStatsText()
    document.getElementById("resetOverlay").style.display = "block";
    document.getElementById("resetOverlay").classList.add("fade-in")
    setTimeout(function(){document.getElementById("resetOverlay").classList.remove("fade-in");}, 200);
}
  
function closeReset() {
    document.getElementById("resetOverlay").classList.add("fade-out")
    setTimeout(function(){document.getElementById("resetOverlay").classList.remove("fade-out"); document.getElementById("resetOverlay").style.display = "none";}, 200);
}