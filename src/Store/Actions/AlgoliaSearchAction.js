
import { SEARCH_RESULT_SUCCESS, REQUEST_SEARCH_PENDING, SEARCH_ERROR } from '../ActionType/AlgoliaSearchActionType';
import axiosService from '../../Inits/Axios';

export const search = ( url) => async (dispatch, getState) => {
    dispatch({ type: REQUEST_SEARCH_PENDING })
    // if(!searchType)searchType="search";
    const APIURL =url;
    //  `http://hn.algolia.com/api/v1/${searchType}?query=${query}`;
    await axiosService.get(APIURL)
        .then((response) => {
            // console.log('search', response)
            dispatch({ type: SEARCH_RESULT_SUCCESS, payload: response.data });
        }).catch((error) => {
            console.log(error)
            if (error.response) {
                dispatch({ type: SEARCH_ERROR, payload: error.response.data });
            }
        });
}