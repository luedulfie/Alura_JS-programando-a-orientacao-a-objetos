import {Cliente} from "./Cliente.js"
export class ContaCorrente {
    
    static numeroDeContas = 0
    agencia
    _cliente

    set cliente(novoValor) { //acessor set - atribuir valor - não precisa chamar o parametro
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    } 

    get cliente() {
        return this._cliente
    }

    //#salvo=0 // o uso da # para variavel privada ainda não foi aprovada https://github.com/tc39/proposal-class-fields#private-fields
    _saldo=0 // ao usar _ significa que a variavel será privada (boa pratica para visualização)

    get saldo() {
        return this._saldo
    }

    constructor(agencia, cliente) {
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numeroDeContas += 1
    }

    //método
    sacar(valor) { //valor é o parametro que vai receber
        //definição do escopo
        if (this._saldo >= valor) { //this significa chamar o proprio atributo
            this._saldo -= valor // -= significa subtrair do valor atual, e não substituir 
            return valor // retona o valor retirado do saldo
        }
    }

    //técnica early return
    //"retorno cedo" após identificado a condicional do que não "quero"
    //se não passado pelo if quer dizer que a função está correta
    depositar(valor) { //valor é o parametro que vai receber
        //definição do escopo
        if(valor <= 0 ) { //this significa chamar o proprio atributo
            return // retona o valor retirado do saldo
            //após o return nenhuma função após é executada
        }
        this._saldo += valor // -= significa subtrair do valor atual, e não substituir 
    }

    //método
    // depositar(valor) {
    //     if(valor > 0 ) {
    //         this._saldo += valor
    //     }
    // }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor) //this = quero chamar um metodo da minha classe
        conta.depositar(valorSacado)
    }
}