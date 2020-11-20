import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, HashRouter} from 'react-router-dom';
import { fetchAllSubs } from '../util/api_util'
import requestAllSubs from '../actions/sub_actions';
import selectAllSubs from '../reducers/selectors';
import { Provider } from 'react-redux';
import Axios from 'axios';
import { withRouter } from 'react-router'


class SubsIndiv extends Component {

    constructor (props) {
      super(props)
      this.state = {
          sub_title: '',
          sub_description: '',
          sub_posts: []
      }
      this.locationAPIHelper = this.locationAPIHelper.bind(this);
    }

    locationAPIHelper() {
        const location = window.location.href;
        var array = location.split('/');
        const sub = array.slice(-1).flat();
        return sub
    }


    componentDidMount() {
        const url = '/api/subs/' + this.locationAPIHelper();
        Axios.get(url)
        .then( response => {
            this.setState({
                sub_title: response.data.sub_title,
                sub_description: response.data.sub_description,
            });
        }) 

        Axios.get('/api/posts?sub_identifier=' + this.locationAPIHelper())
        .then( response => {
            this.setState({
                sub_posts: Object.values(response.data)
            });
        }) 
    }
  
    render() {
      
      
      return (
        <HashRouter>
            <div className="sub-header">
                <h1>{this.state.sub_title}</h1>
                <h2>{this.state.sub_description}</h2>
            </div>
            

            <Link to = {{
                pathname: '/posts/create',
                search: this.state.sub_title
                }} className="create-post">Create Post
            </Link>

            <div className="post-list">
                {this.state.sub_posts.map((post, index) => 
                    <div className="post-item">
                        <div className="post-item-title" key={index}>{post.title}</div>
                        <br></br>
                        <div className="post-item-body">{post.post_body}</div>
                    </div>
                )}
            </div> 
        </HashRouter>
      );
    }
  }
  
  export default SubsIndiv;
  