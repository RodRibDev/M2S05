# Mini Projeto - Lista de Interesses
Este projeto consiste em uma aplicação simples para gerenciar uma lista de interesses utilizando JavaScript e localStorage. Além disso, o projeto também busca e exibe a última notícia disponível utilizando a API pública do IBGE. A seguir, são detalhadas as principais funcionalidades e aspectos técnicos do código:

# Funcionalidades
`Adicionar Interesse`: Permite ao usuário adicionar novos interesses através de um campo de entrada.

`Armazenamento Local`: Utiliza o localStorage do navegador para persistir os interesses adicionados mesmo após o fechamento da página.

`Limpar Lista`: Permite limpar todos os interesses da lista, tanto na interface quanto no armazenamento local.

`Busca e Exibição de Notícia`: Utiliza a API do IBGE para buscar a última notícia disponível do tipo "release".
A notícia é exibida dinamicamente na página principal como uma notícia patrocinada. A última notícia é buscada via API e exibida como notícia patrocinada na página principal.
# Detalhes Técnicos
`HTML e CSS`: Estrutura básica e estilização simples para uma melhor experiência de usuário.

`JavaScript`: Manipulação do DOM para adicionar, excluir e limpar interesses.

`localStorage`: Armazenamento persistente dos dados de interesses no navegador do usuário.

`EventListeners`: Utilização de eventos para capturar ações do usuário, como cliques em botões.

`Fetch API`: Utilização do fetch para realizar requisições HTTP e buscar a última notícia disponível da API pública do IBGE.
# Como Executar
Clone o repositório.
Abra o arquivo index.html em seu navegador.
Interaja com a aplicação para adicionar, excluir ou limpar interesses.
Este projeto foi desenvolvido como parte de um exercício prático para demonstrar o uso básico de JavaScript com localStorage para manipulação de dados simples na web e também como utilizar APIs para inserir dados via manipulação de DOM.

# Próximos Passos:
* Melhorar o design e a usabilidade da interface.
* Implementar mais funcionalidades de interação com os interesses, como exclusão e edição.
* Adicionar suporte para mais tipos de notícias e personalização da exibição das notícias.