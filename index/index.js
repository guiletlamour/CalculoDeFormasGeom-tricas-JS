//Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, 
//B e C. Em seguida, calcule e mostre: 
//a) a área do triângulo retângulo que tem A por base e C por altura. 
//b)a área do círculo de raio C. (pi = 3.14159) 
//c) a área do trapézio que tem A e B por bases e C por altura. 
//d) a área do quadrado que tem lado B. 
//e) a área do retângulo que tem lados A e B. 

const a = 3.0;
const b = 4.0;
const c = 5.2;

const circulo = 3.14159*c*c;
const triangulo = a*c/2;
const trapezio = b+a; //Se juntar a função multiplicação e divição são feitas primeiro. 
const calculoTrapezio = trapezio*c/2;
const quadrado = b*b;
const retangulo = a*b; 

console.log("Área triangulo " + triangulo); 
console.log("Área circulo " + circulo);
console.log("Área Trapézio " + calculoTrapezio);
console.log("Área quadrado " + quadrado);
console.log("Área retangulo " + retangulo);

const aDois = 12.7;
const bDois = 10.4;
const cDois = 15.2;

const circuloDois = 3.14159*cDois*cDois;
const trianguloDois = aDois*cDois/2;
const trapezioDois = aDois+bDois;  
const calculoTrapezioDois = trapezioDois*cDois/2;
const quadradoDois = bDois*bDois;
const retanguloDois = aDois*bDois; 

console.log("Área triangulo2 " + trianguloDois); 
console.log("Área circulo2 " + circuloDois);
console.log("Área Trapézio2 " + calculoTrapezioDois);
console.log("Área quadrado2 " + quadradoDois);
console.log("Área retangulo2 " + retanguloDois);

 




