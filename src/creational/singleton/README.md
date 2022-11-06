Link: https://refactoring.guru/pt-br/design-patterns/singleton

O Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

# Passos

1. Adicione um campo privado estático na classe para o armazenamento da instância singleton.

2. Declare um método de criação público estático para obter a instância singleton.

3. Implemente a “inicialização preguiçosa” dentro do método estático. Ela deve criar um novo objeto na sua primeira chamada e colocá-lo no campo estático. O método deve sempre retornar aquela instância em todas as chamadas subsequentes.

4. Faça o construtor da classe ser privado. O método estático da classe vai ainda ser capaz de chamar o construtor, mas não os demais objetos.

5. Vá para o código cliente e substitua todas as chamadas diretas para o construtor do singleton com chamadas para seu método de criação estático.

# Aplicalibilidade
- Quando uma classe precisa ter somente uma instância em todo o seu programa.
- Quando está usando variáveis globais para manter partes importantes do programa, como variáveis de configuração que são usadas por toda a aplicação.