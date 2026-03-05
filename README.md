# Sergipanidade - Base React

Projeto React + TypeScript com arquitetura simples, escalável e fácil de entender.

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## 📁 Estrutura de pastas

```
src/
├── components/       # Componentes reutilizáveis
│   ├── Layout/       # Estrutura que envolve todas as páginas (header, nav, footer)
│   └── ui/           # Componentes (shadcn: button.jsx, card.jsx | custom: Button/, Card/)
├── pages/            # Uma pasta = uma tela da aplicação
├── hooks/            # Lógica reutilizável (ex: useCounter)
├── utils/            # Funções auxiliares (formatação, etc)
├── services/         # Chamadas à API
├── styles/           # CSS global
├── App.jsx           # Define as rotas
└── main.jsx          # Ponto de entrada
```

## 📖 Guia rápido

### Adicionar uma nova página

1. Crie o arquivo em `src/pages/MinhaPagina.tsx`:

```tsx
function MinhaPagina() {
  return <div><h1>Minha Página</h1></div>
}
export default MinhaPagina
```

2. Adicione a rota em `src/App.tsx`:

```tsx
import MinhaPagina from './pages/MinhaPagina'

// Dentro de <Routes>:
<Route path="/minha-pagina" element={<MinhaPagina />} />
```

### Criar um componente reutilizável

1. Crie a pasta em `src/components/ui/MeuComponente/`
2. Crie `MeuComponente.tsx` e `index.ts`
3. Importe onde precisar: `import MeuComponente from '@/components/ui/MeuComponente'`

### Chamar uma API

1. Crie a função em `src/services/api.ts`
2. Use no componente com `useEffect` ou em um evento

### Usar componentes shadcn/ui

O projeto está configurado para usar [shadcn/ui](https://ui.shadcn.com). Para adicionar componentes:

```bash
npx shadcn@latest add button    # Adiciona o botão
npx shadcn@latest add card      # Adiciona o card
npx shadcn@latest add dialog    # Adiciona o modal
# etc.
```

Importe e use:

```jsx
import { Button } from "@/components/ui/button"

<Button variant="default">Clique</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Excluir</Button>
```

Os componentes shadcn ficam em `src/components/ui/` (minúsculo: button.tsx, card.tsx). Os componentes customizados do projeto ficam em pastas com maiúscula (Button/, Card/).

## 🛠 Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão para produção |
| `npm run preview` | Visualiza o build de produção |

## 📚 Conceitos básicos

- **Componente**: Um bloco de interface (como um botão ou uma página)
- **Props**: Dados passados de um componente pai para o filho
- **State**: Dados que mudam e fazem a tela atualizar
- **Hook**: Função que adiciona comportamento (useState, useEffect, etc)
