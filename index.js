import { Diretor } from "./funcionarios/Diretor.js"
import { Gerente } from "./funcionarios/Gerente.js"

const diretor = new Diretor(Patricia, 10.000, 765432)
const gerente = new Gerente(Beto, 5.000, 1234567)

const estaLogado = SistemaDeAutenticacao.login(diretor, "123")

console.log(estaLogado)

