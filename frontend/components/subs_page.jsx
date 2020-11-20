import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, HashRouter } from 'react-router-dom';
import { fetchAllSubs } from '../util/api_util'
import requestAllSubs from '../actions/sub_actions';
import selectAllSubs from '../reducers/selectors';
import { Provider } from 'react-redux';
import Axios from 'axios';


class SubsPage extends Component {

    constructor (props) {
      super(props)
      this.formHandler = this.formHandler.bind(this);
      this.changehandler = this.changehandler.bind(this);
      this.state = {
          sub_title: '',
          sub_description: ''
      }
    }

    formHandler(e) { 
        e.preventDefault();

        const token = 
            document.querySelector('[name=csrf-token]').content
    
        Axios.defaults.headers.common['X-CSRF-TOKEN'] = token
        
        Axios.post('api/subs', this.state)
            .then(response => {
                if (response.status == 201) {
                    this.props.history.push('/')
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
            <form className="sub-form">
                {/* <label>Sub Name: </label> */}
                <input type="text" onChange={this.changehandler} name="sub_title" className="sub_title" placeholder="Sub Title..."></input>
                <br/>
                {/* <label>Sub Description: </label> */}
                <textarea onChange={this.changehandler} name="sub_description" className="sub_description" placeholder="Sub Description..."></textarea>
                <br/>
                <button onClick={this.formHandler}>Submit</button>
            </form>
        </HashRouter>
      );
    }
  }
  
  export default SubsPage;
  