//criando ojjeto de array//

class Aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }

    notaMaiorQue6() {
        if (this.nota >= 6) {
            console.log(`${this.nome} foi aprovado com nota ${this.nota}`)
        }
        else {
            console.log('Reprovado')
        }
    }
}

const francisco = new Aluno('Francisco', 8)
console.log(francisco)

francisco.notaMaiorQue6()

const marcelo = new Aluno('Marcelo', 5.5)
console.log(marcelo)

marcelo.notaMaiorQue6()