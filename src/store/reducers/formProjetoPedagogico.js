import { actionTypes } from '../../utils/js/constants';

const INITIAL_STATE = {
    open: false,
}

export default function toogleModal(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.TOOGLE_MODAL:
            return {
                ...state,
                open: !state.open
            }

        default:
            return false;
    }
}