# Desenvolvimento

## Requisitos

- Node.js;
- npm;
- Git;
- Watchman no macOS;
- Xcode e iOS Simulator para testes no iOS;
- Android Studio, emulador Android e JDK 17 para testes no Android.

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

Atalhos do Expo:

```text
i = abrir no simulador iOS
a = abrir no emulador Android
w = abrir no navegador
r = recarregar
j = abrir o depurador
```

Execução direta:

```bash
npm run ios
npm run android
npm run web
```

Para reiniciar o Expo limpando o cache:

```bash
npx expo start --clear
```

## Qualidade

Execute o lint:

```bash
npm run lint
```

Valide os tipos:

```bash
npx tsc --noEmit
```

Verifique a configuração do Expo:

```bash
npx expo-doctor
```

## Dependências

- instalar bibliotecas somente quando a etapa atual exigir;
- explicar a responsabilidade de toda nova dependência;
- para bibliotecas do ecossistema Expo, utilizar `npx expo install`;
- o AsyncStorage será instalado apenas na etapa de persistência;
- evitar bibliotecas visuais e de estado global no MVP.

Instalação planejada para persistência:

```bash
npx expo install @react-native-async-storage/async-storage
```

## Padrões de implementação

- usar componentes do React Native, sem elementos HTML;
- preservar compatibilidade entre iOS e Android;
- evitar `any`;
- usar `StyleSheet` no MVP;
- manter componentes pequenos;
- separar regras de negócio da apresentação;
- tratar carregamento, erro e estado vazio;
- não implementar funcionalidades de etapas futuras.

## Verificações manuais

Antes de concluir uma funcionalidade, verificar quando aplicável:

- iOS e Android;
- textos longos e aumento de fonte;
- teclado e campos vazios;
- mensagens de validação;
- criação, edição e exclusão;
- conclusão e reabertura;
- confirmação de ações destrutivas;
- persistência após fechar o aplicativo;
- filtros e cálculo do progresso;
- aplicativo sem tarefas.

## Git

Mensagens de commit devem ser curtas e em inglês.

Tipos recomendados:

| Tipo       | Uso                           |
| ---------- | ----------------------------- |
| `feat`     | nova funcionalidade           |
| `fix`      | correção                      |
| `refactor` | alteração interna             |
| `style`    | alteração visual              |
| `docs`     | documentação                  |
| `test`     | testes                        |
| `chore`    | configuração ou manutenção   |

Exemplos:

```text
feat: add dashboard layout
fix: prevent empty task submission
refactor: extract task card
docs: organize project documentation
```
