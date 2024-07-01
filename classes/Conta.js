export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia

        if (this.constructor ==  Conta){
            console.log("Nao eh possivel criar esta conta ")
            
        }
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



    sacar(valor) {

        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
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