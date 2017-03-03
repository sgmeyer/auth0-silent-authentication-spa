import React from 'react';
import ReactDOM from 'react-dom';

export default class Jumbotron extends React.Component {
  render () {
    return (
      <section className="jumbotron">
        <h2><img src="/lib/logos/img/icon-styleguide.svg" /></h2>
        <h1>Jumbotron</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis risus eget urna mollis consectetur adipiscing elit.</p>
        <div className="btn btn-success btn-lg">Try auth0 for free</div>
      </section>
    );
  }
}