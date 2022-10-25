const Harry = {
    firstName: "Harry",
    lastName: "Potter",
    hairColor: "Black",
}
const Hermoine = {
    firstName: "Hermoine",
    lastName: "Granger",
    hairColor: "Brown",
}
const Ron = {
    firstName: "Ron",
    lastName: "Weasly",
    hairColor: "Red",
}

const HarryHTML = document.getElementById("Harry")
const HermoineHTML = document.getElementById("Hermoine")
const RonHTML = document.getElementById("Ron")

color = (a, b, c) => {
    HarryHTML.style.color = a
    HermoineHTML.style.color = b
    RonHTML.style.color = c
}
full = () => {
    HarryHTML.innerHTML = Harry.firstName +" "+ Harry.lastName,
    HermoineHTML.innerHTML = Hermoine.firstName +" "+ Hermoine.lastName,
    RonHTML.innerHTML = Ron.firstName +" "+ Ron.lastName}
first = () => {
    HarryHTML.innerHTML = Harry.firstName
    HermoineHTML.innerHTML = Hermoine.firstName
    RonHTML.innerHTML = Ron.firstName
}

    full()
        
    color(Harry.hairColor, Hermoine.hairColor, Ron.hairColor)

let vsTgl = 1
document.getElementById("btn")

btn.addEventListener("click", () =>{
    
    if(vsTgl == 2){
        full()
        
        color(Harry.hairColor, Hermoine.hairColor, Ron.hairColor)

        vsTgl = 1
    } else if (vsTgl == 1){
        first()
        
        color("Black", "Black", "Black")
        vsTgl = 2
    }
})