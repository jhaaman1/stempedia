import * as types from "./actionType";

const oldstate = {
    data: []
}

const reducer = (state = oldstate, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_RESPONSE:
            return {
                ...state,
                data: payload
            }


        default:
            return state
    }
}
export default reducer