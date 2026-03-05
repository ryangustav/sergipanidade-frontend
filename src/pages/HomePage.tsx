/**
 * PÁGINA INICIAL
 *
 * Foco na experiência do turista: espaço negativo, hierarquia clara.
 */

import EstabelecimentoCard from '../components/EstabelecimentoCard'

function HomePage() {
  return (
    <div className="page page--wide">
      <h1>Bem-vindo ao Sergipanidade</h1>
      <p>Descubra os melhores estabelecimentos de Sergipe</p>

      <div className="filtros-row">
        <button className="categoria-tag">Gastronomia</button>
        <button className="categoria-tag">Hospedagem</button>
        <button className="categoria-tag">Passeios</button>
      </div>

      <EstabelecimentoCard
        nome="Restaurante da Praia"
        categoria="Gastronomia • Atalaia"
        imagem="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
        badge="desconto"
        onVerDesconto={() => alert('Desconto aplicado!')}
      />

      <EstabelecimentoCard
        nome="Pousada do Mangue"
        categoria="Hospedagem • Coroa do Meio"
        imagem="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
        badge="destaque"
      />
    </div>
  )
}

export default HomePage
