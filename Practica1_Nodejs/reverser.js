/* function changeStr(str) {
    return str.split("").reverse().join("");
}

console.log(changeStr("Kodemia"));

 */

/* Practica VOLTEAR UN STRING , INVERTIR ---------------- */

const palabra = process.argv[2];
const volteada = palabra.split('').reverse().join('')
console.log(volteada);

process.exit(0);