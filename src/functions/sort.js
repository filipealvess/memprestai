function orderLeases(leases, mode) {
  let result = [];

  const leaseDates = leases.map(({ id, start }) => {
    return { id, date: new Date(start.split('/').reverse()) };
  });

  for (let current = 0; current < leaseDates.length; current++) {
    for (let next = current + 1; next < leaseDates.length; next++) {
      const comparisonWasFollowed = mode === 'asc'
        ? leaseDates[current].date > leaseDates[next].date
        : leaseDates[current].date < leaseDates[next].date;

      if (comparisonWasFollowed) {
        const temp = leaseDates[current];
        leaseDates[current] = leaseDates[next];
        leaseDates[next] = temp;
      }
    }
  }

  leaseDates.forEach(({ id }) => {
    leases.forEach(lease => lease.id === id && result.push(lease));
  });

  return result;
}

const leaseOptions = [
  {
    option: 'Ordenar por',
    action: (leases) => orderLeases(leases, 'asc')
  },
  {
    option: 'Mais antigas',
    action: (leases) => orderLeases(leases, 'asc')
  },
  {
    option: 'Mais recentes',
    action: (leases) => orderLeases(leases, 'desc')
  }
];

const clientOptions = [
  {
    option: 'Ordenar por',
    action: (clients) => clients
  },
  {
    option: 'Nome',
    action: (clients) => {
      const result = [];

      const names = clients.map(client => client.title).sort();

      names.forEach(name => {
        clients.forEach(client => {
          client.title === name && result.push(client);
        });
      });
      
      return result;
    }
  },
  {
    option: 'Nascimento',
    action: (clients) => {
      const result = [];

      const birthDates = clients.map(({ id, birthDate }) => {
        return { id, date: new Date(birthDate.split('/').reverse()) };
      });

      for (let last = 0; last < birthDates.length; last++) {
        for (let current = last + 1; current < birthDates.length; current++) {
          if (birthDates[last].date < birthDates[current].date) {
            const temp = birthDates[last];
        
            birthDates[last] = birthDates[current];
            birthDates[current] = temp;
          }
        }
      }

      birthDates.forEach(({ id }) => {
        clients.forEach(client => client.id === id && result.push(client));
      });

      return result;
    }
  }
];

const movieOptions = [
  {
    option: 'Ordenar por',
    action: (movies) => movies
  },
  {
    option: 'T??tulo',
    action: (movies) => {
      const result = [];

      const titles = movies.reduce((movieTitles, movie) => {
        movieTitles.push(movie.title);
        return movieTitles;
      }, []).sort();

      titles.forEach(name => {
        movies.forEach(movie => {
          movie.title === name && result.push(movie);
        });
      });
      
      return result;
    }
  },
  {
    option: 'Classifica????o',
    action: (movies) => {
      const result = [];
      const ratings = movies.map(({id, parentalRating}) => ({id, parentalRating}));

      for (let last = 0; last < ratings.length; last++) {
        for (let current = last + 1; current < ratings.length; current++) {
          if (ratings[last].parentalRating > ratings[current].parentalRating) { 
            const temp = ratings[last];
        
            ratings[last] = ratings[current];
            ratings[current] = temp;
          }
        }
      }

      ratings.forEach(({id}) => {
        movies.forEach(movie => {
          movie.id === id && result.push(movie);
        });
      });

      return result;
    }
  }
];

const sortOptions = {
  leaseOptions,
  clientOptions,
  movieOptions
};

export default sortOptions;
