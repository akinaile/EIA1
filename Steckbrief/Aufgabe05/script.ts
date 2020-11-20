console.log("Daten zu Emissionswerten");
//europe
const europe08: number = 4965.7;
const europe18: number = 4209.3;

//northamerica
const northamerica08: number = 6600.4;
const northamerica18: number = 6036.3;

//southamerica
const southamerica08: number = 1132.6;
const southamerica18: number = 1261.5;

//africa
const africa08: number = 1028; 
const africa18: number = 1235.5;

//asia
const asia08: number = 12954.7;
const asia18: number = 16274.1;

//australia
const australia08: number = 1993;
const australia18: number = 2100.5;

//gesamt
const gesamt: number = europe18 + northamerica18 + southamerica18 + africa18 + asia18 + australia18

//europe
console.log("Emmissionswerte von Europa")
console.log("Die Emission von Europa ist: " + europe18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + (100/(gesamt / europe18)).toFixed(1) + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + (100/(europe18/europe08)) .toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (europe18 - europe08) .toFixed(1) + "kg CO2");
console.log("")

//northamerica
console.log("Emmissionswerte von Nordamerika")
console.log("Die Emission von Nordamerika ist: " + northamerica18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + (100/(gesamt / northamerica18)).toFixed(1) + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (100/(northamerica18/northamerica08)) .toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (northamerica18 - northamerica08) .toFixed(1) + "kg CO2");
console.log("")

//southamerica
console.log("Emmissionswerte von Südamerika")
console.log("Die Emission von Südamerika ist: " + southamerica18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + (100/(gesamt / southamerica18)).toFixed(1) + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (100/(southamerica18/southamerica08)) .toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (southamerica18 - southamerica08) .toFixed(1) + "kg CO2");
console.log("")

//africa
console.log("Emmissionswerte von Afrika")
console.log("Die Emission von Afrika ist: " + africa18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + (100/(gesamt / africa18)).toFixed(1) + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + (100/(africa18/africa08)) .toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (africa18 - africa08) .toFixed(1) + "kg CO2");
console.log("")

//asia
console.log("Emmissionswerte von Asien")
console.log("Die Emission von Asien ist: " + asia18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + (100/(gesamt / asia18)).toFixed(1) + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + (100/(asia18/asia08)) .toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (asia18 - asia08) .toFixed(1) + "kg CO2");
console.log("")

//australia
console.log("Emmissionswerte von Australien")
console.log("Die Emission von Australien ist: " + australia18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + (100/(gesamt / australia18)).toFixed(1) + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + (100/(australia18/australia08)) .toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das genau " + (australia18 - australia08) .toFixed(1) + "kg CO2");
console.log("")

//# sourceMappingURL=script.js.map