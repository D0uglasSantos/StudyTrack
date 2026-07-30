# Negócio

## Visão do produto

O StudyTrack é um aplicativo mobile para organizar tarefas de estudo. Ele
permite que o usuário registre o que precisa estudar, acompanhe as atividades
pendentes e visualize seu progresso.

O produto é local e individual no MVP. Não há conta de usuário nem
sincronização entre dispositivos.

## Objetivo do MVP

O MVP deve permitir:

- cadastrar uma tarefa de estudo;
- informar título e matéria;
- adicionar uma descrição opcional;
- definir a prioridade;
- listar as tarefas;
- visualizar os detalhes de uma tarefa;
- editar e excluir uma tarefa;
- concluir e reabrir uma tarefa;
- filtrar tarefas por status;
- acompanhar o progresso;
- manter os dados salvos no dispositivo.

## Fora do escopo do MVP

- autenticação e cadastro de usuários;
- backend ou banco de dados online;
- sincronização entre dispositivos;
- notificações;
- gráficos complexos;
- integração com inteligência artificial;
- gerenciamento global de estado sem necessidade comprovada.

## Modelo de tarefa

Cada tarefa possui:

- identificador único;
- título;
- matéria;
- descrição opcional;
- prioridade baixa, média ou alta;
- situação pendente ou concluída;
- data de criação;
- data da última atualização;
- data de conclusão, quando aplicável.

## Regras de negócio

### Criação e edição

- título e matéria são obrigatórios;
- espaços excedentes do título e da matéria devem ser removidos;
- uma nova tarefa começa como pendente;
- as datas são armazenadas no formato ISO 8601;
- alterações atualizam a data de modificação.

### Conclusão

- ao concluir uma tarefa, a data de conclusão deve ser registrada;
- ao reabrir uma tarefa, a data de conclusão deve ser removida.

### Exclusão

- a exclusão de uma tarefa exige confirmação;
- apagar todas as tarefas também exige confirmação.

### Listagem

- tarefas devem ser ordenadas da mais recente para a mais antiga;
- filtros não podem modificar a lista original;
- os filtros iniciais são: todas, pendentes e concluídas;
- futuramente poderá existir filtro por matéria.

### Progresso

- total: quantidade de tarefas cadastradas;
- pendentes: tarefas ainda não concluídas;
- concluídas: tarefas finalizadas;
- percentual: tarefas concluídas divididas pelo total;
- quando não houver tarefas, o percentual deve ser zero.

### Feedback

- o usuário deve receber retorno sobre ações importantes;
- erros de armazenamento devem ser apresentados de forma compreensível;
- carregamento, erro e ausência de dados devem possuir estados visuais.

## Experiência e telas

### Dashboard

Deve apresentar:

- nome e mensagem de apresentação;
- resumo do progresso;
- filtros por status;
- lista de tarefas;
- ação para cadastrar uma tarefa;
- estado vazio quando não houver tarefas.

### Cadastro

Deve conter:

- título;
- matéria;
- descrição;
- prioridade;
- ações de salvar e cancelar;
- mensagens de validação para campos obrigatórios.

### Detalhes

Deve permitir:

- visualizar e editar a tarefa;
- alterar a prioridade;
- concluir ou reabrir;
- excluir com confirmação.

### Configurações

Pode apresentar:

- ação para apagar todas as tarefas;
- versão e informações do aplicativo;
- informações sobre o armazenamento local.

## Diretrizes de interface

A interface deve ser simples, acessível, responsiva e consistente entre iOS e
Android.

Priorizar:

- tipografia legível e contraste adequado;
- espaçamento consistente;
- áreas de toque confortáveis;
- feedback visual de interação;
- mensagens de erro claras;
- estados vazio, de erro e de carregamento.

Evitar:

- excesso de cores;
- animações complexas;
- telas sobrecarregadas;
- componentes muito grandes;
- bibliotecas visuais sem necessidade.
