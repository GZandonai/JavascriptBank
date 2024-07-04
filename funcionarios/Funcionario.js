export class Funcionario {
    constructor(nome, salario, cpf){

        this.nome = nome
        this.salario = salario
        this.cpf = cpf

        this.bonificacao = 1
        this._senha
    }

    autenticar(senha){
        return senha == this._senha
    }

    cadastrarSenha(senha){
        this._senha = senha
    }

}