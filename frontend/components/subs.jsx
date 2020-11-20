import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, HashRouter, NavLink, Switch } from 'react-router-dom';
import { fetchAllSubs } from '../util/api_util'
import requestAllSubs from '../actions/sub_actions';
import selectAllSubs from '../reducers/selectors';
import { Provider } from 'react-redux';
import Axios from 'axios';
import SubsPage from './subs_page';
import SubsIndex from './subs_index';
import SubsIndiv from './subs_indiv';
import CreatePost from './create_post';
import { withRouter } from 'react-router';


class Subs extends Component {

    constructor (props) {
      super(props)
    }
  
    componentDidMount() {
      this.props.fetchAllSubs;
    }
 
    render() {

      // console.log(this.props);
      
      return (
        <HashRouter>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={SubsIndex}/>
            <Route path="/sub/" component={SubsIndiv}/>
            <Route exact path="/subs/create" component={SubsPage} />
            <Route exact path="/posts/create" component={CreatePost} />
          </div>
        </Provider>
        </HashRouter>
      );
    }
  }
  
  export default Subs;
  