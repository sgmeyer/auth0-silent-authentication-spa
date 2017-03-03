import React from 'react';
import ReactDOM from 'react-dom';
import ProfileNav from './profilenav';

export default class Navigation  extends React.Component {
  render () {

    let sessionPanel;

    if (this.props && this.props.user ) {
      sessionPanel = (<ProfileNav />);
    } 
    else {
      sessionPanel = (<li><a className="signin-button login" href="/login">Login</a></li>);
    }

    return (
      <header className="site-header">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
              <h1 className="navbar-brand"><a href="/"><span>Auth0</span></a></h1><a className="no-basic hiring animated bounce hidden-sm hidden-xs hidden-md" href="https://github.com/auth0/auth0-samples">View Repo!</a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                { sessionPanel }
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}