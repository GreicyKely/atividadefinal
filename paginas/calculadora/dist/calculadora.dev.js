"use strict";

//declaramos as variáveis
var vaiMudar = false,
    cont,
    valor,
    historico = Array(),
    memoria = Array(),
    fe = false,
    hyp = false,
    deg = 'deg'; // vaiMudar  será true quando numero digitado mudar voltar para zero, historico salvará 
//o histórico e memória salva memoria
//faremos a função de números usando jeyquerry, o clique vai ser da div com classe numeros, quandoreceber o clck vai executar função.

function atualiza() {
  $(this).css('background-color', 'rgb(192,192,192)');
  valor = $('#valor').text();
  valor = valor.replace(',', '.'); // troca a virgula por ponto, na hora de exibir mostra a virgula mas executa com ponto

  setTimeout(function () {
    $('col').css('background-color', 'rgb(240,240,240)');
    $('.numeros').css('background-color', 'rgb(250,250,250)');
  }, 100);
  $('.col').hover(function () {
    $(this).css('background-color', 'rgb(216,216,216)');
  }, function () {
    $('col').css('background-color', 'rgb(240,240,240)');
  });
  $('.numeros').hover(function () {
    $(this).css('background-color', 'rgb(216,216,216)');
  }, function () {
    $(this).css('background-color', 'rgb(250,250,250)');
  });
}

