# Aula Design Patterns

## Por que utilizar Design Patterns

- Soluções para problemas recorrentes
- Simplicidade para resolver problemas
- Melhor comunicação com outros devs
- Melhor entendimento de código
- Exigência de mercado

## Categorias que compoem os Design Patterns

- Criacional
  - Trabalha com a criação de objetos flexíveis e reutilizáveis
- Estrutural
  - Como trabalhar com objetos e classes em estruturas mais complexas e ainda flexíveis e utilizáveis
    - MVC por exemplo
- Comportamental
  - Trabalham com a comunicação eficiente e designam as responsabilidades comuns aos objetos
    - Observer

## Cuidados ao trabalhar com Design Patterns

- Não forçar o uso de um padrão a algo que talvez não seja aplicável
- Utilizar para o objetivo na qual ele é proposto
- Design Patterns são como remédios, servem a um problema
- Não tentar utilizar um padrão no lugar do outro, são objetivos diferentes
- Saber quando algum padrão deve/pode ser utilizado
- Entender a essência dos padrões, entender o intuito daquele padrão

# Padrões Criacionais

## Factory Method

### O problema:

- Imagine que você tem uma aplicação onde existem classes com metodos que façam a conexão com algum banco de dados, podendo ser MYSQL, Mongo, SQLite e etc. Em determinados momentos, você precisará usar algum metodo diferente.

### A solução

- São metodos intermediários responsáveis por criar objetos (produtos) específicos de acordo com alguma necessidade, objetos que geralmente são estendidos de uma classe base mas que possuem comportamentos particulares. No exemplo acima, o factory fica responsável por devolver uma instância específica de alguma das conexões com algum banco.


## Abstract Factory Method

### O problema: 

- Semelhante ao Factory, o Abstract Factory Method visa abstrair os metodos para que se encaixem em determinados contextos semelhantes.


## Builder method

### O problema

- O Builder visa acabar com um problema de código chamado Long Parameter List que é quanto uma classe possui em seu construtor inúmeros parâmetros que as vezes podem ser inutilizados, desnecessários.

### A solução

- Quebra do processo de criação do objeto em etapas, imagina o builder como um processo de montagem de carros, fabricação de carros. Se precisa de motor, a classe Motor estará pronta, se precisar de caçamba, uma classe Caçamba estará pronta. Quem guiará a construção será o Diretor, que recebe quais métodos ele precisa e dispara a sequencia para os builders que irão construir o objeto. O diretor apenas vistoria, ele não constrói o objeto, só dita as etapas e o que deve ser executado. E possui um método reset() que reseta tudo.

# Padrões Estruturais

## Adapter method 

### O problema

- Imagina que você desenvolveu uma classe responsável por pagamentos, todos os métodos foram pensados para servir o Paypal, agora veio uma demanda para que seja incluído como método de pagamento outro serviço, sem precisar reescrever os métodos do paypal.

### A solução

- O Adaptar busca converter a interface de um objeto de maneira que outro objeto possa compreender as informações.

## Bridge method

### O Problema

- Imagina que você precisa desenvolver um sistema de transmissão de lives pela internet, mas você precisa conectar em diversas plataformars simultaneamente. Todas elas trabalham com os mesmos padrões mas cada uma possui especificidades.

### A solução

- O Bridge é um adapter pensado antes, abstração é fundamental.

# Padrões Comportamentais

## Chain Of Responsability method

### O Problema

- Imagina um processo que envolva vários processos (Elos da corrente), ex validação de login, email, senha de um usuário. 

### A solução

- Chain of Responsability se baseia na ideia de transformar comportamentos em objetos independentes denominados de handlers. (Princípio de DP comportamentais) Assim as verificações (Validações) são extraídas para a sua própria classe com um único método que faz a checagem, caso uma verificação passe, ela chama a próxima e assim por diante, ou quebra.