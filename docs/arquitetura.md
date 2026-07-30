# Arquitetura

## Contexto

O StudyTrack é uma aplicação React Native criada com Expo. O Expo Router
gerencia a navegação por arquivos e o TypeScript é usado em modo estrito.

O MVP funciona localmente e não depende de backend. Quando a persistência for
implementada, o AsyncStorage será o limite externo da aplicação.

## Princípios

- introduzir complexidade somente quando a etapa atual exigir;
- separar apresentação, regras de negócio e armazenamento;
- manter componentes pequenos e reutilizáveis;
- evitar regras de negócio dentro de componentes puramente visuais;
- representar o domínio com tipos explícitos;
- não adicionar gerenciamento global de estado antes de haver necessidade.

## Camadas

### Rotas

Arquivos em `src/app/` representam as telas e coordenam navegação, estado e
composição da interface.

Rotas planejadas:

| Rota          | Responsabilidade                    |
| ------------- | ----------------------------------- |
| `/`           | Dashboard e lista de tarefas        |
| `/tasks/new`  | Cadastro de tarefa                  |
| `/tasks/[id]` | Visualização e edição de uma tarefa |
| `/settings`   | Configurações do aplicativo         |

### Componentes

Arquivos em `src/components/` recebem dados e callbacks por propriedades.

- `TaskCard`: resumo e ações principais de uma tarefa;
- `ProgressCard`: totais e percentual de conclusão;
- `EmptyState`: orientação quando a lista estiver vazia;
- `TaskForm` (planejado): formulário compartilhado entre cadastro e edição;
- `FilterButton` (planejado): seleção do filtro do Dashboard.

### Domínio

Os tipos ficam em `src/types/`. O modelo principal é:

```ts
export type TaskPriority = "low" | "medium" | "high";

export type StudyTask = {
  id: string;
  title: string;
  subject: string;
  description?: string;
  priority: TaskPriority;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
};
```

As regras funcionais estão documentadas em [Negócio](negocio.md).

### Estado da aplicação

Na etapa de cadastro, as tarefas serão mantidas inicialmente em memória.

Quando as operações estiverem estáveis, um hook `useTasks` poderá concentrar:

- carregamento e salvamento;
- criação, edição e exclusão;
- conclusão e reabertura;
- filtro e ordenação;
- cálculo do progresso;
- estados de carregamento e erro.

### Persistência

Na etapa de persistência, `src/services/taskStorage.ts` deve isolar o acesso ao
AsyncStorage. Componentes visuais não devem ler ou gravar diretamente no
armazenamento.

Chave planejada:

```ts
export const STORAGE_KEYS = {
  TASKS: "@studytrack:tasks",
} as const;
```

Operações esperadas:

- obter tarefas;
- salvar tarefas;
- criar ou atualizar uma tarefa;
- excluir uma tarefa;
- apagar todas as tarefas.

## Fluxo de dados planejado

```text
Tela/rota
   ↓
useTasks
   ↓
regras e transformações
   ↓
taskStorage
   ↓
AsyncStorage
```

Os dados retornam no sentido inverso e são passados aos componentes visuais por
propriedades.

## Filtros, ordenação e progresso

- filtros produzem uma nova lista e preservam os dados originais;
- ordenação também deve operar sobre uma cópia;
- o progresso é derivado da lista, não armazenado separadamente;
- tarefas mais recentes aparecem primeiro.

## Decisões atuais

- Expo Router para navegação;
- `StyleSheet` para estilos;
- `FlatList` para listas de tarefas;
- aliases `@/` para importações a partir de `src/`;
- sem autenticação, backend ou biblioteca de estado global no MVP;
- tema visual inicialmente baseado em constantes de cores.
