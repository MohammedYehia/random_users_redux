import * as actionType from './actions';

const initialState = {
    users: [],
    loading: false,
    err: null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                err: null
            };
        case actionType.FETCH_DATA_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                loading: false
            };
        case actionType.FETCH_DATA_FAILURE:
            return {
                ...state,
                users: [],
                loading: false,
                err: action.payload.err
            };
        default:
            return state;       
    }
};

export default reducer;
