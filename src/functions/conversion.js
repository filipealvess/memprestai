import { findClientName, findMovieTitle,  } from "./find";

function formatDate(dateInString) {
  if (dateInString === undefined) return '[Data indefinida]';

  const date = new Date(dateInString);
  const isDecember = date.getMonth() === 0;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  
  let month = isDecember ? 12 : date.getMonth();
  month = month < 10 ? `0${month}` : month;
  
  const year = isDecember ? date.getFullYear() - 1 : date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function clientsList(clients) {
  return clients.map(client => {
    const { ID_Cliente, CPF, Data_Nascimento, Nome } = client;

    return {
      id: ID_Cliente,
      title: Nome,
      infos: [
        `CPF: ${CPF}`,
        `Nascimento: ${formatDate(Data_Nascimento)}`,
      ],
      alertInfo: '',
      birthDate: formatDate(Data_Nascimento),
      visible: true
    };
  });
}

export function moviesList(movies) {
  return movies.map(movie => {
    const { Id, Titulo, Classificacao_Indicativa, Lancamento } = movie;

    return {
      id: Id,
      title: Titulo,
      infos: [
        `Classificação: ${Classificacao_Indicativa}`,
      ],
      alertInfo: Lancamento ? '' : 'Ainda não foi lançado'
    };
  });
}

export function leasesList(leases, clients, movies) {
  return leases.map(lease => {
    const { ID_Locacao, ID_Cliente, Id_Filme, Data_Locacao, Data_Devolucao } = lease;

    return {
      id: ID_Locacao,
      client: findClientName(ID_Cliente, clients),
      movie: findMovieTitle(Id_Filme, movies),
      start: formatDate(Data_Locacao),
      end: formatDate(Data_Devolucao),
      visible: true
    };
  });
}
