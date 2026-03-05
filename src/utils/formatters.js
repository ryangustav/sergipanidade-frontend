/**
 * UTILITÁRIOS - Funções auxiliares
 * 
 * Coloque aqui funções puras que podem ser usadas em qualquer lugar.
 * Exemplos: formatação de datas, números, strings, etc.
 */

/**
 * Formata um número como moeda brasileira
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

/**
 * Formata uma data para exibição
 */
export function formatDate(dateString) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(dateString))
}
