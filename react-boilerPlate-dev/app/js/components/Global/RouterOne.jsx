import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Router, Route, browserHistory, Link} from 'react-router';


export default class RouterOne extends React.Component {
  render() {
    console.log(
      "ddddddddddddddddddddd"
    );
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div>
            <ul>
               <li><Link to = "/routerOne">RouterOne</Link></li>
               <li><Link to = "/routerTwo">RouterTwo</Link></li>
               <li><Link to = "/routerThree">RouterThree</Link></li>
            </ul>

           {this.props.children}
         </div>
      </div>
    );
  }
}
