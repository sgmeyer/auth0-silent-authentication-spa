import React from 'react';
import ReactDOM from 'react-dom';

export default class Jumbotron extends React.Component {
  render () {
    return (
      <section className="jumbotron">
        <h2><img src="/lib/logos/img/icon-styleguide.svg" /></h2>
        <h1>Code Hero</h1>
        <p>Welcome to Code Hero.  Get started by signing up for an account today.</p>
        <div className="btn btn-success btn-lg">Code Hero is Always Free</div>
      </section>
    );
  }
}