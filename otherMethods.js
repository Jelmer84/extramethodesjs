// /* Opdracht 1 */
// // Schrijf een functie die de diameter van een cirkel verwacht als parameter en
// // de omtrek van die cirkel bererekent en teruggeeft
// // tip: PI * diameter
// // ---- Verwachte uitkomsten:
// // 4 geeft 12.566370614359172
// // 12 geeft 37.69911184307752
// function circumferenceOfCircle (diameterOfCircle) {
//     return diameterOfCircle * Math.PI
// }
// console.log(circumferenceOfCircle(4))
// console.log(circumferenceOfCircle(12))
//
// /* Opdracht 2 */
// // Schrijf bovenstaande functie nogmaals, maar zorg er nu voor dat de uitkomst wordt afgerond
// // ---- Verwachte uitkomsten:
// // 4 geeft 13
// // 12 geeft 38
// function circumferenceOfCircleRounded (diameterOfCircle) {
//     const calculation = diameterOfCircle * Math.PI
//     return Math.round(calculation)
// }
// console.log(circumferenceOfCircleRounded(4))
// console.log(circumferenceOfCircleRounded(12))
//
// /* Opdracht 3 */
// // Schrijf een functie die het laatste karakter in een string teruggeeft
// // ---- Verwachte uitkomsten:
// // "vermicelli" geeft "i"
// // "kroepoek" geeft "k"
// function lastOfString (string) {
//     return string.slice(-1)
// }
// console.log(lastOfString("vermicelli"))
// console.log(lastOfString("kroepoek"))
//
// /* Opdracht 4 */
// // Schrijf een functie die een array maakt van alle woorden in een zin, maar wanneer er
// // spaties aan het begin of einde van de zin staan, deze niet in de array zet.
// // ---- Verwachte uitkomsten:
// // " De pot verwijt de ketel dat hij zwart ziet" geeft ['De', 'pot', 'verwijt', 'de', 'ketel', 'dat', 'hij', 'zwart', 'ziet'];
// // "Niet geschoten is altijd mis " geeft [ 'Niet', 'geschoten', 'is', 'altijd', 'mis' ];
// function sentenceToArray (sentence) {
//    const trimmedSentence = sentence.trim();
//    return trimmedSentence.split(" ")
// }
// console.log(sentenceToArray("    De pot verwijt de ketel dat hij zwart ziet"))
// console.log(sentenceToArray("Niet geschoten is altijd mis "))
//
// /* Opdracht 5 */
// // Maak een variabele today aan en sla daar een nieuw date-object in op
// // Print in de console (in nummers) in welke maand we nu zitten
// // Print in de console (in nummers) welk uur van de dag het is
// const today = new Date()
// console.log("Januari is maand", today.getMonth() +1)
// console.log("Het is nu", today.getHours(), "uur")

/* BONUS OPDRACHT (als je tijd over hebt) */
// Schrijf een functie die twee strings als parameters verwacht en de langste naam teruggeeft.
// als de namen beide even lang zijn geeft hij de string "Beide namen zijn even lang" terug
// ---- Verwachte uitkomsten:
// "Nick", "Nova" geeft "Beide namen zijn even lang"
// "Mitchel", "Nick" geeft "Mitchel"
function longestName (nameOne, nameTwo) {
    if (nameOne.length === nameTwo.length) {
       return "Beide namen zijn even lang"
    } if (nameOne.length > nameTwo.length) {
        return nameOne
    } else {
        return nameTwo
    }
}

console.log(longestName("Nick", "Nova"))
console.log(longestName("Mitchel", "Nick"))
console.log(longestName("Ilva", "Jelmer"))

