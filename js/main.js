//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#randomizerButton').addEventListener('click', addInterval)


let intervalID
let objectID

function addInterval(){
  clearInterval(intervalID)
  getObjectID()
  intervalID = setInterval(getObjectID, 15000)
}

function getObjectID(){
    objectID = Math.floor(Math.random() * 478166)

    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.title
      document.querySelector('img').src = data.primaryImage
      document.querySelector('h3').innerText = data.objectDate
      document.querySelector('.artist').innerText = data.artistDisplayName
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}

document.querySelector('#pauseButton').addEventListener('click', pause)

function pause() {
  clearInterval(intervalID)
}
