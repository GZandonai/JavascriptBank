import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


//Contas
const cliente1 = new Cliente("Gigio", 6666666)

const cliente2 = new Cliente("Leo", 99999999)

//Contas Correntes
const contaCorrente1   = new ContaCorrente(cliente1, 1001)

const contaCorrente2 = new ContaCorrente(cliente2, 2002 )


//Depositos 
//contaCorrente1.#depositar(500)
//contaCorrente1.#depositar(100)

//Transferencias
//contaCorrente1.#transferir(50, contaCorrente2)


console.log(ContaCorrente.numeroDeContas)

console.log(cliente1)
