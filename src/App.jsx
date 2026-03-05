/**
 * COMPONENTE PRINCIPAL (RAIZ)
 * 
 * Aqui definimos a estrutura geral da aplicação:
 * - Layout (header, footer, etc)
 * - Rotas entre páginas
 * 
 * Para adicionar uma nova página: crie em /pages e adicione uma rota abaixo.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
