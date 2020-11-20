import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_SUBS= "RECEIVE_ALL_SUBS";

export const receiveAllSubs = subs => ({
    type: RECEIVE_ALL_SUBS,
    subs
})

export const requestAllSubs = () => (dispatch) => {
    APIUtil.fetchAllSubs()
        .then(subs => dispatch(receiveAllSubs(subs)))
        // .then(subsList => {
        //     this.setState({ subs: subsList });
        // });
}