/*
Escriba una función llamada add7que tome un número y devuelva ese número + 7.
Escribe una función llamada multiplyque tome 2 números y devuelva su producto.
Escriba una función llamada capitalizeque tome una cadena y la devuelva con solo la primera letra en mayúscula. Asegúrese de que pueda aceptar cadenas en minúsculas, MAYÚSCULAS o ambas.
Escriba una función llamada lastLetterque tome una cadena y devuelva la última letra de esa cadena:
lastLetter("abcd")debería volver"d"

function add7(number) {
  return number + 7;
}
function multiply(Number1, Number2) {
  return Number1 * Number2;
}
function capitalize(stringoftexttocapitalize) {
  const stringinminuscula = String(stringoftexttocapitalize).toLowerCase();
  let firstletter = String(stringinminuscula).slice(0, 1);
  let firstletterupper = firstletter.toUpperCase();
  return String(stringoftexttocapitalize).replace(
    firstletter,
    firstletterupper
  );

function fizzbuzz() {
  let userentry = Number(prompt("dime hasta que numero: "));
  let i = 0;
  function modulo(buzz, fizz) {
    return console.log(`${i}, ${buzz}${fizz}`);
  }
  let tipodeentrada = typeof userentry;
  if (tipodeentrada === "number") {
    for (i = 0; i < userentry; i++) {
      if (i % 5 === 0 || i % 3 === 0) {
        modulo(i % 5 === 0 ? "buzz " : "", i % 3 === 0 ? "fizz " : "");
      } else {
        console.log(i);
      }
    }
  } else {
    console.log("no ingreso numero");
  }
}
fizzbuzz();
*/