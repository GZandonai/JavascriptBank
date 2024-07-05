import { Diretor } from "./funcionarios/Diretor.js"
import { Gerente } from "./funcionarios/Gerente.js"
import { Cliente  } from "./contas/Cliente.js";
import { SistemaDeAutenticacao } from "./funcionarios/SistemaDeAutenticacao.js";

const diretor = new Diretor("Patricia", 10.000, 765432)
diretor.cadastrarSenha(321)

const gerente = new Gerente("Beto", 5.000, 1234567)
gerente.cadastrarSenha(123)

const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, 123)
const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, 321)

const cliente1 = new Cliente ("Lais", 6666666666, 333)
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente1, 333)

console.log(gerenteEstaLogado)
console.log(diretorEstaLogado)
console.log(clienteEstaLogado)

