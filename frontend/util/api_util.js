import { receiveAllSubs } from "../actions/sub_actions"


export const fetchAllSubs = () => {
    $.ajax({
        url: '/api/subs',
        dataType: 'json',
        success: function(data){
           store.dispatch(receiveAllSubs(data));
        //    this.setState({subs: data});
        //    console.log(store.getState());
        }
    })
}