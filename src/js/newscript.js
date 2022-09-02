let botaoCriptografar = document.querySelector("[data-botao-cript]");
let botaoDescriptografar = document.querySelector("[data-botao-descript]");
let botaoCopiar = document.querySelector("[data-botao-copiar]");
let areaMsg = document.querySelector("[data-entrada-texto]");
let areaMsgCript = document.querySelector("[data-saida-texto]");
let formCript = document.querySelector('[data-form-criptografar]');

botaoCriptografar.addEventListener('click', (evento)=> {
    evento.preventDefault();

    let texto = areaMsg.value;
    
    let novoTextoCriptografar = criptografarTexto(texto);
    areaMsgCript.value = novoTextoCriptografar;

    formCript.reset();
})

botaoDescriptografar.addEventListener('click', (evento) => {
    evento.preventDefault();

    let texto = areaMsg.value;
    let novoTextoDescriptografar = descriptografarTexto(texto);

    areaMsgCript.value = novoTextoDescriptografar;

    formCript.reset();
})

botaoCopiar.addEventListener('click', ()=> {
    navigator.clipboard.writeText(areaMsgCript.value); // Clipboard API https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
    areaMsgCript.value = '';
})

function criptografarTexto(texto) {
    let novoTextoCriptografar = texto;
    novoTextoCriptografar = texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
    return novoTextoCriptografar;
}

function descriptografarTexto(texto) {
    let novoTextoDescriptografar = texto;
    novoTextoDescriptografar = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi,"u");
    
    return novoTextoDescriptografar;
}