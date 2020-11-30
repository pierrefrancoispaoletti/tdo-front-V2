import Axios from 'axios';

/* eslint-disable no-undef */
export const baseURI = 'https://le-tdo.com/';
export const jsonUrl = 'wp-json/wp/v2/';

export const compareObjects = (object1, object2, key) => {
  const obj1 = Number(object1[key].prix);
  const obj2 = Number(object2[key].prix);

  if (obj1 < obj2) {
    return -1;
  }
  if (obj1 > obj2) {
    return 1;
  }
  return 0;
};

export const filterObjectsByCategory = (allItems, category, func) => {
  const newItemsArray = allItems.filter((item) => item.categories[0] === category);
  if (category !== '') {
    func(newItemsArray);
  }
  else {
    func(allItems);
  }
};

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
