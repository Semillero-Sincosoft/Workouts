"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saveLocalStorage = (key, value) => {
    const element = localStorage.setItem(key, JSON.stringify(value));
    return element;
};
const getLocalStorage = (key) => {
    const element = JSON.parse(localStorage.getItem(key));
    return element;
};
function remove(key) {
    localStorage.removeItem(key);
}
const addItem = (key, value) => {
    const element = getLocalStorage(key) != null ? getLocalStorage(key) : [];
    element.push(value);
    saveLocalStorage(key, element);
    return element;
};
exports.default = {
    save: saveLocalStorage,
    get: getLocalStorage,
    delete: remove,
    add: addItem,
};
