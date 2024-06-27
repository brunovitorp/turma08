// let num1 = Number(prompt("informe um número:"));
// let num2 = Number(prompt("Informe o segundo número: "));

// function calculaMaior(num1, num2) {

//   if (num1 > num2) {
//     alert(`o número ${num1} é o maior`);

//   } else {
//     alert(`o número ${num2} é o maior`);
//   }
// }
// calculaMaior(num1, num2);

// const nota1 = Number(prompt("Informe uma nota: "));
// const nota2 = Number(prompt("Informe a segunda nota: "));

// function calculaNota(nota1, nota2) {
//   if (!isNaN(nota1) && !isNaN(nota2)) {
//     if (nota1 >= 6) {
//       alert("Aluno aprovado na primeira prova!");
//     } else {
//       alert("Aluno reprovado na primeira prova!");
//     }
//     if (nota2 >= 6) {
//       alert("Aluno aprovado na segunda prova!");
//     } else {
//       alert("Aluno reprovado na segunda prova!");
//     }
//   }
// }
// calculaNota(nota1, nota2);

// // Faça um programa que solicite ao usuário o tipo de ingresso que ele deseja (digitando 1
// para VIP e 2 para standard), bem como se ele deseja o combo de pipoca (opção 1) ou não (opção 2).
//  O programa deverá imprimir uma mensagem para o usuário de acordo com as seguintes regras:
// // Ingresso VIP sem pipoca: “Valor: 80 reais”;
// // Ingresso VIP com pipoca: : “Valor: 110 reais”;
// // Ingresso standard sem pipoca: “Valor: 40 reais”;
// // Ingresso standard com pipoca: “Valor: 70 reais”;

// let tipoIngresso = prompt(
//   "Qual tipo de inresso você deseja?\n 1 - VIP \n 2 - Standard"
// );
// let incluiCombo = prompt(
//   "Deseja obter o combo com pipoca?\n 1 - SIM \n 2 - NÃO"
// );

// function ingresso(tipoIngresso, incluiCombo) {
//   if (tipoIngresso == 1) {
//     if (incluiCombo == 1) {
//       alert("Valor R$110,00");
//     } else {
//       alert("Valor R$80,00");
//     }
//   } else {
//     if (incluiCombo == 1) {
//       alert("Valor R$70,00");
//     } else {
//       alert("Valor R$40,00");
//     }
//   }
// }

// ingresso(tipoIngresso, incluiCombo);

// let num = Number(prompt("Informe um número:"));
// let resultado = num % 2;
// switch (resultado) {
//   case 0:
//     alert("É par!");
//     break;
//   default:
//     alert("É impar!");
// }

// alert("Olá, me chamo Bruno e estou aqui para lhe ajudar! ");
// let mensagemInicial = Number(prompt(
//   "O que você deseja realizar hoje? \n1- Ajuda nos exercícios \n2- Pedir um tempo para respirar \n3- Ir para casa \n4- Sair"
// ));

// switch(mensagemInicial){
//   case 1:
//     alert('Ok, estou indo!')
//     let op1 = prompt('Poderia adiantar qual o tipo de ajuda?')
//     let resp1 = prompt(`Tudo bem! Confirmando sua solicitação...\nSua mensagem..."${op1}" \nCONFIRMA? \n1- SIM \n2- NÃO`)
//     if (resp1 == 1){
//       alert('Obrigado! Já chego!!!')
//     }else{
//       alert('Tudo bem! Vou mesmo assim!')
//     }
//     break;
//   case 2:
//     alert('Vou pensar um pouco')
//     break;
//   case 3:
//     alert('Agora não é a hora. Vamos conversar?')
//     break;
//   case 4:
//     alert('Saindo...')
//     break;
//   default:
//     alert('Opção inválida!')
// }

// Escreva um programa que leia o número de horas trabalhadas em um mês,
// o salário por hora e escreva o salário total do funcionário,
// que deverá ser acrescido das horas extras,
// caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).

// let horasTrabalhadasMes;
// let salarioBase;
// let salarioHora;
// let salarioTotal;
// let horaExtra;

// horasTrabalhadasMes = Number(prompt("Informe as horas trabalhadas no mês:"));
// salarioBase = Number(prompt("Informe o salário base:"));
// salarioHora = salarioBase / 40;

// if (horasTrabalhadasMes <= 40) {
//   salarioTotal = salarioBase;
//   alert(salarioTotal);
// } else {
//   horaExtra = (horasTrabalhadasMes - 40) * (salarioHora * 1.5);
//   salarioTotal = salarioBase + horaExtra;
//   alert(salarioTotal.toFixed(2));
// }

// let num1;
// let num2;
// let operacao;
// let resultado;

// num1 = Number(prompt("Informe um número: "));
// num2 = Number(prompt("Informe um segundo número: "));
// operacao = Number(
//   prompt("Informe o tipo de operação \n1 - SOMA \n2 - SUBTRAÇÃO: ")
// );

// function calcular(num1, num2, operacao) {
//   switch (operacao) {
//     case 1:
//       resultado = num1 + num2;
//       break;
//     case 2:
//       resultado = num1 - num2;
//       break;
//     default:
//       alert("Opção Inválida!");
//       return;
//   }
//   alert(resultado);
// }
// calcular(num1, num2, operacao);

// let contador = 1;

// while (contador <= 10){
// 	alert("contador = " + contador);
// 	contador++;
// }

// let contador = 1;

// do {
//   alert("O contador é: " + contador);
//   contador++;
// } while (contador <= 5);

// for (let contador = 0; contador <= 10; contador++) {
// 	alert("contador = " + contador);
// }

// let resposta;
// let tentativas = 0;

// while (tentativas < 3 && resposta !== "sim") {
//   resposta = prompt("Você deseja continuar? (Digite SIM para continuar)");
//   tentativas++;
// }

// if (resposta === "sim") {
//   alert("Usuário decidiu continuar.");
// } else {
//   alert("Usuário não quis continuar após 3 tentativas.");
// }

// let senha;
// let senhaCorreta = "1234";
// let tentativas = 0;

// do {
//   senha = prompt("Digite sua senha:");
//   tentativas++;
// } while (senha !== senhaCorreta && tentativas < 3);

// if (senha === senhaCorreta) {
//   aleet("Senha correta! Acesso permitido.");
// } else {
//   alert("Senha incorreta após 3 tentativas.");
// }
// let valorConvertido;
// let cotacaoAtual = Number(prompt("Informe a cotação do Dólar:"));

// let carteira = Number(prompt("Informe o valor que você tem: "));

// let opcao = (
//   Number(prompt("Informe o tipo da conversão: \n1 - REAL -> DOLAR \n2 - DOLAR -> REAL")
// ));

// if (opcao == 2) {
//   valorConvertido = cotacaoAtual * carteira;
// } else {
//   valorConvertido = carteira / cotacaoAtual;
// }
// alert(valorConvertido);


// let numero = Number(prompt('Informar um número: '))

// if (numero % 2 == 0){

//     alert('Par')

// }else{
//     alert('Ímpar')
// }

const prompt = require('prompt-sync')();

let a = prompt('Informe um número: ')
console.log(a)
//qualquer coisa



// qualquer coisa em qualquer linha


