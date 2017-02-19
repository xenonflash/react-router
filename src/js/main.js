import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './component/Search';
import $ from 'jquery';
import {Link, Router, route, hashHistory} from 'react-router';
import Home from './home';
import Products from './Products';
import Header from './component/Header';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(
  <Router history={hashHistory}>
    <route path="/" component={Home}></route>
    <route path='/products' component={Products}>
      <route path='/elec'></route>
      <route path='/wood'></route>
      <route path='/art'></route>
      <route path='/hot'></route>
    </route>
  </Router>, 
  document.getElementById('app')
);
