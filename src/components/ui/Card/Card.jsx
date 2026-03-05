/**
 * CARD - Cartão para estabelecimentos
 * 
 * Estilo Glassmorphism: branco, bordas arredondadas, sombra suave.
 * Use variant="glass" para versão translúcida.
 */

function Card({ children, variant = 'default', className = '' }) {
  const cardClass = variant === 'glass' ? 'card card-glass' : 'card'
  return (
    <div className={`${cardClass} ${className}`.trim()}>
      {children}
    </div>
  )
}

export default Card
