/**
 * HOOK useCounter - Exemplo de Custom Hook
 *
 * Hooks em /hooks são funções que encapsulam lógica reutilizável.
 * Use quando a mesma lógica for necessária em vários componentes.
 *
 * Regra: nomes de hooks sempre começam com "use"
 */

import { useState } from 'react'

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(initialValue)

  return { count, increment, decrement, reset }
}

export default useCounter
