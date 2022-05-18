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