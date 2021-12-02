Eu não sou muito de fazer um README, então eu sinto muito se eu fiz algo de errado.

INSTALAÇÃO:

1. utilize o "yarn add" no terminal
2. utilize o nodemon ou o "node server" para ativar a aplicação.

FUNCIONAMENTO:

o método GET do "/:id" seleciona o 'id' e 'name' ainda não encriptografada, mostrando um JSON dos dois dados.

o método POST faz a requisição de dados para o usuário e pede pelo id e nome.

O método PUT do "encripts/:id" pega o name através do id e encriptografa utilizando o encrypt do próprio postgreSQL. Se o nome não for colocado, ele vai mandar uma mensagem de erro.

O método PUT do "decripts/:id" faz mesma coisa que o "encripts" só que descriptografa utilizando decrypt, também do próprio postgreSQL. Se o id não for colocado, ele vai mandar uma mensagem de erro.

