import { RECEIVE_ALL_SUBS } from '../actions/sub_actions';

const subReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ALL_SUBS:
            return action.subs;
        default: 
            return state;

    }
};

export default subReducer;