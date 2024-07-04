import { Diretor } from "./funcionarios/Diretor.js"
import { Gerente } from "./funcionarios/Gerente.js"
import { Cliente  } from "./contas/Cliente.js";
import { SistemaDeAutenticacao } from "./funcionarios/SistemaDeAutenticacao.js";

const diretor = new Diretor("Patricia", 10.000, 765432)
diretor._senha = 123
const gerente = new Gerente("Beto", 5.000, 1234567)
diretor._senha = 321
const gerenteEstaLogado = SistemaDeAutenticacao.login(diretor, 123)
const diretorEstaLogado = SistemaDeAutenticacao.login(gerente, 321)

console.log(gerenteEstaLogado)
