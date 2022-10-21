const API_url = 'https://rickandmortyapi.com/api/character/?page=';

const HTMLResponse = document.querySelector('#all');
const ul = document.createElement('ul');
const cardOri = document.querySelector('.card');
const section = document.querySelector('.mainSection');
let value = 1;

function getAPI(){
  fetch(`${API_url}${value}`)
  .then(response => response.json())
  .then(json => {
    json.results.forEach(jsonElement => {
      let card_elem = cardOri.cloneNode();
      card_elem.innerHTML = cardOri.innerHTML;
      card_elem.querySelector('.card-title').innerHTML = jsonElement.name;
      card_elem.querySelector('.card-text').innerHTML = jsonElement.status;
      card_elem.querySelector('.card-img-top').src = jsonElement.image;
      card_elem.querySelector('.text-specie').innerHTML = jsonElement.species;
      card_elem.querySelector('.text-gender').innerHTML = jsonElement.gender;
      section.append(card_elem);
    })
  });
}

getAPI();

function updateInfo(){
     value = document.getElementById("Name").value;
     console.log(value);
     section.innerHTML = "";
     getAPI();
}


section.addEventListener('click', expandInfo)

function expandInfo(callback) {
  if (callback.target.matches('a.btn-primary')) {
    console.log("buenas noches");
    let x = callback.target.parentNode.querySelector('.ver_mas');
    x.classList.toggle('hide');
    console.log(x.classList);
  }

}