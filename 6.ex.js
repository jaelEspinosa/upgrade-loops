/* Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
 Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array: */

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (let toy of toys) {
   // console.log(toy)
   // console.log('principio',toys.indexOf(toy))
  if (toy.name.includes("gato")) {
   // console.log(toys.indexOf(toy),"este tiene gato", toy.name);
    toys.splice(toys.indexOf(toy));
    //console.log(toys)
  }
    
  
  
  
  
}
console.log(toys);

