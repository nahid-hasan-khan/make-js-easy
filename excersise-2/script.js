/*
create a business name generator by combining list of adjective and shop name and another word

adjectives:
crazy
amazing
fire

shop name:
Engine
foods
germents

another word:
bros
limited
hub
*/


let rand = Math.random()
let first, second, third;


// first
if(rand<0.33){
    first= "crazy"
}
else if(rand < 0.66 && rand >= 0.33){
    first = "Amazing"
}
else{
    first = "fire"
}

// second
let rand1 = Math.random()
if(rand1<0.33){
    second= "Engine"
}
else if(rand1 < 0.66 && rand >= 0.33){
    second = "Foods"
}
else{
    second = "Garments"
}

// third
let rand2 = Math.random()
if(rand2<0.33){
    third= "Bros"
}
else if(rand2 < 0.66 && rand >= 0.33){
    third = "Limited"
}
else{
    third = "Hub"
}


console.log(`${first} ${second} ${third}`)