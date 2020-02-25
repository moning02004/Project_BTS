import * as types from '../actions/ActionTypes';


const initialState = {
    keyword: "전체"
}

function CategoryReducer(state = initialState, action) {
    switch(action.type) {
        case types.SET_CAT_ALL:
            return {
                keyword: "전체"
            }
        case types.SET_CAT_REGULAR:
            return {
                keyword: '정규'
            }
            
        case types.SET_CAT_MINI:
            return {
                keyword: '미니'
            }
            
        case types.SET_CAT_SINGLE:
            return {
                keyword: '싱글'
            }
            
        case types.SET_CAT_OST:
            return {
                keyword: 'OST'
            }
        default:
            return state;
    }
}

export default CategoryReducer;