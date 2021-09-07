import React, { Component } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
//PropTypes are a mechanism to ensure that components use the correct data type and pass the right data,
import { connect } from 'react-redux';
import { ReUserState } from '../../store/Actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
            erros:''
         };
    // console.log('login',props)
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
       }
    
    Login =(e) =>{
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });    
        const Data = {
         password: this.state.password,
         email: this.state.email
       };
       
       axios.post(`${this.props.URL_backend}/Login`, { Data })
       .then( (res) => {
         console.log(res);
         if(res['data']) { // this mean successfully
           
           console.log(res['data']);
           localStorage.setItem("token", res.data.token);
            this.props.ReUserState(true);
            
            this.props.props.history.push('/Profile')
          } 
          if(!res){// this mean faild
            const err  = res.data;
            this.setState({
              erros: err
            });
          }
   
       })
       .catch(err => this.setState({ erros : 'username or password is undefined'}) )
       }
      
      


  render() {
   return (
   <React.Fragment>   
    { this.state.erros ?
     <i className="alert alert-danger" role="alert">
         {this.state.erros}</i> : '' 
    } 
    <hr></hr>                         
    <form className="form-signin">
     <h4 className="h3 mb-3 font-weight-normal grey">Please sign in</h4>
     <input value={this.state.email}
            onChange={this.onChange} 
            type="email"
            name="email" 
            className="form-control" 
            placeholder="Email address"
            />
     <input value={this.state.password}
            onChange={this.onChange} 
            type="password" 
            name="password"
            className="form-control" 
            placeholder="Password"
            />
     <button onClick={this.Login}  className="btn btn-md btn-primary btn-block" type="submit">Sign in</button>
    </form>
    </React.Fragment>
     );
    }
}



Login.propTypes = {
    ReUserState: PropTypes.func.isRequired,
    Users: PropTypes.object.isRequired
  }
  
  const mapStateToProps = ( state ) => ({
    Users: state.Users
  });

  //mapStateToProps is used for selecting the part of the data from the store that the connected component needs
  
  export default connect(mapStateToProps, { ReUserState })(Login);
