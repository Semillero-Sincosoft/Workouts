"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
const getLocalStorage = (key) => {
    const get = localStorage.getItem(key);
    return get ? JSON.parse(get) : null;
};
function removeLocalstorage(key, id) {
    const element = getLocalStorage(key) ? getLocalStorage(key) : [];
    element.comments.find((x) => x.id == 1).replies.splice(0, 1);
    const newElement = element.comments.filter((x) => x.id != id);
    saveLocalStorage("comentarios", element);
}
const addItem = (key, value, idPrincipal) => {
    const element = getLocalStorage(key) != null ? getLocalStorage(key) : [];
    if (idPrincipal != 0) {
        element.comments.find((x) => x.id == idPrincipal).replies.push(value);
    }
    else {
        element.comments.push(value);
    }
    saveLocalStorage(key, element);
    return element;
};
const updatePropLocalStorage = (key, id, prop, val) => {
    const origin = getLocalStorage(key);
    origin.comments.map((comment) => {
        if (comment.id == id) {
            comment[prop] = val;
        }
        else {
            comment.replies.map((reply) => {
                if (reply.id == id) {
                    reply[prop] = val;
                }
            });
        }
    });
    saveLocalStorage("comentarios", origin);
};
exports.default = {
    save: saveLocalStorage,
    get: getLocalStorage,
    delete: removeLocalstorage,
    add: addItem,
    update: updatePropLocalStorage,
};
