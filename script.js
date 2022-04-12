/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/
var bottonCodificar = document.querySelector(".botao-cripto");
bottonCodificar.addEventListener("click", function(event){
  event.preventDefault();
  
  var areText = document.querySelector(".entrada-texto");
  var texto = areText.value;
  var novoTexto = codificaTexto(texto);
  var msgOut = document.querySelector(".saida-texto");
  msgOut.value = novoTexto;
  var form = document.querySelector(".cript");
  form.reset();

} );

var bottonCopiar = document.querySelector(".botao-copiar");
  bottonCopiar.addEventListener("click", function(event){
    
    var texCopia = document.querySelector(".saida-texto");
    
    navigator.clipboard.writeText(texCopia.value);
    texCopia.value = '';
  })

function codificaTexto(texto){
  var novoTexto = texto;
  var tamanho = texto.length
  novoTexto = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi, "ufat");
  return novoTexto;

}
function includeCode(indice,code, texto){
  var novo = texto.substr(0, indice)+code+texto.substr(indice+1);
  return novo;
}

var bottonDecodificar = document.querySelector(".botao-descripto");
bottonDecodificar.addEventListener("click", function(event){
  
  event.preventDefault();

  var form = document.querySelector(".entrada-texto");
  var texto = form.value;
  var novoTexto = decodificaTexto(texto);
  
  var msgOut= document.querySelector(".saida-texto");
    msgOut.value= novoTexto;
  
    var formr = document.querySelector(".cript");
  formr.reset();


} );

function decodificaTexto(texto){
  var i = 0;
  var novoTexto = '';
  novoTexto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi,"u");
  return novoTexto;
}
