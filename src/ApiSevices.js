// const API_ENDPOINT = 'http://localhost:8080'

import config from './config';

const ApiService = {
  getPets() {
    return fetch(`${config.API_ENDPOINT}/api/pets`).then((res) => res.json());
  },

  getQueue() {
    return fetch(`${config.API_ENDPOINT}/api/people`).then((res) => res.json());
  },

  addPerson(person) {
    return fetch(`${config.API_ENDPOINT}/api/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(person),
    })
  },

  removePerson() {
    return fetch(`${config.API_ENDPOINT}/api/people`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
  },

  removePet(pet) {
    return fetch(`${config.API_ENDPOINT}/api/pets/${pet}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
  },
};

export default ApiService;
