/* challengeNumber (process.argv[2]) % 2 == 0 ? console.log("Es par"): console.log("Es impar"); process.exit(0); */

const arg = process.argv[2];
const num = parseInt(arg);

if (isNaN(num)) {
    console.error("debes ingresar numero");
    process.exit(1);
}

const esPar = num % 2 === 0 ;

if ( esPar) {
    console.log("es par");
}else {
    console.log("Es impar");
}

process.exit(0);

/* ejecucion 
node par_o_impar.js 10 */