"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = '';
    }
    Professional.prototype.showOnScreen = function () {
        console.log(this.name, this.age, this.weight, this.height, this.isRetired, this.nationality, this.oscarsNumber, this.profession, this.photo);
    };
    return Professional;
}());
exports.Professional = Professional;
var resultProfessional = new Professional('Pepe', 40, 75, 1.80, false, 'Spanish', 2, 'actor', '');
var director1 = new Professional('Rob Minkoff', 61, 56, 1.68, true, 'American', 0, 'director', 'img');
var director2 = new Professional('Christopher McQuarrie', 55, 73, 1.83, true, 'American', 1, 'director', 'img');
var writer1 = new Professional('Jeff Nathanson', 58, 56, 1.70, true, 'American', 0, 'writer', 'img');
var writer2 = new Professional('Simon Farnaby', 50, 80, 1.85, true, 'English', 0, 'freelance', 'img');
var actor1 = new Professional('Jason Momoa', 44, 56, 1.93, true, 'American', 0, 'actor', 'img');
var actor2 = new Professional('Tom Cruise', 61, 68, 1.70, true, 'American', 1, 'actor', 'img');
console.log(resultProfessional.showOnScreen);
