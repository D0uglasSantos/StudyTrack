# StudyTrack

Aplicativo mobile de organização de estudos desenvolvido com React Native, Expo e TypeScript.

O StudyTrack permitirá que o usuário cadastre tarefas de estudo, organize matérias, acompanhe o progresso e mantenha os dados salvos no dispositivo.

Este projeto tem como principal objetivo servir como ambiente de aprendizado prático de React Native.

---

## Objetivo do projeto

O StudyTrack será utilizado para estudar e praticar:

- React Native;
- Expo;
- TypeScript;
- Expo Router;
- componentes reutilizáveis;
- propriedades;
- estados;
- formulários;
- validações;
- listas;
- navegação;
- armazenamento local;
- organização de pastas;
- Git e GitHub;
- testes em iOS e Android.

O desenvolvimento deve acontecer por etapas.

Não desenvolver todas as funcionalidades de uma vez.

---

## Tecnologias

O projeto utilizará inicialmente:

- React Native;
- Expo;
- TypeScript;
- Expo Router;
- React Hooks;
- StyleSheet;
- AsyncStorage;
- ESLint;
- Git.

Tecnologias como Supabase, autenticação, notificações e gerenciamento de estado global poderão ser adicionadas futuramente.

---

## Escopo do MVP

A primeira versão do StudyTrack deverá permitir:

- cadastrar tarefas de estudo;
- informar o título da tarefa;
- informar a matéria;
- informar uma descrição opcional;
- definir uma prioridade;
- listar as tarefas cadastradas;
- marcar uma tarefa como concluída;
- reabrir uma tarefa concluída;
- editar uma tarefa;
- excluir uma tarefa;
- filtrar tarefas;
- visualizar o progresso;
- salvar os dados no dispositivo;
- manter os dados após fechar o aplicativo.

Nesta primeira versão, o aplicativo não terá:

- login;
- cadastro de usuário;
- backend;
- banco de dados online;
- sincronização entre dispositivos;
- notificações;
- gráficos complexos;
- integração com inteligência artificial.

---

## Pré-requisitos

Antes de criar o projeto, o computador deve possuir:

- macOS;
- Homebrew;
- Node.js;
- npm;
- Watchman;
- Git;
- Cursor ou VS Code;
- Xcode;
- iOS Simulator;
- Android Studio;
- Android Emulator;
- JDK 17.

Verifique as instalações com:

```bash
brew --version
node -v
npm -v
watchman --version
git --version
java -version
```

---

## Criação do projeto

Para criar o projeto:

```bash
npx create-expo-app@latest StudyTrack
```

Depois, acesse a pasta:

```bash
cd StudyTrack
```

Abra o projeto na sua IDE favorita:

```bash
code .
```

Inicie o Expo:

```bash
npx expo start
```

Atalhos disponíveis no terminal:

```text
i = abrir no simulador iOS
a = abrir no emulador Android
w = abrir no navegador
r = recarregar o aplicativo
j = abrir o debugger
```

---

## Executando no iOS

Para abrir o simulador de iPhone:

```bash
open -a Simulator
```

Depois, no terminal em que o Expo estiver executando, pressione:

```text
i
```

Também é possível executar:

```bash
npm run ios
```

---

## Executando no Android

Primeiro, abra o Android Studio.

Depois:

```text
Android Studio
→ Tools
→ Device Manager
```

Inicie um aparelho virtual.

Com o emulador aberto, volte ao terminal do Expo e pressione:

```text
a
```

Também é possível executar:

```bash
npm run android
```

---

## Limpeza do projeto inicial

O template do Expo pode incluir telas e componentes de exemplo.

Depois de confirmar que o projeto está funcionando, execute:

```bash
npm run reset-project
```

Esse comando deve ser utilizado somente no início do projeto.

Não execute esse comando depois de começar a desenvolver funcionalidades próprias sem verificar o que será removido.

---

## Dependência de armazenamento local

Quando chegar à etapa de persistência de dados, instalar:

```bash
npx expo install @react-native-async-storage/async-storage
```

O AsyncStorage será utilizado para salvar as tarefas no dispositivo.

---

## Estrutura sugerida

