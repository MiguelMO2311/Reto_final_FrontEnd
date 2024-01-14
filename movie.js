
class Movie {

  constructor(Id, title, releaseYear, nacionality, genre, photo) {
    this.Id = Id;
    this.title = title;
    this.releaseYear = releaseYear;
    this.nacionality = nacionality;
    this.genre = genre;
    this.photo = photo;
    this.actors = [];
    this.director = '';
    this.writer = '';;
    this.language = '';
    this.plataforma = '';
    this.isMCU = true;
    this.mainCharacterName = '';
    this.producer = '';
    this.distributor = '';
  }

}
const dataBase = [
  new Movie(1, 'El Rey Leon', 1994, 'United States of America', 'musical', './img/img_elReyLeon.jpeg'),
  new Movie(2, 'Mision Imposible- Sentencia Mortal_1', 2023, 'United States of America', 'action', './img/img_misionImposible7.jpg'),
  new Movie(3, 'Wonka', 2023, 'United Kingdom', 'fantastic', './img/img_Wonka.jpg'),
  new Movie(4, 'Los Juegos del Hambre- Balada…', 2023, 'United States of America', 'science-fiction', './img/img_losJuegosDelHambre.jpg'),
  new Movie(5, 'Aquaman y el Reino Perdido', 2023, 'United States of America', 'fantastic', './img/img_Acuaman.jpg'),
  new Movie(6, 'Champions', 2023, 'United States of America', 'comedy', './img/img_Champions.jpg'),
];

const FilmsContainer = [];
const container = document.getElementById('films-container');

function createCards() {
  let htmlCards = '';
  dataBase.forEach(movie => {
    const card =
      `<div class="card" style="width: 14rem; margin:2%; padding:2%; border:none;">
      <img src="${movie.photo}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.nacionality}</p>
        <p class="card-text">${movie.releaseYear}</p>
        <p class="card-text">${movie.genre}</p>
      
      </div>
    </div>`
    htmlCards += card;   
  })
  container.innerHTML = htmlCards;
}

// para añadir y mostrar nuevas peliculas ***

const newItemContainer = document.getElementById('newItemContainer');
function addNewItem() {
    const IdInput = document.getElementById('Id').value;
    const photoInput = document.getElementById('photo').value;
    const titleInput = document.getElementById('title').value;
    const releaseYearInput = document.getElementById('releaseYear').value;
    const nacionalityInput = document.getElementById('nacionality').value;
    const genreInput = document.getElementById('genre').value;
    

    const newItem = {
        itemId: IdInput,
        itemPhoto: photoInput,
        itemTitle: titleInput,
        itemReleaseYear: releaseYearInput,
        itemNacionality: nacionalityInput,
        itemGenre: genreInput,
        }

        const newItemCard = document.createElement('ul');
        newItemCard.innerHTML =  `<div class="card" style="width: 14rem; margin:2%; padding:2%; border:none;">
        <img src="${newItem.itemPhoto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${newItem.itemTitle}</h5>
          <p class="card-text">${newItem.itemNacionality}</p>
          <p class="card-text">${newItem.itemReleaseYear}</p>
          <p class="card-text">${newItem.itemGenre}</p>
        
        </div>
      </div>`;
        newItemContainer.appendChild(newItemCard);
        container.innerText = newItemCard;
    }

// para almacenar en el LocalStorage ***
localStorage.setItem('dataBase', JSON.stringify ('dataBase'));

// para recuperar del LocalStorage ***
dataBase =JSON.parse(localStorage.getItem('dataBase'));

