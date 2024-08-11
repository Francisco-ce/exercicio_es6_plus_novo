"use strict";

//criando objeto de array//

var aluno = ['Francisco'];
var alunosNotas = aluno.map(function (item) {
  item = {
    nome: item,
    nota: 6
  };
  return item;
});
alunosNotas.push({
  nome: 'Jose',
  nota: 2
});
alunosNotas.push({
  nome: 'Joao',
  nota: 5.5
});
alunosNotas.push({
  nome: 'Lucas',
  nota: 7
});
alunosNotas.push({
  nome: 'Madalena',
  nota: 8
});
alunosNotas.push({
  nome: 'Pedro',
  nota: 7
});
console.log(alunosNotas);
function maiorQueSeis(item) {
  return item.nota >= 6;
}
var alunosMaiorQueSeis = alunosNotas.filter(maiorQueSeis);
console.log(alunosMaiorQueSeis);