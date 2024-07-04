export class Conta {

    constructor(saldoInicial, cliente, agencia) {

        if (this.constructor == Conta) {
            throw new Error("You can't do this because Conta is a abstract class ")
        }

        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }



    // aplicando segurança nos dados              
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this.cliente
    }

    get saldo() {
        return this._saldo
    }

    sacar(){
        throw new Error ("O metodo sacar da classe conta eh abstrato")
    }

    logicaSacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this._saldo = this._saldo + valor
        return valor
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}