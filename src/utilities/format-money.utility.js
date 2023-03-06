export function formatMoney (valor) {
  return valor.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })
}
