/**
 * SERVIÇOS API - Chamadas ao backend
 * 
 * Centralize aqui todas as requisições HTTP.
 * Assim, se a URL da API mudar, você altera em um só lugar.
 * 
 * Exemplo de uso em um componente:
 * import { fetchUsers } from '@/services/api'
 * const users = await fetchUsers()
 */

const API_BASE = import.meta.env.VITE_API_URL || 'https://api.exemplo.com'

/**
 * Função base para fazer requisições
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`)
  }

  return response.json()
}

/**
 * Exemplo: buscar lista de itens
 * Descomente e adapte quando tiver uma API real
 */
// export async function fetchItems() {
//   return request('/items')
// }

export { request }
