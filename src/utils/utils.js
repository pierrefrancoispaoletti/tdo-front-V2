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
