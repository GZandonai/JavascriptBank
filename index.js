import { ContaCorrente } from "./contas/ContaCorrente.js"
import { Cliente } from "./contas/Cliente.js"
import { ContaPoupanca } from "./contas/ContaPoupança.js";
import { Conta } from "./contas/Conta.js";


//Contas
const cliente1 = new Cliente("Gigio", 6666666)

const cliente2 = new Cliente("Leo", 99999999)

//Contas Correntes e poupancas
const contaSalario = new ContaCorrente(cliente1, 1001)
const contaPoupanca1 = new ContaPoupanca(0, cliente1, 1001)
const  contaSalario1 = new ContaPoupanca(0, cliente1, 1001)

contaSalario1.depositar(100)
contaSalario1.sacar(50)

console.log(contaSalario1)
