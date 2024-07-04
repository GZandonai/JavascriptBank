export class  SistemaDeAutenticacao {
    
    static login (funcionario, senha){
        return funcionario.senha == senha
    }
} 