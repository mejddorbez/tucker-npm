//"use strict"
var objetJSON = {
    nom : "Dorbez",
    prenom : "Mejd Eddine"
}


var Classy = function(nom, prenom){
    this.nom = nom,
    this.prenom = prenom,
    this.saluer = function () {
        console.log(this.prenom + ": Tay!")
    }
}


Classy.prototype.cnte = 5
var objet = new Classy("nom", "prenom")
//console.log(objetJSON)
//console.log(objetJSON.nom)
//console.log(objetJSON["prenom"])


//for (key in objetJSON) {
//    objet[key] = objetJSON[key]
//}
console.log(JSON.parse(JSON.stringify(objet)))
console.log(objet.cnte)
objet.saluer()
x=5