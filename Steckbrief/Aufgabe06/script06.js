var Aufgabe06;
//europe
var europe08 = 4965.7;
var europe18 = 4209.3;
//northamerica
var northamerica08 = 6600.4;
var northamerica18 = 6036.3;
//southamerica
var southamerica08 = 1132.6;
var southamerica18 = 1261.5;
//africa
var africa08 = 1028;
var africa18 = 1235.5;
//asia
var asia08 = 12954.7;
var asia18 = 16274.1;
//australia
var australia08 = 1993;
var australia18 = 2100.5;
//gesamt
var gesamt = europe18 + northamerica18 + southamerica18 + africa18 + asia18 + australia18;
console.log(gesamt)
//europe
var europeA = ((100 / (gesamt / europe18)).toFixed(1) + "%");
var europeB= (Math.round(((europe18 / europe08) - 1) * 100)) + "%";
var europeC = ((europe18 - europe08).toFixed(1) + "kg CO2");

//northamerica
var northamericaA=((100 / (gesamt / northamerica18)).toFixed(1) + "%");
var northamericaB= (Math.round(((northamerica18 / northamerica08) - 1) * 100)) + "%";
var northamericaC=((northamerica18 - northamerica08).toFixed(1) + "kg CO2");

//southamerica
var southamericaA=((100 / (gesamt / southamerica18)).toFixed(1) + "%");
var southamericaB= (Math.round(((southamerica18 / southamerica08) - 1) * 100)) + "%";
var southamericaC=((southamerica18 - southamerica08).toFixed(1) + "kg CO2");

//africa
var africaA=((100 / (gesamt / africa18)).toFixed(1) + "%");
var africaB= (Math.round(((africa18 / africa08) - 1) * 100)) + "%";
var africaC=((africa18 - africa08).toFixed(1) + "kg CO2");

//asia
var asiaA=((100 / (gesamt / asia18)).toFixed(1) + "%");
var asiaB= (Math.round(((asia18 / asia08) - 1) * 100)) + "%";
var asiaC=((asia18 - asia08).toFixed(1) + "kg CO2");

//australia
var australiaA=((100 / (gesamt / australia18)).toFixed(1) + "%");
var australiaB= (Math.round(((australia18 / australia08) - 1) * 100)) + "%";
var australiaC=((australia18 - australia08).toFixed(1) + "kg CO2");


function Änderung (continent08, continent18, continentA, continentB, continentC){
    document.querySelector("h1") .innerHTML = "Carbon Dioxide Emissions in " + continent08;
    document.querySelector("h2") .innerHTML = continent18.toString();
    document.querySelector("p") .innerHTML = "Emission absolute of " + continent08 + " in 2018";
    document.querySelector("#h2a") .innerHTML = continentA;
    document.querySelector("#h2b") .innerHTML = continentB;
    document.querySelector("#h2c") .innerHTML = continentC;
    document.querySelector(".chart").setAttribute("style", "height:" + ((continent18 / gesamt) * 100) + '%');
};


window.addEventListener("load", function() {
    document.querySelector(".europe").addEventListener("mousemove", function() {
        Änderung("EUROPE", europe18, europeA, europeB, europeC,)
});
});

window.addEventListener("load", function() {
    document.querySelector(".northamerica").addEventListener("mousemove", function(){
        Änderung("NORTHAMERICA", northamerica18, northamericaA, northamericaB, northamericaC)
});
});
window.addEventListener("load", function() {
    document.querySelector(".southamerica").addEventListener("mousemove", function(){
        Änderung("SOUTHAMERICA", southamerica18, southamericaA, southamericaB, southamericaC)
});
});
window.addEventListener("load", function() {
    document.querySelector(".africa").addEventListener("mousemove", function(){
        Änderung("AFRICA", africa18, africaA, africaB, africaC)
});
});
window.addEventListener("load", function() {
    document.querySelector(".asia").addEventListener("mousemove", function(){
        Änderung("ASIA", asia18, asiaA, asiaB, asiaC)
});
});
window.addEventListener("load", function() {
    document.querySelector(".australia").addEventListener("mousemove", function(){
        Änderung("AUSTRALIA", australia18, australiaA, australiaB, australiaC)
});
});
(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script06.js.map