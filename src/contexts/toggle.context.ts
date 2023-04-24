import { createContext } from "react";
import { BooleanStateType } from "../utilities/types";

export const NavigationToggleContext = createContext<BooleanStateType>([false, () => { }]);