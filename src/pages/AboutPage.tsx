/**
 * PÁGINA SOBRE
 *
 * Acesse em: /sobre
 * Exemplo de uso dos componentes shadcn/ui
 */

import { Button } from "@/components/ui/button"

function AboutPage() {
  return (
    <div className="page">
      <h1>Sobre o Projeto</h1>
      <p>
        Esta base foi criada para ser fácil de entender e modificar.
        Veja o README.md para entender a estrutura de pastas.
      </p>
      <div className="flex gap-2 flex-wrap mt-6">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </div>
  )
}

export default AboutPage
