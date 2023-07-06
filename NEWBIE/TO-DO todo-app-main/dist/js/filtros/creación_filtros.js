"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearBarraFiltros = void 0;
const utilities_js_1 = require("../utilities.js");
const mostrar_tarea_por_estado_js_1 = require("./mostrar_tarea_por_estado.js");
const validationHomework_js_1 = require("../tareas/funcionalidad_tareas_/validationHomework.js");
const eliminar_completados_js_1 = require("./eliminar_completados.js");
const tareas_restantes_js_1 = require("./tareas_restantes.js");
const CrearBarraFiltros = function () {
    const filters = [
        (0, tareas_restantes_js_1.tareasRestantes)() + " items left",
        ["All", "Active", "Completed"],
        "Clear Completed",
    ];
    filters.map((filter, index) => {
        const element = (0, utilities_js_1.createTag)("div", "content-filter-" + index);
        let textOfElement;
        if (index == 0) {
            textOfElement = (0, utilities_js_1.createTag)("p", "elements-left", filter, "elements-left");
            element.append(textOfElement);
        }
        else if (index == 1) {
            const itemAll = (0, utilities_js_1.createTag)("button", "filter-all", filter[0], "filter-all");
            const itemActive = (0, utilities_js_1.createTag)("button", "filter-active", filter[1]);
            const itemCompleted = (0, utilities_js_1.createTag)("button", "filter-completed", filter[2]);
            element.append(itemAll, itemActive, itemCompleted);
            $(itemAll).on("click", () => (0, mostrar_tarea_por_estado_js_1.mostrarTareasPorEstado)());
            $(itemActive).on("click", () => (0, mostrar_tarea_por_estado_js_1.mostrarTareasPorEstado)(true));
            $(itemCompleted).on("click", () => (0, mostrar_tarea_por_estado_js_1.mostrarTareasPorEstado)(false));
        }
        else {
            const itemClear = (0, utilities_js_1.createTag)("button", "filter-clear", filter);
            element.append(itemClear);
            $(itemClear).on("click", () => (0, eliminar_completados_js_1.eliminarCompletados)());
        }
        validationHomework_js_1.contentFilters.append(element);
    });
};
exports.CrearBarraFiltros = CrearBarraFiltros;
