import { resetButton } from "./globalVariable.js";

import { eventButtonTip, reset, eventClickAndValues } from "./funciones.js";

eventButtonTip();

eventClickAndValues();

reset();
resetButton.addEventListener("click", reset);
