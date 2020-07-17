import { 
    FETCH_SMURFS_START, 
    FETCH_SMURFS_SUCCESS, 
    FETCH_SMURFS_FAIL,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL
} from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',
    postError: '',
    isPosting: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_SMURF_START:
            return {
                ...state,
                isPosting: true,
                postError: ''
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isPosting: false,
                postError: '',
                smurfs: action.payload
            }
        case POST_SMURF_FAIL:
            return {
                ...state,
                isPosting: false,
                postError: action.payload
            }
        default:
            return state;
    }
}

export default reducer;