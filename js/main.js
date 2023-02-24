//  Hier defineer ik een class die ik ga gebruiken als een object.
class ColorCard {
    //  Hier defineer ik een eigenschap zonder het een waarde te geven (Dit geldt bij elke regel).
    id;
    color;
    addToList;
    htmlElement;
    text;

    //  Dit wordt 1x uitgevoerd wanner "new" wordt gebruikt.
    constructor(newId, newColor, addToList) {
        //  De variabelen hieronder krijgen de waarde die je meegeeft.
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;
        //  Hier creëer ik een nieuwe HTML element.
        this.htmlElement = document.createElement("li");
        //  Hier geef ik de HTML element een class.
        this.htmlElement.classList = "colors__color";
        //  Hier creëer ik een nieuwe HTML element.
        this.circle = document.createElement("figure");
        //  Hier geef ik de HTML element een class.
        this.circle.classList = "colors__circle";
        //  Hier geef ik de HTML element een kleur.
        this.circle.style.background = this.color;
        //  Hier creëer ik een nieuwe HTML element.        
        this.text = document.createElement("p");
        //  Hier geef ik aan wat er in de HTML element moet staan.
        this.text.innerText = "Copied";
        //  Hier geef ik de HTML element een class.
        this.text.classList = "colors__text";
        //  Ik heb een functie gemaakt en die wordt uitgevoerd als ik op 'htmlElement' klik.
        this.htmlElement.onclick = this.onHTMLElementClicked;
        // Hier roep ik de render functie voor de zekerheid.
        this.render(); 
    }

    //  Hier creëer ik een (arrow)functie.
    onHTMLElementClicked = () =>{
        //  Hier voeg ik een class toe.
        this.circle.classList.add("colors__circle--selected");
        //  Hier verander ik de titel van de site naar de HSL-code van de kleur die wordt geklikt.
        document.title = this.color;
        //  Hier voeg ik de HSL-code toe aan de clipboard.
        window.navigator.clipboard.writeText(this.color);
    }

    //  Dit functie zorgt ervoor dat de HTML-code wordt uitgevoerd op de website.
    render() {
        //  Hier voeg ik de 'circle' toe aan de 'htmlElement'.
        this.htmlElement.appendChild(this.circle);
        //  Hier voeg ik de 'text' toe aan de 'htmlElement'.
        this.htmlElement.appendChild(this.text);
        //  Hier voeg ik de 'htmlElement' toe aan de ul die ik in de constructor meegeef.
        this.addToList.appendChild(this.htmlElement);
    }
}

//  Hier defineer ik een class die ik ga gebruiken als een object.
class ColorList {
    //  Hier defineer ik een eigenschap zonder het een waarde te geven (Dit geldt bij elke regel).
    id;
    htmlElement;

    //  Dit wordt 1x uitgevoerd wanner "new" wordt gebruikt.
    constructor(newId){
        //  De variabelen hieronder krijgen de waarde die je meegeeft.        
        this.id = newId;
        //  Hier creëer ik een nieuwe HTML element.
        this.htmlElement = document.createElement("ul");
        // Hier geef ik 'htmlElement' een nieuwe id.
        this.htmlElement.id = this.id;
        //  Hier voeg ik een class toe.
        this.htmlElement.classList.add("colors");
        // Hier roep ik de render functie voor de zekerheid.
        this.render();
    }
    
    //  Dit functie zorgt ervoor dat de HTML-code wordt uitgevoerd op de website.
    render() {
        // Hier pak ik de 'body' en voeg ik daaraan de 'ul' toe.
        document.querySelector("body").appendChild(this.htmlElement);
    }
}

//  Hier defineer ik een class die ik ga gebruiken als een object.
class HSLGenerator{
    //  Hier defineer ik een eigenschap zonder het een waarde te geven (Dit geldt bij elke regel).
    randomHue;
    randomSaturation;
    randomLightness;
    hsl;

    //  Dit wordt 1x uitgevoerd wanner "new" wordt gebruikt.
    constructor() {
        //  Hier zorg ik ervoor dat de functie 'generateHSL' wordt uitgevoerd.
        this.generateHSL();
    }

    //  Hier creëer ik een functie.
    generateHue = function () {
        //  Hier wordt er een random waarde gekozen tussen 1 - 360 voor de 'Hue' (het getal wordt automatisch afgerond).
        this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);
    }

    //  Hier creëer ik een functie.
    generateSaturation = function () {
        //  Hier wordt er een random waarde gekozen tussen 11 - 79 voor de 'Saturation' (het getal wordt automatisch afgerond).
        this.randomSaturation = Math.floor (Math.random() * (79 - 11) + 11) + "%";
    }

    //  Hier creëer ik een functie.
    generateLightness = function () {
        //  Hier wordt er een random waarde gekozen tussen 11 - 100 voor de 'Lightness' (het getal wordt automatisch afgerond).
        this.randomLightness = Math.floor (Math.random() * (100 - 11) + 11) + "%";
    }

    //  Hier creëer ik een functie.
    generateHSL = function () {
        //  Hier roep ik alle de 3 functies hierboven.
        this.generateHue();
        this.generateSaturation();
        this.generateLightness();
        //  Hier maak je de complete HSL.
        this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`
    }
}

//  Hier defineer ik een class die ik ga gebruiken als een object.
class App{
    //  Hier defineer ik een eigenschap zonder het een waarde te geven (Dit geldt bij elke regel).
    id;
    colorList;
    HSLGenerator;
    
    //  Dit wordt 1x uitgevoerd wanner "new" wordt gebruikt.
    constructor(newId) {
        //  De variabelen hieronder krijgen de waarde die je meegeeft.
        this.id = newId;
        //  Hier maak ik een nieuwe 'colorList' aan met de nieuwe id.
        this.colorList = new ColorList(this.id);
        //  Hier maak ik een nieuwe 'HSLGenerator' aan en die sla ik op.
        this.HSLGenerator = new HSLGenerator();
        //  Hier roep ik de functie 'generateColorCards'.
        this.generateColorCards();
    }

    //  Hier creëer ik een functie.
    generateColorCards = function () {
        //  Hier maak ik een 'for loop' aan die 100x doorloopt.
        for (let i = 1; i <= 100; i++){
            //  De willekeurige HSL kleuren die worden aangemaakt bij de 'generateHSL' functie kunnen hiermee gebruikt worden.
            this.HSLGenerator.generateHSL();
            //  Hier maak ik een nieuwe 'ColorCard' object aan en voeg ik vervolgend toe aan de HTML.
            new ColorCard(i, this.HSLGenerator.hsl, document.getElementById(this.colorList.id));
        }
    }
}

//  Hier maak ik nieuwe apps aan.
//  (Met 1 zin gebruik ik de hele code die ik hierboven geschreven heb.)
const app = new App("js--app");
const app2 = new App("js--app--2");
const app3 = new App("js--app--3");