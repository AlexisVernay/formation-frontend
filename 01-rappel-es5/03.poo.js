function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return "Prénom : " + this.prenom + ", Nom : " + this.nom + ", Pseudo : " + this.pseudo;
    };
}

jules = new Personne("Jules", "LEMAIRE", "jules77");
paul = new Personne("Paul", "LEMAIRE", "paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

jules.pseudo = "jules44";

console.log(jules.getNomComplet());

function afficherPersonne(personne) {
    console.log(personne.getNomComplet());
}

afficherPersonne(paul);

console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";

console.log(jules.age);

jules.age = 30;

console.log(jules.age);

Personne.prototype.getInitiales = function() {
    return this.nom.charAt(0) + this.prenom.charAt(0);
};

console.log(jules.getInitiales());

robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function(){
        return "Prénom : " + this.prenom + ", Nom : " + this.nom + ", Pseudo : " + this.pseudo;
    }
}

afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.numeroClient = numeroClient;
    this.getNomComplet = function() {
        return "Prénom : " + this.prenom + ", Nom : " + this.nom + ", Pseudo : " + this.pseudo;
    };
    this.getInfos = function() {
        return "N° Client : " + this.numeroClient + ", Prénom : " + this.prenom + ", Nom : " + this.nom;
    };
}

steve = new Client("LUCAS", "Steve", "steve44", "A01");

//afficherPersonne.call(steve, "personne");

console.log(steve.numeroClient);

console.log(steve.getInfos());