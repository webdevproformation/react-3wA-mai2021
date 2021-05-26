import React from 'react';

class Connexion extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="col d-flex justify-content-center my-5 text-center">
                <form action="" className="w-25">
                    <h1 className="fs-4">Connexion au Back Office</h1>
                    <div className="form-group">
                        <label htmlFor="login">login</label>
                        <input type="text" className="form-control my-3" id="login" name="login" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input type="text" className="form-control my-3" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-success" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Connexion;