export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

//make Async request using redux thunk middleware
export const fetchUsersData = () => {
    return dispatch => {
        //first step to display the loading image
        dispatch(fetchDataBegin())
        return fetch('https://randomuser.me/api/?results=5')
            //be careful that fetch may not handle http errors
            //so you may need a fuction to handle http NOT OK
            .then(users => users.json())
            .then(users => dispatch(fetchDataSuccess(users.results)))
            .catch(err => dispatch(fetchDataFailure(err)))
    }
}

//Actions
const fetchDataBegin = () => {
    return {
        type: FETCH_DATA_BEGIN
    }
}

const fetchDataSuccess = users => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: { users }
    }
}

const fetchDataFailure = err => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: { err }
    }
}
