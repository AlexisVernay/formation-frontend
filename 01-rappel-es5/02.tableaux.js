var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(value) {
    console.log(value);
});

console.log("lettreADansToutesLesVilles == " 
, villes.every(function(value) {
    return value.includes("a");  
}));

console.log("auMoinsUneVilleAvecUnTiret == " 
, villes.some(function(value) {
    return value.includes("-");  
}));

var villesSansTiretSansEspace = villes.filter(ville => !ville.includes("-") 
                                                & !ville.includes(" "));

console.log("villesSansTiretSansEspace == ", villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(ville => ville.slice(-1).includes("s") 
);

console.log("villesMajusculeSeTerminantParS == ", villesMajusculeSeTerminantParS.map(ville => ville.toUpperCase()));