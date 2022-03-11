//globals
let nextPage = document.getElementById('nextPage')
let previousPage = document.getElementById('previousPage')
let easterEgg = document.getElementById('peeking-yoda')



// local storage 

let planet = window.localStorage.getItem('planetinfo')
planet = JSON.parse(planet)

console.log(planet);


// fetching planet info 

let planetName = document.getElementById('name')
planetName.innerText = planet.name;

let desc = document.getElementById('desc')
desc.innerHTML = 'Beskrivning:' + ' ' + planet.desc;

let latinName = document.getElementById('latin-name')
latinName.innerText = planet.latinName;

let temp = document.getElementById('tempday')
temp.innerText = 'Dag Temp \r\n ' + ' ' + planet.temp.day + '°';

let nightTemp = document.getElementById('tempnight')
nightTemp.innerText = 'Natt Temp \r\n ' + ' ' + planet.temp.night + '°';

let distance = document.getElementById('distance')
distance.innerText = 'Distans från Solen\r\n ' + planet.distance;

let circumference = document.getElementById('circumference')
circumference.innerText = 'Omkrets\r\n ' + planet.circumference;

let moon = document.getElementById('moon')
moon.innerText = 'MÅNAR:\r\n' + ' ' + planet.moons.slice(0, 15)



let home = document.getElementById('home')
home.addEventListener('click', function () {
    location.href = 'solarsystem.html';

})




// addventlistener for Saturnus moon ///


nextPage.addEventListener('click', function () {
    moon.innerText = 'MOONS:\r\n' + ' ' + planet.moons.slice(15, 31)


})
previousPage.addEventListener('click', function () {
    moon.innerText = 'MOONS:\r\n' + ' ' + planet.moons.slice(0, 15)
})



if (planet.name == 'Saturnus') {
    nextPage.style.display = 'block'
    previousPage.style.display = 'block'

} else {
    nextPage.style.display = 'none'
    previousPage.style.display = 'none'
}

// eater egg (click to get the easter egg.)

easterEgg.addEventListener('click', function () {
    location.href = 'https://www.youtube.com/watch?v=XwiO1uDVSPA';
})