```text
StudyTrack/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── tasks/
│   │   ├── new.tsx
│   │   └── [id].tsx
│   └── settings.tsx
├── components/
│   ├── TaskCard.tsx
│   ├── TaskForm.tsx
│   ├── ProgressCard.tsx
│   ├── FilterButton.tsx
│   └── EmptyState.tsx
├── hooks/
│   └── useTasks.ts
├── services/
│   └── taskStorage.ts
├── types/
│   └── task.ts
├── constants/
│   ├── colors.ts
│   └── storageKeys.ts
├── utils/
│   └── taskHelpers.ts
├── assets/
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

Não é necessário criar todas essas pastas imediatamente.

Elas devem ser criadas conforme o projeto evoluir.

---

## Rotas

O aplicativo deverá possuir inicialmente as seguintes rotas:

| Rota          | Responsabilidade                    |
| ------------- | ----------------------------------- |
| `/`           | Dashboard e lista de tarefas        |
| `/tasks/new`  | Cadastro de uma nova tarefa         |
| `/tasks/[id]` | Visualização e edição de uma tarefa |
| `/settings`   | Configurações do aplicativo         |

---

## Modelo de tarefa

O tipo principal do projeto deverá ser semelhante ao seguinte:

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

---

## Regras do modelo

Cada tarefa deverá possuir:

- identificador único;
- título;
- matéria;
- prioridade;
- status;
- data de criação;
- data de atualização.

A descrição será opcional.

Uma tarefa nova deverá começar com:

```ts
completed: false;
```

As datas deverão ser salvas em formato ISO:

```ts
new Date().toISOString();
```

O campo `completedAt` deverá existir somente quando a tarefa estiver concluída.

---

## Tela inicial

A tela inicial será o Dashboard do StudyTrack.

Ela deverá apresentar:

- nome do aplicativo;
- mensagem de apresentação;
- resumo do progresso;
- quantidade total de tarefas;
- quantidade de tarefas pendentes;
- quantidade de tarefas concluídas;
- percentual de conclusão;
- filtros;
- lista de tarefas;
- botão para cadastrar uma tarefa;
- mensagem quando não existirem tarefas.

---

## Tela de cadastro

A tela de cadastro deverá possuir:

- campo de título;
- campo de matéria;
- campo de descrição;
- seletor de prioridade;
- botão para salvar;
- botão para cancelar.

Campos obrigatórios:

- título;
- matéria.

O formulário deverá impedir o cadastro de tarefas sem os campos obrigatórios.

---

## Tela de detalhes

A tela de detalhes deverá permitir:

- visualizar a tarefa;
- editar o título;
- editar a matéria;
- editar a descrição;
- alterar a prioridade;
- concluir a tarefa;
- reabrir a tarefa;
- excluir a tarefa.

A exclusão deverá solicitar confirmação.

---

## Tela de configurações

A tela de configurações poderá conter inicialmente:

- apagar todas as tarefas;
- informações do projeto;
- versão do aplicativo;
- informações sobre o armazenamento local.

---

## Prioridades

As tarefas poderão possuir três prioridades:

```text
low = baixa
medium = média
high = alta
```

Exemplo de labels:

```ts
export const PRIORITY_LABELS = {
  low: "Baixa",
  medium: "Média",
  high: "Alta",
};
```

As prioridades devem possuir diferenças visuais, mas sem exagero no uso de cores.

---

## Componente TaskCard

O componente `TaskCard` será responsável por exibir uma tarefa.

Ele deverá apresentar:

- título;
- matéria;
- prioridade;
- status;
- botão ou área para concluir;
- acesso à tela de detalhes.

Exemplo de propriedades:

```ts
type TaskCardProps = {
  task: StudyTask;
  onPress: () => void;
  onToggleCompleted: () => void;
};
```

---

## Componente TaskForm

O componente `TaskForm` deverá ser reutilizado nas telas de cadastro e edição.

Ele será responsável por:

- controlar os campos;
- validar os dados;
- mostrar erros;
- enviar os valores;
- impedir múltiplos envios.

Exemplo de valores:

```ts
export type TaskFormValues = {
  title: string;
  subject: string;
  description: string;
  priority: TaskPriority;
};
```

---

## Componente ProgressCard

O componente `ProgressCard` deverá mostrar:

- total de tarefas;
- tarefas pendentes;
- tarefas concluídas;
- percentual concluído.

Exemplo de cálculo:

```ts
const progress =
  totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
```

---

## Componente EmptyState

O componente `EmptyState` deverá aparecer quando não existirem tarefas.

Mensagem sugerida:

```text
Nenhuma tarefa cadastrada.

Crie sua primeira tarefa de estudo para começar a acompanhar seu progresso.
```

O componente poderá possuir um botão para adicionar a primeira tarefa.

---

## Lista de tarefas

A lista deverá utilizar:

```tsx
FlatList;
```

Evitar utilizar `ScrollView` com vários itens renderizados manualmente.

Exemplo:

```tsx
<FlatList
  data={tasks}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TaskCard
      task={item}
      onPress={() => handleOpenTask(item.id)}
      onToggleCompleted={() => handleToggleTask(item.id)}
    />
  )}
