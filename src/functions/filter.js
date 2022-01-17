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

const clientOptions = [
  {
    option: 'Filtrar por',
    action: (clients) => clients.map(client => {
      client.visible = true;
      return client;
    })
  },
  {
    option: 'Com locação',
    action: (clients, leases) => {
      const result = clients.map(client => {
        client.visible = false;
        return client;
      });

      leases.forEach(lease => {
        clients.forEach((client, index) => {
          if (lease.ID_Cliente === client.id) {
            result[index].visible = true;
          }
        });
      });

      return result;
    }
  },
  {
    option: 'Sem locação',
    action: (clients, leases) => {
      const result = clients.map(client => {
        client.visible = true;
        return client;
      });

      leases.forEach(lease => {
        clients.forEach((client, index) => {
          if (lease.ID_Cliente === client.id) {
            result[index].visible = false;
          }
        });
      });

      return result;
    }
  },
];

const filterOptions = {
  leaseOptions,
  clientOptions
};

export default filterOptions;
