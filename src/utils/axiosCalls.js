import Axios from 'axios';

/* eslint-disable no-undef */
export const baseURI = 'https://le-tdo.com/';
export const jsonUrl = 'wp-json/wp/v2/';

export const axiosCall = (endPoint) => (
  Axios({
    method: 'get',
    url: [baseURI + jsonUrl + endPoint],
    params: {
      status: ['publish'],
      per_page: '50',
      order: 'asc',
    },
  })
);

export const tagliateReq = Axios.get('https://le-tdo.com/wp-json/wp/v2/tagliate', {
  params: {
    status: ['publish'],
    per_page: '50',
    order: 'asc',
  },
});
export const pastaReq = Axios.get(
  'https://le-tdo.com/wp-json/wp/v2/ptes_et_risottos',
  {
    params: {
      status: ['publish'],
      per_page: '50',
      order: 'asc',
    },
  },
);
export const antipastiReq = Axios.get(
  'https://le-tdo.com/wp-json/wp/v2/les_antipasti', {
    params: {
      status: ['publish'],
      per_page: '50',
      order: 'asc',
    },
  },
);
export const carneReq = Axios.get('https://le-tdo.com/wp-json/wp/v2/la_carne', {
  params: {
    status: ['publish'],
    per_page: '50',
    order: 'asc',
  },
});
