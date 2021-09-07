import React, { Component } from 'react';
import Login from './Login';
import Reigester from './Reigester';

//define port and url
const PORT = process.env.PORT || 4000;
const URL_backend = `http://localhost:${PORT}/api/users/`;

//const URL_backend = `https://react-giti.herokuapp.com/api/users`;


class LoginReigester extends Component {
    state = {  }
    render() {
        return (

    <React.Fragment>
      <center>
       <section className="Specific">
         <div className="main" id="main">
          <div className="container">
            <div className="row">
             <div className="col-lg-12 col-md-12">  
              <Login props={this.props} URL_backend={URL_backend}/>
              <Reigester props={this.props} URL_backend={URL_backend}/>       
             </div>
            </div>
           </div>
          </div>
         </section>
        </center>
    </React.Fragment>

        );
    }
}

export default LoginReigester;



