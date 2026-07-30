# Estrutura do projeto

## Estrutura atual

```text
StudyTrack/
├── assets/
│   ├── expo.icon/
│   └── images/
├── docs/
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   ├── components/
│   │   ├── EmptyState.tsx
│   │   ├── ProgressCard.tsx
│   │   └── TaskCard.tsx
│   ├── constants/
│   │   ├── colors.ts
│   │   └── priorities.ts
│   └── types/
│       └── task.ts
├── app.json
├── eslint.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Responsabilidades

### `src/app`

Contém as rotas do Expo Router.

- `_layout.tsx`: configura o navegador raiz;
- `index.tsx`: representa o Dashboard.

Novas rotas devem ser criadas somente na etapa em que forem utilizadas.

### `src/components`

Contém componentes reutilizáveis de interface. Eles devem receber dados e ações
por propriedades, sem acessar diretamente o armazenamento.

### `src/constants`

Valores compartilhados e estáveis, como cores, rótulos e futuras chaves de
armazenamento.

### `src/types`

Tipos do domínio e contratos compartilhados.

### `assets`

Ícones, imagens de inicialização e outros recursos estáticos realmente usados
pelo aplicativo. Recursos remanescentes do template devem ser removidos quando
for possível confirmar que não estão referenciados.

### `docs`

Documentação detalhada do produto e do desenvolvimento. O README apenas
apresenta o projeto e aponta para estes documentos.

## Estrutura planejada

Os diretórios abaixo serão criados conforme as funcionalidades surgirem:

```text
src/
├── app/
│   ├── tasks/
│   │   ├── new.tsx
│   │   └── [id].tsx
│   └── settings.tsx
├── components/
│   ├── FilterButton.tsx
│   └── TaskForm.tsx
├── hooks/
│   └── useTasks.ts
├── services/
│   └── taskStorage.ts
└── utils/
    └── taskHelpers.ts
```

Não devem ser criadas pastas vazias para funcionalidades futuras.

## Convenções

- componentes e seus arquivos usam `PascalCase`;
- hooks começam com `use`;
- tipos descrevem conceitos do domínio;
- constantes compartilhadas ficam fora das telas;
- regras puras e reutilizáveis podem migrar para `utils`;
- acesso a recursos externos deve ficar em `services`;
- importações internas usam o alias `@/`.
