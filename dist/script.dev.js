"use strict";

function clicoubotao() {
  var input_nome = document.querySelector('#nome');
  var input_idade = document.querySelector('#idade');

  if (input_nome.value == 0 || input_idade.value == 0) {
    alert('Campo vazio!');
  } else {
    var text = document.createTextNode("Ol\xE1 ".concat(input_nome.value, ", que legal voc\xEA por aqui!! Ao longo dos seus ").concat(input_idade.value, " anos voc\xEA j\xE1 se deu conta que a Matem\xE1tica \xE9 a codifica\xE7\xE3o da realidade? Olhe a sua volta, ela est\xE1 em tudo."));
    var h1 = document.querySelector('#bemvindo');
    h1.innerHTML = "";
    h1.appendChild(text);
  }
}
//# sourceMappingURL=script.dev.js.map
