let pratoPrincipal = {
    nome: null,
    valor:null
}
let bebida = {
    nome: null,
    valor:null
}
let sobremesa = {
    nome: null,
    valor:null
}

function selectPratoPrincipal(num){
    let a = document.querySelector(".pratoPrincipal li:nth-child("+ num +") .prato");
    let nome;
    let valor;

    limpar("pratoPrincipal");
    a.setAttribute("class","prato active");

    nome = document.querySelector(".pratoPrincipal li:nth-child("+ num +") .prato h3");
    valor = document.querySelector(".pratoPrincipal li:nth-child("+ num +") .prato .valor");
    valor = valor.innerHTML;
    valor = valor.split(" ");
    valorFinal = valor[1].replace(',','.');
    pratoPrincipal.nome = nome.innerHTML;
    pratoPrincipal.valor = Number(valorFinal);

    verificaSelecaoDos3();
}
function selectBebida(num){
    let a = document.querySelector(".bebida li:nth-child("+ num +") .prato");
    let nome;
    let valor;

    limpar("bebida");
    a.setAttribute("class","prato active");

    nome = document.querySelector(".bebida li:nth-child("+ num +") .prato h3");
    valor = document.querySelector(".bebida li:nth-child("+ num +") .prato .valor");
    valor = valor.innerHTML;
    valor = valor.split(" ");
    valorFinal = valor[1].replace(',','.');
    bebida.nome = nome.innerHTML;
    bebida.valor = Number(valorFinal);

    verificaSelecaoDos3();
}
function selectSobremesa(num){
    let a = document.querySelector(".sobremesa li:nth-child("+ num +") .prato");
    let nome;
    let valor;

    limpar("sobremesa");
    a.setAttribute("class","prato active");

    nome = document.querySelector(".sobremesa li:nth-child("+ num +") .prato h3");
    valor = document.querySelector(".sobremesa li:nth-child("+ num +") .prato .valor");
    valor = valor.innerHTML;
    valor = valor.split(" ");
    valorFinal = valor[1].replace(',','.');
    sobremesa.nome = nome.innerHTML;
    sobremesa.valor = Number(valorFinal);

    verificaSelecaoDos3();
}

function verificaSelecaoDos3(){
    let pratoPrinc = document.querySelector(".pratoPrincipal .active");
    let beverage = document.querySelector(".bebida .active");
    let sobre = document.querySelector(".sobremesa .active");

    if(pratoPrinc !==null && beverage !== null && sobre!==null){
        let botao = document.querySelector(".btn");
        botao.innerHTML = "Fechar pedido";
        botao.setAttribute("class","btn btnActive");

    }
    else{
        let botao = document.querySelector(".btn");
        botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
        botao.setAttribute("class","btn");
    }
}

function limpar(classe){
    let todos = document.querySelector("." + classe + " .active");
    if(todos !== null){
        todos.setAttribute("class","prato");
    }
}