/>
```

---

## Persistência local

As tarefas deverão ser armazenadas usando AsyncStorage.

Chave sugerida:

```ts
export const STORAGE_KEYS = {
  TASKS: "@studytrack:tasks",
} as const;
```

A lógica de armazenamento deverá ficar em:

```text
services/taskStorage.ts
```

Funções sugeridas:

```ts
getTasks();
saveTasks(tasks);
createTask(task);
updateTask(task);
deleteTask(id);
clearTasks();
```

Exemplo de leitura:

```ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getTasks(): Promise<StudyTask[]> {
  try {
    const storedTasks = await AsyncStorage.getItem("@studytrack:tasks");

    if (!storedTasks) {
      return [];
    }

    return JSON.parse(storedTasks);
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error);
    return [];
  }
}
```

Exemplo de gravação:

```ts
export async function saveTasks(tasks: StudyTask[]): Promise<void> {
  try {
    await AsyncStorage.setItem("@studytrack:tasks", JSON.stringify(tasks));
  } catch (error) {
    console.error("Erro ao salvar tarefas:", error);
    throw error;
  }
}
```

---

## Hook useTasks

O hook `useTasks` deverá centralizar as regras relacionadas às tarefas.

Responsabilidades:

- carregar tarefas;
- salvar tarefas;
- criar tarefa;
- editar tarefa;
- excluir tarefa;
- concluir tarefa;
- reabrir tarefa;
- filtrar tarefas;
- calcular progresso;
- informar estado de carregamento;
- informar erros.

Exemplo de retorno:

```ts
type UseTasksReturn = {
  tasks: StudyTask[];
  isLoading: boolean;
  error: string | null;
  createTask: (data: TaskFormValues) => Promise<void>;
  updateTask: (id: string, data: TaskFormValues) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;
};
```

---

## Filtros

O Dashboard deverá permitir filtros por status.

Filtros iniciais:

```text
Todas
Pendentes
Concluídas
```

Tipo sugerido:

```ts
export type TaskFilter = "all" | "pending" | "completed";
```

Exemplo:

```ts
const filteredTasks = tasks.filter((task) => {
  if (filter === "pending") {
    return !task.completed;
  }

  if (filter === "completed") {
    return task.completed;
  }

  return true;
});
```

Posteriormente, poderá ser adicionado filtro por matéria.

---

## Ordenação

As tarefas deverão ser ordenadas da mais recente para a mais antiga.

Exemplo:

```ts
const sortedTasks = [...tasks].sort(
  (firstTask, secondTask) =>
    new Date(secondTask.createdAt).getTime() -
    new Date(firstTask.createdAt).getTime(),
);
```

A lista original não deve ser alterada diretamente.

---

## Regras de negócio

O projeto deverá respeitar as seguintes regras:

- uma tarefa não pode ser criada sem título;
- uma tarefa não pode ser criada sem matéria;
- espaços extras devem ser removidos;
- o título deve ser salvo usando `trim`;
- a matéria deve ser salva usando `trim`;
- novas tarefas começam como pendentes;
- excluir uma tarefa exige confirmação;
- o progresso deve ser zero quando não houver tarefas;
- uma tarefa concluída deve possuir `completedAt`;
- uma tarefa reaberta deve remover `completedAt`;
- filtros não devem alterar os dados originais;
- tarefas devem ser ordenadas da mais recente para a mais antiga;
- erros de armazenamento devem ser tratados;
- o usuário deve receber feedback das ações importantes.

---

## Diretrizes de interface

O aplicativo deverá possuir uma interface:

- simples;
- moderna;
- jovem;
- minimalista;
- responsiva;
- acessível;
- consistente;
- compatível com iOS e Android.

Utilizar:

- espaçamento consistente;
- cards;
- bordas arredondadas;
- tipografia legível;
- contraste adequado;
- feedback de toque;
- áreas de toque confortáveis;
- mensagens de erro claras;
- estados vazios;
- estados de carregamento.

Evitar:

- animações complexas;
- excesso de cores;
- excesso de bibliotecas;
- telas muito carregadas;
- componentes muito grandes;
- estilos duplicados;
- valores mágicos espalhados.

---

## Cores sugeridas

Exemplo inicial de paleta:

```ts
export const COLORS = {
  primary: "#4F46E5",
  primaryDark: "#3730A3",
  background: "#F8FAFC",
  surface: "#FFFFFF",
  text: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  success: "#16A34A",
  warning: "#D97706",
  danger: "#DC2626",
};
```

Essa paleta é apenas uma sugestão inicial.

Ela poderá ser ajustada durante o desenvolvimento.

---

## Etapas de desenvolvimento

### Etapa 1 — Configuração

- instalar as ferramentas;
- criar o projeto Expo;
- abrir no Cursor;
- executar no simulador iOS;
- executar no emulador Android;
- validar o Fast Refresh;
- verificar o lint;
- criar o primeiro commit.

### Etapa 2 — Dashboard estático

- criar a tela inicial;
- adicionar título;
- adicionar mensagem de apresentação;
- criar resumo de progresso estático;
- criar tarefas temporárias;
- renderizar tarefas com FlatList;
- criar o componente TaskCard;
- criar o EmptyState.

Nesta etapa, não utilizar AsyncStorage.

### Etapa 3 — Navegação

- configurar o layout;
- criar a rota de cadastro;
- criar a rota de detalhes;
- criar a rota de configurações;
- testar a navegação.

### Etapa 4 — Cadastro

- criar o TaskForm;
- adicionar os campos;
- validar título;
- validar matéria;
- salvar tarefas em memória;
- voltar ao Dashboard após salvar.

### Etapa 5 — Ações das tarefas

- concluir tarefa;
- reabrir tarefa;
- editar tarefa;
- excluir tarefa;
- confirmar exclusão.

### Etapa 6 — Persistência

- instalar AsyncStorage;
- criar o serviço de armazenamento;
- carregar tarefas ao iniciar;
- salvar tarefas;
- tratar erros;
- testar o fechamento do aplicativo.

### Etapa 7 — Filtros e progresso

- filtrar tarefas;
- calcular tarefas pendentes;
- calcular tarefas concluídas;
- calcular percentual;
- atualizar o ProgressCard.

### Etapa 8 — Refatoração

- separar componentes;
- criar tipos;
- criar constantes;
- criar hooks;
- criar funções auxiliares;
- remover código duplicado;
- corrigir erros de TypeScript;
- executar lint.

### Etapa 9 — Testes manuais

- testar no iOS;
- testar no Android;
- testar campos vazios;
- testar textos grandes;
- testar teclado;
- testar exclusão;
- testar edição;
- testar persistência;
- testar filtros;
- testar progresso;
- testar aplicativo sem tarefas.

---

## Comandos úteis

Instalar dependências:

```bash
npm install
```

Iniciar o Expo:

```bash
npx expo start
```

Iniciar limpando o cache:

```bash
npx expo start --clear
```

Executar no iOS:

```bash
npm run ios
```

Executar no Android:

```bash
npm run android
```

Executar na web:

```bash
npm run web
```

Executar lint:

```bash
npm run lint
```

Verificar problemas no projeto:

```bash
npx expo-doctor
```

---

## Git

Caso o Git ainda não esteja iniciado:

```bash
git init
```

Primeiro commit:

```bash
git add .
git commit -m "chore: initialize StudyTrack project"
```

---

## Convenção de commits

Utilizar mensagens de commit em inglês.

Tipos:

```text
feat = nova funcionalidade
fix = correção
refactor = refatoração
style = alteração visual
docs = documentação
test = testes
chore = configuração ou manutenção
```

Exemplos:

```bash
git commit -m "feat: add dashboard layout"
git commit -m "feat: add task creation form"
git commit -m "feat: persist tasks with AsyncStorage"
git commit -m "fix: prevent empty task submission"
git commit -m "refactor: extract TaskCard component"
git commit -m "docs: update project README"
```

---

## Critérios de conclusão do MVP

O MVP estará concluído quando:

- o projeto abrir sem erros;
- funcionar no simulador iOS;
- funcionar no emulador Android;
- o usuário conseguir criar uma tarefa;
- o usuário conseguir editar uma tarefa;
- o usuário conseguir concluir uma tarefa;
- o usuário conseguir reabrir uma tarefa;
- o usuário conseguir excluir uma tarefa;
- os dados continuarem salvos após fechar o aplicativo;
- os filtros funcionarem;
- o progresso estiver correto;
- o estado vazio estiver funcionando;
- os formulários estiverem validados;
- não existirem erros de TypeScript;
- o lint estiver aprovado;
- o README estiver atualizado.

---

## Melhorias futuras

Depois que o MVP estiver concluído, poderão ser adicionadas:

- autenticação;
- Supabase;
- sincronização na nuvem;
- matérias personalizadas;
- categorias;
- calendário de estudos;
- metas diárias;
- metas semanais;
- cronômetro Pomodoro;
- notificações locais;
- modo escuro;
- gráficos;
- estatísticas;
- sequência de dias estudados;
- compartilhamento de progresso;
- funcionamento offline;
- sincronização entre dispositivos.

Essas funcionalidades não devem ser implementadas antes da conclusão do MVP.

---

## Orientações para o Cursor

O Cursor deverá seguir estas regras:

1. Ler completamente este README antes de alterar o projeto.
2. Utilizar React Native, Expo e TypeScript.
3. Manter compatibilidade com iOS e Android.
4. Não utilizar elementos HTML.
5. Não utilizar `div`, `button`, `input`, `span` ou outras tags HTML.
6. Utilizar componentes do React Native.
7. Utilizar `View`, `Text`, `Pressable`, `TextInput`, `FlatList` e componentes equivalentes.
8. Evitar o uso de `any`.
9. Criar tipos adequados.
10. Criar componentes pequenos e reutilizáveis.
11. Manter regras de negócio fora dos componentes visuais.
12. Não adicionar backend durante o MVP.
13. Não adicionar autenticação durante o MVP.
14. Não instalar bibliotecas sem explicar a necessidade.
15. Utilizar `npx expo install` para dependências do ecossistema Expo.
16. Fazer uma etapa por vez.
17. Não gerar todo o aplicativo de uma vez.
18. Explicar os arquivos criados.
19. Explicar os arquivos alterados.
20. Informar como testar cada etapa.
21. Não remover configurações existentes sem necessidade.
22. Preservar o funcionamento atual antes de adicionar novas funcionalidades.
23. Executar ou recomendar o lint após alterações.
24. Tratar estados de carregamento, erro e vazio.
25. Utilizar StyleSheet inicialmente.
26. Não instalar NativeWind no MVP.
27. Não instalar Redux no MVP.
28. Não instalar Zustand no MVP.
29. Não instalar biblioteca visual sem necessidade.
30. Não implementar funcionalidades futuras antes da conclusão do MVP.

---

## Primeiro prompt para o Cursor

Copie e envie o texto abaixo ao Cursor:

```text
Leia completamente o arquivo README.md localizado na raiz do projeto.

