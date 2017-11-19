import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';


export default class Home extends React.Component {
  componentWillUnmount(){
    localStorage.clear();
    alert(localStorage.getItem('myTokens'));
  }
  render() {

    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <form>
          <button type="submit" className="btn btn-danger"><Link to = "/logout">Logout</Link></button>
        </form>
      </div>
    );
  }
}
