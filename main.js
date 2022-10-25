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

color = (c) => c
full = (a, b) => a +" "+ b;

document.getElementById("Harry").style.color = color(Harry.hairColor)
document.getElementById("Harry").innerHTML = full(Harry.firstName, Harry.lastName)

document.getElementById("Hermoine").style.color = color(Hermoine.hairColor)
document.getElementById("Hermoine").innerHTML = full(Hermoine.firstName, Hermoine.lastName)

document.getElementById("Ron").style.color = color(Ron.hairColor)
document.getElementById("Ron").innerHTML = full(Ron.firstName, Ron.lastName)

let vsTgl = 1
document.getElementById("btn")

btn.addEventListener("click", () =>{
    
    if(vsTgl == 2){
        document.getElementById("Harry").style.color = color(Harry.hairColor)
        document.getElementById("Harry").innerHTML = full(Harry.firstName, Harry.lastName)
        document.getElementById("Hermoine").style.color = color(Hermoine.hairColor)
        document.getElementById("Hermoine").innerHTML = full(Hermoine.firstName, Hermoine.lastName)
        document.getElementById("Ron").style.color = color(Ron.hairColor)
        document.getElementById("Ron").innerHTML = full(Ron.firstName, Ron.lastName)
        vsTgl = 1
    } else if (vsTgl == 1){
        document.getElementById("Harry").style.color = color("Black")
        document.getElementById("Harry").innerHTML = Harry.firstName
        document.getElementById("Hermoine").style.color = color("Black")
        document.getElementById("Hermoine").innerHTML = Hermoine.firstName
        document.getElementById("Ron").style.color = color("Black")
        document.getElementById("Ron").innerHTML = Ron.firstName
        vsTgl = 2
    }
})