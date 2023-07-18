// 1 - nunmber
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -14);

// 2 - operações aritimeticas
console.log( 2 + 4);
console.log(6 / 2);
console.log( 5 * 5);

// 3 - especial number
console.log( typeof Infinity);
console.log( typeof infinity);
console.log( 4 * "asad");
console.log( typeof NaN);

// 4 - strings
console.log("um texto");
console.log('mais um texto');
console.log( '12');
console.log(typeof 'mais um texto');
console.log( typeof '12');

// 5 - simbolos especiais em strings
console.log("testando \n a quebra de linha");
console.log( "espaçamento de \t tab");

// 6 - concatenação
console.log("olá" + " tudo" + " bem?");
console.log( 'testando ' + 'com '+' crase');

// 7 - interpolação(template de string)
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log( `Podemos executar qualquer coisa aqui ${console.log("teste")}`);

//  8 - Boleanos
console.log( typeof true);
console.log( false);
console.log( 5>20);
console.log( 20<39);


// 9 - Comparações
console.log( 5<=5);
console.log( 5<5);
console.log( 10==10);
console.log( 10==9);
console.log( 10!=9);

// 10 - identico
console.log(9=="9" );
console.log(9==="9" );
console.log(9!="9" );
console.log(9!=="9" );

// 11 - operadores lógicos
console.log( true&&true);
console.log( true&&false);
console.log(5>2 && 2<10 );
console.log( 5 > 2 && "Fagner"===1);
console.log( 5 > 2 || "Fagner"===1);
console.log( !true);
console.log( !5>2);

// 12 - empty values
console.log(typeof null, typeof undefined );
console.log(null==undefined );
console.log( null===undefined);
console.log( null==false);
console.log(undefined==false);
console.log( );

// 13 - mudança de tipo
console.log( 5 * null);
console.log("teste" * "teste" );
console.log( "10" + 1);
console.log( "10" - 1);
