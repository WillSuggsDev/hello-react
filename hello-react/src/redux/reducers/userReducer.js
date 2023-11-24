const initialState = {
    name: 'Guest',
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;