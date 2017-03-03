import React from 'react';
import ReactDOM from 'react-dom';

export default class ProfileNav extends React.Component {
  render () {
    return (
      <li><a href="/profile">Welcome, {this.props.user.name }></a></li>
    );
  }
}