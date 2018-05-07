class Sejour {
    constructor(private _nom:string, private _prix:number){
    }

    get nom(){
        return this._nom
    }

    get prix(){
        return this._prix
    }
}

class SejourService {
    private _sejour:Sejour[];
    
    constructor(){
        this._sejour = [new Sejour('Bahamas', 77), 
                                    new Sejour('Astrakhan', 26)];
    }

    getSejourByName(nomSejour:string): Sejour | undefined {  
        let sejour = this._sejour.filter(sejour => sejour.nom == nomSejour);
            
        if(sejour.length > 0) {
            sejour.forEach(element => {
                console.log(`Séjour trouvé : ${element.nom}, ${element.prix}`); 
                return element;
            });          
        } else {
            console.log(`Pas de séjour trouvé pour ce nom ${nomSejour}`);
            return undefined;
        }     
    }    
}

let sejServ = new SejourService();
sejServ.getSejourByName('Bahamas');