$(document).on('click', '.numeros', function () {
  atualiza();
  if (valor.length < 15) $('#valor').html(valor == "0" || vaiMudar ? $(this).text().trim() : valor + $(this).text().trim().replace('.', ','));
  vaiMudar = false;
});
$(document).on('click', '.opp', function () {
  atualiza();
  if ($(this).text() == "(") $('#valor2').html($('#valor2').text() + " " + $(this).text() + " ");else $('#valor2').html($('#valor2').text() + $('#valor').text() + " " + $(this).text() + " ");
  vaiMudar = true;
});
$(document).on('click', '#ce', function () {
  atualiza();
  $('#valor').html('0');
});
$(document).on('click', '#c', function () {
  atualiza();
  $('#valor').html('0');
  $('#valor2').html('');
});
$(document).on('click', '#backspace', function () {
  atualiza();
  if (valor != "0" && valor.length != 1) $('#valor').html(valor.substring(0, valor.length - 1).replace('.', ','));else if ($('#valor').text() == "" || $('#valor').text() == "-" || valor.length == 1) $('#valor').html("0");
});
$(document).on('click', '#xquad', function () {
  atualiza();
  xquad = Math.pow(parseFloat(valor), 2);
  $('#valor').html(xquad.toString().replace('.', ','));
});
$(document).on('click', '#elevado', function () {
  atualiza();
  $('#valor2').html($('#valor2').text() + $('#valor').text() + "^");
  vaiMudar = true;
});
$(document).on('click', '#sen', function () {
  atualiza();
  sen = Math.sin(parseFloat(valor));
  $('#valor').html(sen.toString().replace('.', ','));
});
$(document).on('click', '#cos', function () {
  atualiza();
  cos = Math.cos(parseFloat(valor));
  $('#valor').html(cos.toString().replace('.', ','));
});
$(document).on('click', '#tan', function () {
  atualiza();
  tan = Math.tan(parseFloat(valor));
  $('#valor').html(tan.toString().replace('.', ','));
});
$(document).on('click', '#xcubo', function () {
  atualiza();
  xcubo = Math.pow(parseFloat(valor), 3);
  $('#valor').html(xcubo.toString().replace('.', ','));
});
$(document).on('click', '#yroot', function () {
  atualiza();
  $('#valor').html($('#valor').text() + " yroot ");
});
$(document).on('click', '#sen1', function () {
  atualiza();
  sen1 = Math.pow(Math.sin(parseFloat(valor)), -1);
  $('#valor').html(sen1.toString().replace('.', ','));
});
$(document).on('click', '#cos1', function () {
  atualiza();
  cos1 = Math.pow(Math.cos(parseFloat(valor)), -1);
  $('#valor').html(cos1.toString().replace('.', ','));
});
$(document).on('click', '#tan1', function () {
  atualiza();
  tan1 = Math.pow(Math.tan(parseFloat(valor)), -1);
  $('#valor').html(tan1.toString().replace('.', ','));
});
$(document).on('click', '#raiz', function () {
  atualiza();
  raiz = Math.sqrt(parseFloat(valor));
  $('#valor').html(raiz.toString().replace('.', ','));
});
$(document).on('click', '#dezax', function () {
  atualiza();
  dezax = Math.pow(10, parseFloat(valor));
  $('#valor').html(dezax.toString().replace('.', ','));
});
$(document).on('click', '#log', function () {
  atualiza();
  log = Math.log(parseFloat(valor));
  $('#valor').html(log.toString().replace('.', ','));
});
$(document).on('click', '#exp', function () {
  atualiza();
  $('#valor').html($('#valor').text() + ",e+");
});
$(document).on('click', '#mod', function () {
  atualiza();
  $('#valor').html($('#valor').text() + " Mod");
  vaiMudar = true;
});
$(document).on('click', '#umsobre', function () {
  atualiza();
  umsobre = 1 / parseFloat(valor);
  $('#valor').html(umsobre.toString().replace('.', ','));
});
$(document).on('click', '#eax', function () {
  atualiza();
  eax = Math.pow(2.7182818284590452, parseFloat(valor));
  $('#valor').html(eax.toString().replace('.', ','));
});
$(document).on('click', '#ln', function () {
  atualiza();
  ln = Math.log(parseFloat(valor)) / Math.log(2, 718281828459045235360287471352662497757);
  $('#valor').html(ln.toString().replace('.', ','));
});
$(document).on('click', '#dms', function () {
  atualiza();
  dms = valor.split('.')[0] + "," + valor.split('.')[1] * 6;
  $('#valor').html(dms);
});
$(document).on('click', '#deg', function () {
  atualiza();
  valorSplit = valor.split('.');
  if ((valor.split[1] * 16).toString().length > 2) deg = int.parseInt(valorSplit[0]) + 1 + "," + (valorSplit[1] * 1666666666).substring(1, (valorSplit[1] * 1666666666).toString().length);else deg = valorSplit[0] + "," + valorSplit[1] * 1666666666;
  $('#valor').html(deg.toString().replace('.', ','));
});
$(document).on('click', '#pi', function () {
  atualiza();
  $('#valor').html('3,14159265358979323846');
  vaiMudar = true;
});
$(document).on('click', '#fatorial', function () {
  atualiza();
  if (valor < 0) fatorial = "Entrada inválida";else {
    var fatorial = 1;

    for (x = valor; x > 1; x--) {
      fatorial = fatorial * x;
    }
  }
  $('#valor').html(fatorial.toString().replace('.', ','));
});
$(document).on('click', '#maismenos', function () {
  atualiza();
  menos = parseFloat(valor) * -1;
  $('#valor').html(menos.toString().replace('.', ','));
});
$(document).on('click', '#virgula', function () {
  atualiza();
  if (!valor.includes(',')) $('#valor').html(valor + ",");
});
$(document).on('click', '#igual', function () {
  atualiza();
  valor2 = $('#valor2').text();
  valor2 = valor2.replace('×', '*');
  valor2 = valor2.replace('÷', '/');
  conta = "";
  if (valor2.substring(valor2.length - 2, valor2.length - 1) == ")") conta = valor2;else conta = valor2 + $('#valor').text();
  resultado = 0;
  conta = conta.replace(',', '.');

  if (conta.includes('^')) {
    conta = conta.split('^');
    aux = 0;

    for (i = 0; i < conta.length; i++) {
      if (i == 0) resultado = eval(conta[0]);else resultado = Math.pow(resultado, eval(conta[i]));
    }
  } else if (conta.includes('Mod')) {
    conta = conta.split('Mod');
    aux = 0;

    for (i = 0; i < conta.length; i++) {
      if (i == 0) resultado = eval(conta[0]);else resultado = resultado % eval(conta[i]);
    }
  } else if (conta.includes('yroot')) {
    conta = conta.split('yroot');
    aux = 0;

    for (i = 0; i < conta.length; i++) {
      if (i == 0) resultado = eval(conta[0]);else resultado = Math.pow(resultado, 1 / val(conta[i]));
    }
  } else {
    resultado = eval(conta);
  }

  $('#valo2').html("");
  vaiMudar = true;
  $('#valor').html(resultado.toString().replace('.', ','));
});
//# sourceMappingURL=calculadora.dev.js.map
