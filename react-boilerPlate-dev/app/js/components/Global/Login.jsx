import React from 'react';
import request from 'superagent';
import {Link} from 'react-router';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {userName:'', password:'', userDetails:[]}
  }

userAuthentication(){
  self = this;
  event.preventDefault();
  var name = this.refs.username.value;
  var pass = this.refs.password.value;
  request
  .post('http://127.0.0.1:5000/auth')
  .send({username:name, password:pass})
  .set('Content-Type', 'application/json')
  .end(function(err, res){
    if(err){
      alert("username or password is incorrect!!")
      console.log("error");
    }
    else{
      var tokens = JSON.parse(res.text);
      localStorage.setItem('myTokens',tokens.access_token);
      self.props.router.push('/home');
    }
  })
}

render(){
  return(
      <div id = "login-wrapper">
        <div className="container">
        <div className = "row-fluid"  style={{marginTop:'65px', zIndex:1000}}>
          <div className = "span1"></div>
          <div className = "span5" style={{backgroundColor:'#458DDB', padding:'140px 0px 0px 73px', height: '540px'}}>
            <div className="span11">
              <h4>Sign in to the site</h4>
              <form className = "login-form">
                <div className="input-prepend">
                  <span className="add-on"><i className="icon-user icon-3x"></i></span>
                  <input type="text" id="prependedInput" type="text" ref="username" placeholder="UserName" />
                </div>
                <div className="input-prepend">
                  <span className="add-on"><i className="icon-lock icon-3x"></i></span>
                  <input type="password" className="login-form-password" id="prependedInput" ref="password" placeholder="Password" />
                </div>
                <div className="control-group">
                  <div className="controls">
                    <button type="submit" className="button-login pull-left"  onClick = {this.userAuthentication.bind(this)} >Sign in</button>
                    <Link to = "/signup">
                    <button type="submit" className="button-login pull-right">Register</button>
                  </Link>
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
    // <div className = "row" >
    //   <div className = "span6 offset3"  style={{marginTop:'200px'}}>
    //     <form className="form-horizontal">
    //       <div className="control-group">
    //         <label className="control-label" for="inputEmail">Email</label>
    //         <div className="controls">
    //           <input type="text" id="inputEmail" placeholder="Email" />
    //           </div>
    //         </div>
    //         <div className="control-group">
    //           <label className="control-label" for="inputPassword">Password</label>
    //           <div className="controls">
    //             <input type="password" id="inputPassword" placeholder="Password" />
    //             </div>
    //           </div>
    //           <div className="control-group">
    //             <div className="controls">
    //               <button type="submit" className="btn">Sign in</button>
    //             </div>
    //           </div>
    //         </form>
    //   </div>
    // </div>
        )
      }
    }
