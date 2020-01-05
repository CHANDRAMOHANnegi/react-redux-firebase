
import { SEARCH_ERROR, REQUEST_SEARCH_PENDING, SEARCH_RESULT_SUCCESS } from "../ActionType/AlgoliaSearchActionType"

const initialState = {
    searchData: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_RESULT_SUCCESS: {
            console.log(action);
            return Object.assign({}, state, {
                ...state,
                searchData: action.payload,
            })
        };
        case SEARCH_ERROR: {
            console.log(action);
            return Object.assign({}, state, {
                ...state,
            })
        };
        default:
            return state;
    }
};