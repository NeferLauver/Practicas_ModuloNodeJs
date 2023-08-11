/* 1️⃣ EJERCICIO 1 : PRIMER HOLA 
console.log('Hola koders, Im a new tool')  */


/* 2️⃣EJERCICIO 2 : Saludar a quien ponga en terminal  */
/* const name = 'Nefertari';
console.log(`hola ${name}`); 

console.log(process.argv); */

/* console.log(global); 

console.log(process) */ /* --> sale de  globalThis.console.log(``) */

/* 

❌NO TENEMOS:

-Window
-Document

✅SI TENEMOS:

-global and - globalThis ( same information only evolutioned )
-process */


/*3️⃣ EJERCICIO 3  : Aceder a mi argumento del arreglo arrojado de argv */

/* console.log(`hola ${process.argv[2]}`); */
/* ejecuto con ruta de archivo y el nombre que yo quiera  */

/* console.log(process.argv); */

/* 4️⃣EJERCICIO 4 : saludar a todos los nombres que reciba  */

const names = process.argv.slice(2);
/* todo lo que tengas despues del inidce 2 mandamelo, names es un array */

names.forEach((names) =>{
console.log(`Hola ${names}`);
});

