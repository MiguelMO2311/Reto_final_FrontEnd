const FilmsContainer = [];
const container = document.getElementById('films-container');

class Movie {
   
    constructor (Id, title, releaseYear, nacionality, genre, photo){
        this.Id = Id;
        this.title = title;
        this.releaseYear =releaseYear;
        this.nacionality = nacionality;
        this. genre = genre;
        this.photo = photo;  

        this.actors = [];
        this.director = '';
        this.writer = '';        ;
        this.language = '';
        this.plataforma = '';
        this.isMCU = true;
        this.mainCharacterName = '';
        this.producer = '';
        this.distributor = '';
        
}
}
const dataBase = [
    new Movie (1,'El Rey Leon',1994,'United States of America', 'musical','./img/img_elReyLeon.jpeg' ),
    new Movie (2, 'Mision Imposible- Sentencia Mortal_1', 2023, 'United States of America','action','./img/img_misionImposible7.jpg'),
    new Movie (3,'Wonka',2023, 'United Kingdom', 'fantastic','./img/img_Wonka.jpg' ),
    new Movie (4,'Los Juegos del Hambre- Balada…', 2023, 'United States of America','science-fiction','./img/img_losJuegosDelHambre.jpg'),
    new Movie (5,'Aquaman y el Reino Perdido',2023,'United States of America', 'fantastic','./img/img_Acuaman.jpg' ),
    new Movie (6,'Champions', 2023, 'United States of America','comedy','./img/img_Champions.jpg'),
    ];
    
   
 
   
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



 





//     Movie.prototype.showAllMovieData = function () {
//         var _this = this;
//         actorsName = this.actors.map(function (actor) { return _this.actors; });
//         var mv = "Title: ".concat(this.title, ",\n     releaseYear: ").concat(this.releaseYear, ",\n   actors: ").concat(this.actors, ",\n     nacionality: ").concat(this.nacionality, ",\n     director: ").concat(this.director, ",\n     writer: ").concat(this.writer, ",\n     language: ").concat(this.language, ",\n     plataforma: ").concat(this.plataforma, ",\n     isMCU: boolean;").concat(this.isMCU, ",\n     mainCharacterName: ").concat(this.mainCharacterName, ",\n     producer: ").concat(this.producer, ",\n     distributor: ").concat(this.distributor, ",\n     genre: ").concat(this.genre, ".");
//         return mv;
//     };
//     return Movie;
// };


// showAllMovieData(){
//     let actorsName = this.actors.map((actor) => this.actors)

//     let mv = 
//     `Title: ${this.title},
//      releaseYear: ${this.releaseYear},
//      actors: ${this.actors},
//      nacionality: ${this.nacionality},
//      director: ${this.director},
//      writer: ${this.writer},
//      language: ${this.language},
//      plataforma: ${this.plataforma},
//      isMCU: boolean;${this.isMCU},
//      mainCharacterName: ${this.mainCharacterName},
//      producer: ${this.producer},
//      distributor: ${this.distributor},
//      genre: ${this.genre}.`
    
    
//     return mv;
// }

