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

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'highlight' | 'desconto'
  onClick?: () => void
}

function Button({ children, variant = 'primary', onClick }: ButtonProps) {
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
