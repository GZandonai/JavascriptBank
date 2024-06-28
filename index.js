import { ContaCorrente } from "./classes/ContaCorrente.js"
import { Cliente } from "./classes/Cliente.js"
import { ContaPoupanca } from "./classes/ContaPoupança.js";
import { Conta } from "./classes/Conta.js";


//Contas
const cliente1 = new Cliente("Gigio", 6666666)

const cliente2 = new Cliente("Leo", 99999999)

//Contas Correntes
const contaCorrente1 = new ContaCorrente(cliente1,1001)
const contaPoupanca1 = new ContaPoupanca(0, cliente1, 1001)

console.log(contaCorrente1)