document.getElementById("textout").value = "";
document.getElementById("textin").value = "";
var btnEncriptar = document.getElementById("btnencriptar");
var btnDesencriptar = document.getElementById("btndesencriptar");
var btnCopiar = document.getElementById("btncopiar");
var textareain = document.getElementById("textin");
var textareaout = document.getElementById("textout");
textareaout.disabled = true;
//alerta
var alert = document.getElementById("alert");
// Deshabilitar botones
btnEncriptar.disabled = true;
btnDesencriptar.disabled = true;
btnCopiar.disabled = true;
// Función que habilita el botón de encriptar/desencriptar si existe contenido en textarea
textareain.onfocus = function () {
  // Boton encriptar
  btnEncriptar.disabled = false;
  btnEncriptar.classList.remove("buttons-disable");
  btnEncriptar.classList.add("buttons-style");
  // Boton desencriptar
  btnDesencriptar.disabled = false;
  btnDesencriptar.classList.remove("buttons-disable");
  btnDesencriptar.classList.add("buttons-style");
};
// Función que encripta el texto
function encriptarTexto() {
  var text = document.getElementById("textin").value;
  text = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.getElementById("textout").value = text;
}
/*
le asignamos la función al botón encriptar y verificamos minúsculas y acentos,
en caso de que existan palabras en mayúsculas y palabras con acentos, 
entonces la alerta empezara a moverse de un lado para otro.
*/
btnEncriptar.onclick = function () {
  if (document.getElementById("textin").value == "") {
    alert.classList.add("shaking-error");
    document.getElementById("alert").textContent =
      "El campo no puede estar vació";
  } else {
    alert.classList.remove("shaking-error");
    if (document.getElementById("textin").value.match(/^[a-z ]*$/)) {
      encriptarTexto();
      alert.classList.remove("shaking-error");
      document.getElementById("textin").value = "";
      btnCopiar.disabled = false;
      btnCopiar.classList.remove("buttons-disable");
      btnCopiar.classList.add("buttons-style");
      document.getElementById("alert").textContent =
        "Solo letras minúsculas y sin acentos";
    } else {
      alert.classList.add("shaking-error");
    }
  }
};
//Función para copiar el texto encriptado
function copiarTexto() {
  navigator.clipboard.writeText(document.getElementById("textout").value);
  document.getElementById("textout").value = "";
}
// Le asignamos la función al botón copiar
document.querySelector("#btncopiar").addEventListener("click", copiarTexto);
//Función para desencriptar el texto
function desencriptarTexto() {
  var text = document.getElementById("textin").value;
  text = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.getElementById("textout").value = text;
}
btnDesencriptar.onclick = function () {
  if (document.getElementById("textin").value == "") {
    alert.classList.add("shaking-error");
    document.getElementById("alert").textContent =
      "El campo no puede estar vació";
  } else {
    if (document.getElementById("textin").value.match(/^[a-z ]*$/)) {
      desencriptarTexto();
      alert.classList.remove("shaking-error");
      document.getElementById("textin").value = "";
      btnCopiar.disabled = false;
      btnCopiar.classList.remove("buttons-disable");
      btnCopiar.classList.add("buttons-style");
      document.getElementById("alert").textContent =
        "Solo letras minúsculas y sin acentos";
    } else {
      alert.classList.add("shaking-error");
    }
  }
};
