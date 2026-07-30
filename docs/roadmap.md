# Roadmap

O desenvolvimento acontece em etapas. Uma etapa não deve antecipar
funcionalidades das seguintes.

## 1. Configuração e limpeza

- configurar o ambiente;
- criar e executar o projeto Expo;
- validar Fast Refresh, TypeScript e lint;
- remover exemplos e recursos não utilizados do template;
- organizar a documentação.

## 2. Dashboard estático

- criar título e mensagem de apresentação;
- criar resumo de progresso;
- usar tarefas temporárias;
- renderizar a lista com `FlatList`;
- criar `TaskCard`, `ProgressCard` e `EmptyState`;
- testar a interface no iOS e Android.

Nesta etapa, não há ações reais nem persistência.

## 3. Navegação

- criar as rotas de cadastro, detalhes e configurações;
- adicionar as ações de navegação ao Dashboard;
- testar cada fluxo sem implementar os formulários.

## 4. Cadastro em memória

- criar o `TaskForm`;
- validar título e matéria;
- cadastrar tarefas em memória;
- retornar ao Dashboard após salvar.

## 5. Ações das tarefas

- concluir e reabrir;
- visualizar e editar;
- excluir com confirmação.

## 6. Persistência local

- instalar o AsyncStorage;
- criar o serviço de armazenamento;
- carregar e salvar tarefas;
- tratar carregamento e erros;
- validar os dados após fechar e reabrir o aplicativo.

## 7. Filtros e progresso

- filtrar tarefas por status;
- ordenar tarefas;
- calcular totais e percentual;
- atualizar o resumo a partir dos dados reais.

## 8. Refatoração

- revisar responsabilidades;
- extrair hooks e funções auxiliares quando necessário;
- remover duplicações;
- revisar acessibilidade;
- corrigir erros de TypeScript e lint.

## 9. Validação do MVP

O MVP estará concluído quando:

- abrir sem erros no iOS e Android;
- permitir criar, editar, concluir, reabrir e excluir tarefas;
- preservar os dados após reiniciar o aplicativo;
- validar os campos obrigatórios;
- filtrar e ordenar corretamente;
- calcular o progresso corretamente;
- tratar lista vazia, carregamento e erro;
- não possuir erros de TypeScript ou lint;
- manter a documentação atualizada.

## Evoluções futuras

Somente depois do MVP:

- autenticação;
- Supabase e sincronização em nuvem;
- matérias e categorias personalizadas;
- calendário e metas de estudo;
- cronômetro Pomodoro;
- notificações locais;
- modo escuro;
- gráficos e estatísticas;
- sequência de dias estudados;
- compartilhamento de progresso.
