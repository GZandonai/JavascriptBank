export class Conta {

    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    

    }
    
    // aplicando segurança nos dados              
    set cliente (novoValor){                    
        if (novoValor instanceof Cliente){     
            this._cliente = novoValor           
        }
    }

    get cliente (){                            
        return this.cliente
    }

    get saldo (){                              
        return this._saldo
    }



    sacar(valor) {
    
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }
    }    

    depositar(valor) {
        if (valor >= 100) {
            return
        }
        this._saldo = this._saldo + valor
        return valor
    }

    transferir(valor, conta){      
        let valorSacado = this.sacar(valor)  // Sacando o valor da minha conta  e armezanando na váriavel valorSacado
        conta.depositar(valorSacado)         // depositar o valor sacado em outra conta

    }


}