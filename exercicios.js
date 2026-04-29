// exercicios FOrEach:
let numeros =[1,2,3,4];
console.log("FOR")
for(let i=0; i<numeros.length;i++){
console.log(numeros[i]);
}

console.log("ForEach anonima");
numeros.forEach(function(n){
    if(n %2===0){
    console.log(n);}
});

console.log("ForEach Arrow")
numeros.forEach(n => console.log(n));

//motre o valore no terminal:
let frutas =("Maçã", "Banana", "Uva", "Abacate")
console.log("FOR")
for(let i=frutas;  )


//dado do array: let frutas["Maçã", "Banana", "Uva", "Abacate"]