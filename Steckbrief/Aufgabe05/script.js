console.log("Daten zu Emissionswerten");
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
//europe
console.log("Emmissionswerte von Europa");
console.log("Die Emission von Europa ist: " + europe18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + (100 / (gesamt / europe18)).toFixed(1) + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / (europe18 / europe08)).toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (europe18 - europe08).toFixed(1) + "kg CO2");
console.log("");
//northamerica
console.log("Emmissionswerte von Nordamerika");
console.log("Die Emission von Nordamerika ist: " + northamerica18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + (100 / (gesamt / northamerica18)).toFixed(1) + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / (northamerica18 / northamerica08)).toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (northamerica18 - northamerica08).toFixed(1) + "kg CO2");
console.log("");
//southamerica
console.log("Emmissionswerte von Südamerika");
console.log("Die Emission von Südamerika ist: " + southamerica18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + (100 / (gesamt / southamerica18)).toFixed(1) + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / (southamerica18 / southamerica08)).toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (southamerica18 - southamerica08).toFixed(1) + "kg CO2");
console.log("");
//africa
console.log("Emmissionswerte von Afrika");
console.log("Die Emission von Afrika ist: " + africa18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + (100 / (gesamt / africa18)).toFixed(1) + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / (africa18 / africa08)).toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (africa18 - africa08).toFixed(1) + "kg CO2");
console.log("");
//asia
console.log("Emmissionswerte von Asien");
console.log("Die Emission von Asien ist: " + asia18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + (100 / (gesamt / asia18)).toFixed(1) + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / (asia18 / asia08)).toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (asia18 - asia08).toFixed(1) + "kg CO2");
console.log("");
//australia
console.log("Emmissionswerte von Australien");
console.log("Die Emission von Australien ist: " + australia18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + (100 / (gesamt / australia18)).toFixed(1) + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + (100 / (australia18 / australia08)).toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (australia18 - australia08).toFixed(1) + "kg CO2");
console.log("");
//# sourceMappingURL=script.js.map
//# sourceMappingURL=script.js.map