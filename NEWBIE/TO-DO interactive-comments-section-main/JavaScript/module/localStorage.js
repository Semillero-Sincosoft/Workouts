const saveLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
function removeLocalstorage(key, id) {
  const element = getLocalStorage(key) ? getLocalStorage(key) : [];
  element.filter((x) => {
    x.id != id;
  });

  console.log(element, "sobre X");
  localStorage.removeItem(key);
}
const addItem = (key, value) => {
  const element = getLocalStorage(key) ? getLocalStorage(key) : [];
  element.push(value);

  saveLocalStorage(key, element);
  return element;
};

export default {
  save: saveLocalStorage,
  get: getLocalStorage,
  delete: removeLocalstorage,
  prueba: addItem,
};
