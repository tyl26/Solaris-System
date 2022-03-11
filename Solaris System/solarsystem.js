// *******globals********

const key = 'solaris-B2mWxADrthdHqd22'
let planetList = document.getElementById('planet-list')
let searchInput = document.getElementById('search')
let nextPage = document.getElementById('nextPage')
let previousPage = document.getElementById('previousPage')
let imgList = document.getElementById('planetImg')
let info = document.getElementById('info')
let overlay = document.getElementById('overlay')
let close = document.getElementById('close')
let home = document.getElementById('home')
let error = document.getElementById('error')

let mercury = document.getElementById('mercury')
let venus = document.getElementById('venus')
let earth = document.getElementById('earth')
let mars = document.getElementById('mars')
let jupiter = document.getElementById('jupiter')
let saturn = document.getElementById('saturn')
let uranus = document.getElementById('uranus')
let neptune = document.getElementById('neptune')


// *********** img addventlistener  for each planets ******


mercury.addEventListener('click', async function () {
    let planets = await getPlanets();
    imgPlanets([planets[1]])
    info.style.display = "block"
    overlay.style.display = 'block'
    document.querySelector('header').style.display = 'none'

})

venus.addEventListener('click', async function () {
    let planets = await getPlanets();
    imgPlanets([planets[2]])
    info.style.display = 'block'
    overlay.style.display = 'block'
    document.querySelector('header').style.display = 'none'

})

earth.addEventListener('click', async function () {
    let planets = await getPlanets();
    imgPlanets([planets[3]])
    info.style.display = 'block'
    overlay.style.display = 'block'
    document.querySelector('header').style.display = 'none'

})

mars.addEventListener('click', async function () {
    let planets = await getPlanets();
    imgPlanets([planets[4]])
    info.style.display = 'block'
    overlay.style.display = 'block'
    document.querySelector('header').style.display = 'none'

})
jupiter.addEventListener('click', async function () {
    let planets = await getPlanets();
    imgPlanets([planets[5]])
    info.style.display = 'block'
    overlay.style.display = 'block'
    document.querySelector('header').style.display = 'none'

})
saturn.addEventListener('click', async function () {
    let planets = await getPlanets();
    imgPlanets([planets[6]])
    info.style.display = 'block'
    overlay.style.display = 'block'
    document.querySelector('header').style.display = 'none'

})
uranus.addEventListener('click', async function () {
    let planets = await getPlanets();
    imgPlanets([planets[7]])
    info.style.display = 'block'
    overlay.style.display = 'block'
    document.querySelector('header').style.display = 'none'

})
neptune.addEventListener('click', async function () {
    let planets = await getPlanets();
    imgPlanets([planets[8]])
    info.style.display = 'block'
    overlay.style.display = 'block'
    document.querySelector('header').style.display = 'none'
})




// *********home and close button*********************

close.addEventListener('click', function () {
    window.location.reload()


})
home.addEventListener('click', function () {
    window.location.reload()

})



// ****************pagination slide *****************'

nextPage.addEventListener('click', async function () {
    planetList.style.marginLeft = '-5rem'

})
previousPage.addEventListener('click', async function () {
    planetList.style.marginLeft = '30rem'

})

// ****************search input addventlistener****************

let found = false;
let foundCount = 0;

searchInput.addEventListener('keyup', async function (e) {
    if (e.key === 'Enter') {
        found = false;
        let input = searchInput.value;
        let planets = await getPlanets("name", input);

        planets.forEach(planet => {

            if (planet.name.toLowerCase() === input.toLowerCase()) {

                uppdatePlanets([planet]);
                found = true
                foundCount++;

            } else if (planet.name.toLowerCase().includes(input)) {
                uppdatePlanets([planet]);
                found = true

            }

            searchInput.value=''

        });



        // error massage if searched wrong
        if (!found) {

            alert("The planet you're looking for does not exist!")

            console.log('Does not exist!');

        }


        // depend on how many planet displays, it does different functions.
        if (foundCount == 1) {
            nextPage.style.display = 'none'
            previousPage.style.display = 'none'
            planetList.style.marginLeft = '12.5rem'

        } else if (foundCount < 5) {
            planetList.style.marginLeft = '17rem'
        } else {
            nextPage.style.display = 'block';
            previousPage.style.display = 'none'

        }

    }
})


// ********** get planets by searching**************

function uppdatePlanets(planets) {

    planets.forEach(planet => {
        searchInput.style.display = 'none'
        document.querySelector('header').style.display = 'none'
        document.querySelector('body').style.backgroundImage = 'url(/img/inputback.jpg)'
        document.querySelector('div').style.visibility = 'visible'
        document.getElementById('astro').style.visibility = 'visible'
        imgList.style.display = 'none'
        home.style.display = 'block'
        nextPage.style.display = 'block'
        previousPage.style.display = 'block'


        planetList.style.visibility = 'visible'

        let name = document.createElement('h2')

        name.innerText = planet.name;

        planetList.appendChild(name)

        name.addEventListener('click', function () {
            window.localStorage.setItem('planetinfo', JSON.stringify(planet))
            location.href = 'planetinfo.html';
        })

    });

}

// ****** get planets info by clicking Img**********************

function imgPlanets(Imgplanets) {
    Imgplanets.forEach(planetpic => {
        searchInput.style.display = 'none'


        let planetName = document.createElement('h4')
        planetName.innerText = planetpic.name;
        info.appendChild(planetName)

        let latinName = document.createElement('h5')
        latinName.innerText = planetpic.latinName;
        info.appendChild(latinName)

        let desc = document.createElement('p')
        desc.innerHTML = 'Description:' + ' ' + planetpic.desc;
        info.appendChild(desc)


        planetName.addEventListener('click', function () {
            window.localStorage.setItem('planetinfo', JSON.stringify(planetpic))
            location.href = 'planetinfo.html';
        })



    });

}



async function getPlanets() {
    let baseUrl = 'https://fathomless-shelf-54969.herokuapp.com/bodies'
    try {
        let res = await fetch(`${baseUrl}`, {
            method: 'GET',
            headers: {
                'x-zocom': key,

            }
        })
        data = await res.json();
        return await data.bodies;

    } catch (err) {
        console.error(err);
    }
}

getPlanets();