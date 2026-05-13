#language: pt

Funcionalidade: Logins válidos e inválidos
    Eu, como usuário do sistema,
    Quero testar diferentes cenários de login,
    Para garantir que o sistema autentique corretamente os usuário.

    Contexto: Estar na página de login do saucedemo
        Dado que eu estou na página de login

    Cenário: Login válido com usuário padrão
        Quando eu digito o usuário padrão e a senha correta
        E clico no botão Login
        Então eu devo ser redirecionado para a página de Produtos

    Cenário: Usuário inválido