/**
 * CARTÃO DE ESTABELECIMENTO
 * 
 * Foco na experiência do turista:
 * - Imagem em largura quase total, cantos arredondados (8-12px)
 * - Badge discreto (Desconto/Destaque) no canto da foto
 * - Nome em negrito
 * - Categoria em cinza claro, caixa alta
 */

function EstabelecimentoCard({ nome, categoria, imagem, badge, onVerDesconto }) {
  return (
    <article className="estabelecimento-card">
      <div className="estabelecimento-card__imagem-wrapper">
        <img
          src={imagem}
          alt={nome}
          className="estabelecimento-card__imagem"
        />
        {badge && (
          <span className={`estabelecimento-card__badge estabelecimento-card__badge--${badge}`}>
            {badge === 'desconto' ? 'Desconto' : 'Destaque'}
          </span>
        )}
      </div>
      <div className="estabelecimento-card__conteudo">
        <h3 className="estabelecimento-card__nome">{nome}</h3>
        <p className="estabelecimento-card__categoria">{categoria}</p>
        {onVerDesconto && (
          <button className="btn btn-desconto" onClick={onVerDesconto} style={{ marginTop: '0.75rem' }}>
            Ver Desconto
          </button>
        )}
      </div>
    </article>
  )
}

export default EstabelecimentoCard
