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
    let valorFinal;

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
    let valorFinal;

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
    let valorFinal;

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
        botao.removeAttribute("disabled");

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

function popup(){

    let navbar = document.querySelector(".navbar");
    let conteudo = document.querySelector(".conteudo");
    let footer = document.querySelector(".footer");
    let popup = document.querySelector(".displayNone");
    let total = 0.0;
    let nome = prompt("Nome do comprador:");
    let endereço = prompt("Endereço de entrega: ");

    navbar.setAttribute("class","navbar blur");
    conteudo.setAttribute("class","conteudo blur");
    footer.setAttribute("class","footer blur");
    popup.setAttribute("class","popup");

    let pratoPrincipalNome = document.querySelector(".selectedPratoPrincipal p:nth-child(1)");
    let pratoPrincipalValor = document.querySelector(".selectedPratoPrincipal p:nth-child(2)");

    let bebidaNome = document.querySelector(".selectedBebida p:nth-child(1)");
    let bebidaValor = document.querySelector(".selectedBebida p:nth-child(2)");

    let sobremesaNome = document.querySelector(".selectedSobremesa p:nth-child(1)");
    let sobremesaValor = document.querySelector(".selectedSobremesa p:nth-child(2)");

    let totalValor = document.querySelector(".total p:nth-child(2)");
    let tagA = document.querySelector(".popupActions button a");

    let formataValor = "R$ " + pratoPrincipal.valor.toFixed(2);
    formataValor = formataValor.replace('.',',');

    pratoPrincipalNome.innerHTML = pratoPrincipal.nome;
    pratoPrincipalValor.innerHTML = formataValor;

    formataValor = "R$ " + bebida.valor.toFixed(2);
    formataValor = formataValor.replace('.',',');

    bebidaNome.innerHTML = bebida.nome;
    bebidaValor.innerHTML = formataValor;

    formataValor = "R$ " + sobremesa.valor.toFixed(2);
    formataValor = formataValor.replace('.',',');

    sobremesaNome.innerHTML = sobremesa.nome;
    sobremesaValor.innerHTML = formataValor;

    total = pratoPrincipal.valor + bebida.valor + sobremesa.valor;
    formataValor = "R$ " + total.toFixed(2);
    formataValor = formataValor.replace('.',',');

    totalValor.innerHTML = formataValor;

    let 
    string = "Olá, gostaria de fazer o pedido:\n" +
    "- Prato: " + pratoPrincipal.nome + "\n"+
    "- Bebida: " + bebida.nome + "\n"+
    "- Sobremesa: " + sobremesa.nome + "\n"+
    "Total: " + formataValor + "\n"+
    "\n"+
    "Nome: " + nome + "\n" +
    "Endereço: " + endereço + "\n"

    tagA.setAttribute("href","https://wa.me/5562982322614?text=" + encodeURIComponent(string));

    console.log(string);
}

function cancelarPopup(){
    let navbar = document.querySelector(".navbar");
    let conteudo = document.querySelector(".conteudo");
    let footer = document.querySelector(".footer");
    let popup = document.querySelector(".popup");
    let total = 0.0;

    navbar.setAttribute("class","navbar");
    conteudo.setAttribute("class","conteudo");
    footer.setAttribute("class","footer");
    popup.setAttribute("class","displayNone");
}
