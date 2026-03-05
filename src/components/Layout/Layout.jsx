/**
 * LAYOUT - Estrutura que envolve todas as páginas
 * 
 * Use este componente para elementos que aparecem em todas as páginas:
 * - Cabeçalho (header)
 * - Menu de navegação
 * - Rodapé (footer)
 * 
 * O conteúdo de cada página aparece onde está {children}
 */

import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout-header">
        <Link to="/" className="logo">Sergipanidade</Link>
        <nav className="layout-nav">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
      </header>

      <main className="layout-main">
        {children}
      </main>

      <footer className="layout-footer">
        <p>© 2025 Sergipanidade. Feito com React.</p>
      </footer>
    </div>
  )
}

export default Layout
