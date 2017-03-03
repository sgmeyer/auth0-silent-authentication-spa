import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Navigation from './components/navigation';
import Home  from './pages/home';

const App = React.createClass({
  render () {
    return (
      <div>
        <Navigation />
        { this.props.children }
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
  ,
  document.getElementById('app')
);