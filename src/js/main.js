import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import $ from 'jquery';
import Home from './home';
import {Link, Router, route, hashHistory} from 'react-router';


ReactDOM.render(
  <Router history={hashHistory}>
    <route path="/" component={Home}>
    </route>
  </Router>, 
  document.getElementById('app')
);
