function selectPratoPrincipal(num){
    let a = document.querySelector(".pratoPrincipal li:nth-child("+ num +") .prato");
    limpar("pratoPrincipal");
    a.setAttribute("class","prato active");
}
function selectBebida(num){
    let a = document.querySelector(".bebida li:nth-child("+ num +") .prato");
    limpar("bebida");
    a.setAttribute("class","prato active");
}
function selectSobremesa(num){
    let a = document.querySelector(".sobremesa li:nth-child("+ num +") .prato");
    limpar("sobremesa");
    a.setAttribute("class","prato active");
}

function limpar(classe){
    let todos = document.querySelector("." + classe + " .active");
    if(todos !== null){
        todos.setAttribute("class","prato");
    }
}