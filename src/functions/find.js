export function findClientName(id, clientList) {
  const foundClient = clientList.filter(client => client.ID_Cliente === id)[0];

  if (foundClient === undefined) return null;

  return foundClient.Nome;
}

export function findClientId(clientName, clientList) {
  const foundClient = clientList.filter(client => client.Nome === clientName)[0];

  if (foundClient === undefined) return null;

  return foundClient.ID_Cliente;
}

export function findMovieTitle(id, movieList) {
  const foundMovie = movieList.filter(movie => movie.Id === id)[0];
  
  if (foundMovie === undefined) return null;
  
  return foundMovie.Titulo;
}

export function findMovieId(movieName, movieList) {
  const foundMovie = movieList.filter(movie => movie.Titulo === movieName)[0];

  if (foundMovie === undefined) return null;

  return foundMovie.Id;
}
