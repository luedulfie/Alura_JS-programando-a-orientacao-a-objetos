//classe é meu molde - definição do que quero ter
 export class Cliente { //exportação da classe
    nome
    _cpf

    get cpf() {
        return this._cpf
    }

    constructor(nome, cpf){
        this.nome = nome
        this._cpf = cpf
    }
}