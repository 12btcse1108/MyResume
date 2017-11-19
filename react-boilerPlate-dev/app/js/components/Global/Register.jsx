import React from 'react';
import request from 'superagent';

export default class Register extends React.Component{
  constructor(props){
    super(props);
  }
  userRegistration(event){
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
          console.log("registered successfully");
        }
    })
    }
  render(){
    return(
      <div>
        <div className = "col-sm-offset-3" style={{marginTop:'100px'}}>
        <form className="form-horizontal"  onSubmit = {this.userRegistration.bind(this)}>
          <div className="form-group">
             <label className="col-sm-2 control-label">FirstName</label>
             <div className="col-sm-4">
               <input type="text" className="form-control" id="firstname" placeholder="firstName" />
             </div>
           </div>
           <div className="form-group">
              <label className="col-sm-2 control-label">LastName</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" ref="lastName" placeholder="Lastname" />
              </div>
            </div>
            <div className="form-group">
               <label className="col-sm-2 control-label">Username</label>
               <div className="col-sm-4">
                 <input type="text" className="form-control" ref="user" placeholder="username" />
               </div>
             </div>
           <div className="form-group">
              <label className="col-sm-2 control-label">Password</label>
              <div className="col-sm-4">
                <input type="password" className="form-control" ref="password" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-5">
                <button type="submit" className="btn btn-success">Register</button>
              </div>
            </div>
        </form>
      </div>
      </div>
    );
  }
}
