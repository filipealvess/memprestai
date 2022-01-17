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

      const names = clients.reduce((clientNames, client) => {
        clientNames.push(client.title);
        return clientNames;
      }, []).sort();

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

const sortOptions = {
  leaseOptions,
  clientOptions
};

export default sortOptions;
