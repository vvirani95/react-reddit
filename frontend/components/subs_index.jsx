import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, HashRouter, NavLink, Switch, useParams } from 'react-router-dom';
import { fetchAllSubs } from '../util/api_util';
import requestAllSubs from '../actions/sub_actions';
import selectAllSubs from '../reducers/selectors';
import { Provider } from 'react-redux';
import Axios from 'axios';
import SubsPage from './subs_page';
import SubsIndiv from './subs_indiv';


class SubsIndex extends Component {

    constructor (props) {
      super(props)
      this.state = {
        subs: [],
        search: ''
      }
    // this.Params = this.Params.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.getHandler = this.getHandler.bind(this);
    }

    // Params(){
    //     let { slug } = useParams()
    // }

    searchHandler(e){
        e.preventDefault();
        this.setState({
            search: e.target.value
        }, this.getHandler)
    }

    getHandler(){
        Axios.get('api/searchs?search=' + this.state.search.charAt(0).toUpperCase())
          .then( response => {
            this.setState({subs: Object.values(response.data)});
        }) 
    }

    componentDidMount() {
      Axios.get('/api/subs')
        .then( response => {
            this.setState({subs: Object.values(response.data)});
      }) 
      console.log(this.state.search);
    }

  
    render() {
      
      return (
        <Provider store={store}>
        <HashRouter>
        <input type="text" onChange={this.searchHandler} className="search-input" size="50" placeholder="Search for a Sub..."></input>
          {/* {<NavLink exact to="/subs/create" style={{ textDecoration: 'none' }} className="create-sub-button" style={{ textDecoration: 'none' }}>Create Sub</NavLink>} */}
          <div className="sub-list">
            {this.state.subs.map((sub, index) => 
            <NavLink to={"/sub/" + (sub.sub_title)} style={{ textDecoration: 'none' }}> 
              <div className="sub-item" key={index}>{sub.sub_title + ": " + sub.sub_description}</div>
            </NavLink>
            )}
          </div> 
          {<Route path="/subs/create" component={SubsPage}/>}    
        </HashRouter>
        </Provider>
      );
    }
  }
  
  export default SubsIndex;