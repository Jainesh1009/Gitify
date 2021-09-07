import React, { Component } from 'react';
import { Link , withRouter  } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        
        super(props);
        this.state = { isAuthentication:false };
       this.state = {};
   
      }

    async componentDidMount() {
        await this.props.store.subscribe( ()=> {
        this.setState({ isAuthentication: this.props.store.getState()['Users']['isAuthenticated']})
        }) 
    }
    
    Logout = () => {
     this.props.Logout();
    }

    GoHome = () => {
     this.props.history.push({
          pathname: `/`,
     });
    }

    render() {
        return (
            <React.Fragment>
                 <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
               
        <h5 className="my-0 mr-md-auto font-weight-normal">React With Node</h5>
       
        <nav className="my-2 my-md-0 mr-md-3">
            {/* <a className="p-2 text-dark" href="/Favorite">
            
            </a> */}
            <Link to='/' className="p-2 text-dark">
            <i className="p-2 text-dark"></i> Home
        </Link> 
            <Link to='/Favorite' className="p-2 text-dark">
            <i className="fas fa-heart"></i> Favorites
            </Link>        
        </nav>
        { this.state.isAuthentication ?
                        <Link to="/Profile" className="p-2 text-dark">
                        <i className='fas fa-user'> </i> Profile
                        </Link>                        
                        :'' }


        { this.state.isAuthentication ?
         <button onClick={this.Logout} className="btn btn-outline-danger">Logout</button>
         :
         <Link to='/LoginReigester' className="p-2 text-dark">
        <button className="btn btn-outline-primary" href="#">Sign up</button>
        </Link>

        }
        
       
      </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Nav);
//export default Nav;
