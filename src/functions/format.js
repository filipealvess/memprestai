export function formatDate(date, format = 'y-m-d') {
  return format === 'y-m-d'
    ? date.split('/').reverse().join('-')
    : date.split('-').reverse().join('/');
}

export function formatCPF(cpf) {
  const formatedCPF = cpf.replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
  
  return formatedCPF;
}
