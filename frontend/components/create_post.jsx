import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import { fetchAllSubs } from '../util/api_util'
import requestAllSubs from '../actions/sub_actions';
import selectAllSubs from '../reducers/selectors';
import { Provider } from 'react-redux';
import Axios from 'axios';


class CreatePost extends Component {

    constructor (props) {
      super(props)
      this.formHandler = this.formHandler.bind(this);
      this.changehandler = this.changehandler.bind(this);
      this.state = {
          post_title: '',
          post_body: '',
          sub_identifier: this.props.location.search.slice(1)
      }
    }

    formHandler(e) { 
        e.preventDefault();

        const token = 
            document.querySelector('[name=csrf-token]').content
    
        Axios.defaults.headers.common['X-CSRF-TOKEN'] = token
        
        Axios.post('/api/posts', this.state)
            .then(response => {
                if (response.status == 201) {
                    this.props.history.push('/sub/' + this.props.location.search.slice(1))
                }
            })
            .catch(error => {
                console.log(error)
            })
        
    }

    changehandler(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        
    }
  
    render() {
      
      
      return (
        <HashRouter>
            <form className="post-form">
                {/* <label>Post title:</label> */}
                <input type="text" name="title" onChange={this.changehandler} className="post_title" placeholder="Post Title..."></input>
                <br></br>
                {/* <label>Post Body:</label> */}
                <textarea onChange={this.changehandler} name="post_body" className="post_body" placeholder="Post Body..."></textarea>
                <br></br>
                {/* <label>In Which Sub:</label> */}
                <input type="text" value={this.props.location.search.slice(1)} className="sub_location"></input>
                <br></br>
                <button onClick={this.formHandler}>Submit</button>
            </form>
        </HashRouter>
      );
    }
  }
  
  export default CreatePost;
  