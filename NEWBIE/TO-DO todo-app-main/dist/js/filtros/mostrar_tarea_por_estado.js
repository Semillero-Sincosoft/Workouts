"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarTareasPorEstado = void 0;
const mostrarTareasPorEstado = function (estado) {
    $(".homework").each(function () {
        if (estado === true && $(this).hasClass("completado")) {
            $(this).addClass("hidden");
        }
        else if (estado === false && $(this).hasClass("no-completado")) {
            $(this).addClass("hidden");
        }
        else {
            $(this).removeClass("hidden");
        }
    });
};
exports.mostrarTareasPorEstado = mostrarTareasPorEstado;
