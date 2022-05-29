const api = 'https://rickandmortyapi.com/api/character/';
const listEl = document.getElementById('lista');

const getPersonagem = async (url) => {

    var response = await fetch(url);     
    const data = await response.json();    
    const characters = data.results;
    listar(characters);
}

const listar = (characters) => {
    listEl.innerHTML = '';
    characters.map((character) => {
        listEl.insertAdjacentHTML('beforeend', `
    <div>
      <div>
        <p>${character.name}</p>
      </div>
      <div>
        <img src="${character.image}" alt="imagem do personagem"/>
      </div>
      <div>
        <p><strong>Origem:</strong> ${character.origin.name}</p>
      </div>
    </div>
    `)
    })        

}


getPersonagem(api);


// Create an EyeDropper object
let eyeDropper = new EyeDropper();

// Enter eyedropper mode
let icon = document.getElementById("eyeDropperIcon")
let color = document.getElementById("colorCode")
// You may use the dropper only on the cat!
icon.addEventListener('click', e => {
    eyeDropper.open()
    .then(colorSelectionResult => {
        // returns hex color value (#RRGGBB) of the selected pixel
        color.innerText = colorSelectionResult.sRGBHex;
    })
    .catch(error => {
        // handle the user choosing to exit eyedropper mode without a selection
    });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}