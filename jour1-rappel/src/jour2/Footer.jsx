import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    state = {  }
    render() { 
        return ( <>
        <p className="text-center bg-primary py-4">
            <Link to="/mention" className="text-white mx-2">mentions légales</Link>
            <Link to="/cgv" className="text-white mx-2">cgv</Link>
        </p>
        </> );
    }
}
 
export default Footer;