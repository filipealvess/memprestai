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
    leases.forEach(lease => lease.id === id && result.push(lease))
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

const sortOptions = {
  leaseOptions,
};

export default sortOptions;
