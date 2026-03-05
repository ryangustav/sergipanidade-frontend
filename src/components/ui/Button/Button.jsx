/**
 * BOTÃO - Componente reutilizável
 * 
 * Componentes em /components/ui são blocos básicos que você usa em várias partes.
 * 
 * Props (propriedades):
 * - children: o texto dentro do botão
 * - variant: 'primary' | 'secondary' | 'highlight' | 'desconto' (desconto = Ocre)
 * - onClick: função executada ao clicar
 */

function Button({ children, variant = 'primary', onClick }) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
