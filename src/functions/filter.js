const leaseOptions = [
  {
    option: 'Filtrar por',
    action: (leases) => leases.map(lease => {
      lease.visible = true;
      return lease;
    })
  },
  {
    option: 'Concluídas',
    action: (leases) => leases.map(lease => {
      if (lease.end === '[Data indefinida]') {
        lease.visible = false;
      } else {
        const leaseDate = new Date(lease.end.split('/').reverse());
        const today = new Date(Date.now());
  
        lease.visible = today < leaseDate ? false : true;
      }

      return lease;
    })
  },
  {
    option: 'Atrasadas',
    action: (leases) => leases.map(lease => {
      if (lease.end === '[Data indefinida]') {
        lease.visible = true;
      } else {
        const leaseDate = new Date(lease.end.split('/').reverse());
        const today = new Date(Date.now());
  
        lease.visible = today > leaseDate ? false : true;
      }
  
      return lease;
    })
  }
];

const filterOptions = {
  leaseOptions,
};

export default filterOptions;
