import { combineReducers } from "redux";
import toogleModal from "./formProjetoPedagogico";

const rootReducer = combineReducers({
    toogleModalData: toogleModal,
});

export default rootReducer;
