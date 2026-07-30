# StudyTrack

Aplicativo mobile para organizar tarefas de estudo e acompanhar o progresso de
aprendizado.

O projeto também funciona como ambiente de prática de React Native, Expo e
TypeScript. O desenvolvimento é incremental: cada etapa deve estar funcional
antes da implementação da próxima.

## Status

Em desenvolvimento: limpeza do template inicial e consolidação do Dashboard
estático.

Nesta etapa, os dados são temporários. Persistência, formulários e ações reais
serão adicionados posteriormente.

## Tecnologias

- React Native;
- Expo;
- TypeScript;
- Expo Router;
- StyleSheet;
- ESLint.

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

Com o Expo em execução, use:

- `i` para abrir o simulador iOS;
- `a` para abrir o emulador Android;
- `w` para abrir no navegador.

Também estão disponíveis:

```bash
npm run ios
npm run android
npm run web
npm run lint
```

## Estrutura atual

```text
StudyTrack/
├── assets/
├── src/
│   ├── app/
│   ├── components/
│   ├── constants/
│   └── types/
├── app.json
├── package.json
└── tsconfig.json
```

A estrutura cresce apenas quando uma nova responsabilidade é implementada.

## Documentação

- [Negócio](docs/negocio.md): visão do produto, escopo, funcionalidades e
  regras;
- [Arquitetura](docs/arquitetura.md): decisões técnicas, fluxo de dados e
  componentes;
- [Estrutura](docs/estrutura.md): organização de diretórios e
  responsabilidades;
- [Desenvolvimento](docs/desenvolvimento.md): ambiente, comandos, padrões e
  validações;
- [Roadmap](docs/roadmap.md): etapas, critérios de conclusão e possíveis
  evoluções.

## Princípios do projeto

- desenvolver uma etapa por vez;
- manter compatibilidade com iOS e Android;
- evitar dependências sem necessidade;
- manter regras de negócio fora dos componentes visuais;
- usar tipos explícitos e evitar `any`;
- tratar estados de carregamento, erro e vazio;
- não antecipar autenticação, backend ou sincronização.

## Autor

Douglas Santos
