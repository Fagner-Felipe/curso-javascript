// 1 - adicionando eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("Clicou aqui!");
});

// 2 - remove event listeners

const secondBtn = document.querySelector("#btn");

function imprimirMsg(){
    console.log("teste");
}

secondBtn.addEventListener("click", imprimirMsg);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () =>{
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMsg);
});

// 3 - Argumento do evento

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.srcElement);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// 4 - propagação

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("evento 1")
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("evento 2")
});

// 5 - removendo evento padrão

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("não alterou a página")
});

// 6 - eventos de tecla

document.addEventListener("keyup", (e) => {
    console.log(`soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    e.stopPropagation();
    console.log(`apertou a tecla ${e.key}`);
});

// 7 - eventos de mouse

const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", (e) => {
    console.log(`apertou o botão `)
});

mouse.addEventListener("mouseup", (e) => {
    console.log(`soltou o botão `)
});

mouse.addEventListener("dblclick", (e) => {
    console.log(`clicou 2x o botão `)
});

// 8 - evento de movimento de mouse

// document.addEventListener("mousemove", (e) => {
//     console.log(`no eixo x: ${e.x}`)
//     console.log(`no eixo y: ${e.y}`)
// });

// 9 - evento por scroll

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        console.log("passamos de 200px");
    }
});

// 10 - evento de foco

const input = document.querySelector("#my-input");
input.addEventListener("focus", (e) => {
    console.log("entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("saiu no input");
});

// 11 - evento de carregamrnto

window.addEventListener("load", (e) => {
    console.log("a página carregou"); 
});

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "teste"; 
});


// 12 - debounce

const debounce = (f, delay) => {
    let timeout;

    return(...arguments) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    }
};

window.addEventListener("mousemove", 
    debounce(() => {
    console.log("executando a cada 400ms");
    }, 400)
);





