import React from 'react';
import request from 'superagent';
import {Link} from 'react-router';

export default class Signup extends React.Component{
  constructor(props){
    super(props);
  }
  userRegistration(event){
    self = this;
    event.preventDefault();
    var firstName = event.target.elements[0].value;
    var lastName = event.target.elements[1].value;
    var userName = event.target.elements[2].value;
    var password = event.target.elements[3].value;

    request
    .post("http://127.0.0.1:5000/register")
    .send({username: userName, password: password})
    .set('Content-Type', 'application/json')
    .end(function(err,res){
      if(err){
        console.log('error');
      }
      else{
        alert("registered successfully");
        self.props.router.push('/login');
      }
    })
  }
  render(){
    return(
      <div id = "login-wrapper">
        <div className="container">
          <div className = "row-fluid"  style={{marginTop:'65px', zIndex:1000}}>
            <div className = "span1"></div>
            <div className = "span5" style={{backgroundColor:'#458DDB', padding:'90px 0px 0px 73px', height: '540px'}}>
              <div className="span11">
                <h4>Sign up now</h4>
                <form className="login-form"  onSubmit = {this.userRegistration.bind(this)}>
                  <div className="form-group">
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="firstname" placeholder="firstName" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="lastName" placeholder="Lastname" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="user" placeholder="username" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-4">
                      <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-3 col-sm-5">
                      <button type="submit" className="button-login pull-left">Register</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className = "span5">
              <img src="../../../dist/img/bg/login-image4.png" alt="image" style = {{marginLeft: '-30px'}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