Quero desenvolver o StudyTrack passo a passo para aprender React Native.

Não desenvolva todo o aplicativo de uma vez.

Primeiro, analise a estrutura atual criada pelo Expo e explique:

1. quais arquivos e pastas são importantes;
2. qual arquivo representa a tela inicial;
3. como o Expo Router está configurado;
4. quais arquivos são somente exemplos do template;
5. quais arquivos podem ser removidos com segurança;
6. como o aplicativo é iniciado;
7. qual deve ser a primeira pequena etapa de desenvolvimento.

Não altere nenhum arquivo ainda.

Apresente somente a análise da estrutura e um plano para a primeira etapa.
```

---

## Segundo prompt para o Cursor

Depois da análise inicial, utilize:

```text
Com base no README.md, implemente somente a primeira versão visual do Dashboard do StudyTrack.

Requisitos:

- criar o título StudyTrack;
- adicionar uma mensagem de apresentação;
- criar um card simples de progresso;
- utilizar dados estáticos no progresso;
- criar três tarefas temporárias;
- renderizar as tarefas com FlatList;
- criar um componente TaskCard separado;
- preparar um componente EmptyState;
- utilizar TypeScript;
- não utilizar any;
- utilizar StyleSheet;
- não instalar bibliotecas;
- não utilizar AsyncStorage ainda;
- não criar backend;
- não criar autenticação;
- manter compatibilidade com iOS e Android.

Ao finalizar:

1. liste os arquivos criados;
2. liste os arquivos modificados;
3. explique as principais decisões;
4. informe como testar no iOS;
5. informe como testar no Android;
6. informe o comando para executar o lint.
```

---

## Terceiro prompt para o Cursor

Depois que o Dashboard estiver funcionando:

```text
Com base no README.md, implemente somente a navegação inicial do StudyTrack.

Crie as rotas:

- Dashboard;
- cadastro de tarefa;
- detalhes da tarefa;
- configurações.

Requisitos:

- utilizar Expo Router;
- manter o Dashboard existente;
- adicionar links ou botões de navegação;
- não implementar formulários ainda;
- não instalar bibliotecas;
- não adicionar AsyncStorage;
- utilizar TypeScript;
- manter compatibilidade com iOS e Android.

Ao finalizar, explique a estrutura das rotas e como testar cada navegação.
```

---

## Status

Projeto em fase inicial de configuração e aprendizado.

---

## Autor

Douglas Santos

Projeto criado para estudos de React Native e desenvolvimento mobile.
