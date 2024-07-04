export class  SistemaDeAutenticacao {
    
    static login (autenticavel, senha){
        return autenticavel.autenticar(senha)
    }
} 