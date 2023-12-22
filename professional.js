const professionalContainer = [];
const containerP = document.getElementById('films-container');
class Professional {


    constructor(Id, name, age, weight, height, isRetired, nationality,
        oscarsNumber, profession, photo) {
        this.Id = Id;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }

}

const dataBaseProf = [
    new Professional(1, 'Rob Minkoff', 61, 56, 1.68, true, 'American', 0, 'director', './img/img_Rob_Minkoff.jpg'),
    new Professional(2, 'Christopher McQuarrie', 55, 73, 1.83, true, 'American', 1, 'director', './img/img_ChristopherMcQuarrie.jpg'),
    new Professional(3, 'Jeff Nathanson', 58, 56, 1.70, true, 'American', 0, 'writer', './img/img_JeffNathanson.jpg'),
    new Professional(4, 'Simon Farnaby', 50, 80, 1.85, true, 'English', 0, 'freelance', './img/SimonFarnaby.png'),
    new Professional(5, 'Jason Momoa', 44, 56, 1.93, true, 'American', 0, 'actor', './img/img_JasonMomoa.jpg'),
    new Professional(6, 'Tom Cruise', 61, 68, 1.70, true, 'American', 1, 'actor', './img/img_TomCruise.jpg')
];

function createCardsProf() {
    let htmlCardsProf = '';
    dataBaseProf.forEach(professional => {
        const cardProf =
            `<div class="card" style="width: 14rem; margin:2%; padding:2%; border:none;">
  <img src="${professional.photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Nombre: ${professional.name}</h5>
    <p class="card-text">Edad: ${professional.age}</p>
    <p class="card-text">Peso: ${professional.weight}</p>
    <p class="card-text">Altura: ${professional.height}</p>
    <p class="card-text">Retirado?: ${professional.isRetired}</p>
    <p class="card-text">Nacionalidad: ${professional.nationality}</p>
    <p class="card-text">Num. Oscar: ${professional.oscarsNumber}</p>
    <p class="card-text">Profesión: ${professional.profession}</p>
  </div>
</div>`
        htmlCardsProf += cardProf;
    })
    containerP.innerHTML = htmlCardsProf;
}
