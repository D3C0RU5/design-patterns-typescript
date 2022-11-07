Link: https://refactoring.guru/pt-br/design-patterns/prototype

O Prototype é um padrão de projeto criacional que permite copiar objetos existentes sem fazer seu código ficar dependente de suas classes.

# Passos

1. Crie uma interface protótipo e declare o método clonar nela. Ou apenas adicione o método para todas as classes de uma hierarquia de classes existente, se você tiver uma.

2. Uma classe protótipo deve definir o construtor alternativo que aceita um objeto daquela classe como um argumento. O construtor deve copiar os valores de todos os campos definidos na classe do objeto passado para a nova instância recém criada. Se você está mudando uma subclasse, você deve chamar o construtor da classe pai para permitir que a superclasse lide com a clonagem de seus campos privados.

3. O método de clonagem geralmente consiste em apenas uma linha: executando um operador new com a versão protótipo do construtor. Observe que toda classe deve explicitamente sobrescrever o método de clonagem and usar sua própria classe junto com o operador new. Do contrário, o método de clonagem pode produzir um objeto da classe superior.

4. Opcionalmente, crie um registro protótipo centralizado para armazenar um catálogo de protótipos usados com frequência.

# Aplicalibilidade
- Utilize o padrão Prototype quando seu código não deve depender de classes concretas de objetos que você precisa copiar.
- Utilize o padrão quando você precisa reduzir o número de subclasses que somente diferem na forma que inicializam seus respectivos objetos. Alguém pode ter criado essas subclasses para ser capaz de criar objetos com uma configuração específica.