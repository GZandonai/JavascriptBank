import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0

    agencia
    cliente  

    // aplicando segurança nos dados              
    set cliente (novoValor){                    // atribui para o cliente um novo valor
        if (novoValor instanceof Cliente){      // se esse novo valor for uma instancia da classe Cliente
            this.cliente = novoValor           // então esse cliente tem um novo valor
        }
    }

    get cliente (){                             // pega o cliente e retorna os dados do cliente
        return this.cliente
    }


    #saldo = 0
    get saldo (){                               // pega o saldo e retorna os dados do saldo
        return this.#saldo
    }
    
   
    constructor(cliente, agencia){
        this.cliente = cliente
        this.agencia = agencia
        ContaCorrente.numeroDeContas += 1   //Acessa o atributo statico da classe
    }

    // Metodos

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor
            return valor
        }
    }       //este valor quando eu deposito um valor, o valor do meu saldo tem que ser o MEU SALDO + O VALOR DEPOSITADO

    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this.#saldo = this.#saldo + valor
        return valor
    }

    transferir(valor, conta){      
        let valorSacado = this.sacar(valor)  // Sacando o valor da minha conta  e armezanando na váriavel valorSacado
        conta.depositar(valorSacado)         // depositar o valor sacado em outra conta

    }

    

}