const saveLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
function removeLocalstorage(key, id) {
  const element = getLocalStorage(key) ? getLocalStorage(key) : [];
  element.comments.filter((x) => x.id != id);

  const newElement = element.comments.filter((x) => x.id != id);

  saveLocalStorage("comentarios", newElement);
}
const addItem = (key, value) => {
  const element = getLocalStorage(key) != null ? getLocalStorage(key) : [];
  element.comments.filter((x) => x.id == 2)[0].replies.push(value);
  element.comments.push(value);

  saveLocalStorage(key, element);
  return element;
};

export default {
  save: saveLocalStorage,
  get: getLocalStorage,
  delete: removeLocalstorage,
  add: addItem,
};
